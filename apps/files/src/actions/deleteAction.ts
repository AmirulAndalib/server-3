/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
import { emit } from '@nextcloud/event-bus'
import { Permission, Node, View, FileAction, FileType } from '@nextcloud/files'
import { translate as t, translatePlural as n } from '@nextcloud/l10n'
import axios from '@nextcloud/axios'

import CloseSvg from '@mdi/svg/svg/close.svg?raw'
import NetworkOffSvg from '@mdi/svg/svg/network-off.svg?raw'
import TrashCanSvg from '@mdi/svg/svg/trash-can.svg?raw'

import logger from '../logger.js'

const canUnshareOnly = (nodes: Node[]) => {
	return nodes.every(node => node.attributes['is-mount-root'] === true
		&& node.attributes['mount-type'] === 'shared')
}

const canDisconnectOnly = (nodes: Node[]) => {
	return nodes.every(node => node.attributes['is-mount-root'] === true
		&& node.attributes['mount-type'] === 'external')
}

const isMixedUnshareAndDelete = (nodes: Node[]) => {
	if (nodes.length === 1) {
		return false
	}

	const hasSharedItems = nodes.some(node => canUnshareOnly([node]))
	const hasDeleteItems = nodes.some(node => !canUnshareOnly([node]))
	return hasSharedItems && hasDeleteItems
}

const isAllFiles = (nodes: Node[]) => {
	return !nodes.some(node => node.type !== FileType.File)
}

const isAllFolders = (nodes: Node[]) => {
	return !nodes.some(node => node.type !== FileType.Folder)
}

export const action = new FileAction({
	id: 'delete',
	displayName(nodes: Node[], view: View) {
		if (isMixedUnshareAndDelete(nodes)) {
			return t('files', 'Delete and unshare')
		}

		/**
		 * If this node is the root node of the share,
		 * we can only unshare it.
		 */
		if (canUnshareOnly(nodes)) {
			return n('files', 'Leave this share', 'Leave these shares', nodes.length)
		}

		/**
		 * If this node is the root node of the external storage,
		 * we can only disconnect it.
		 */
		if (canDisconnectOnly(nodes)) {
			return n('files', 'Disconnect storage', 'Disconnect storages', nodes.length)
		}

		/**
		 * If we're in the trashbin, we can only delete permanently
		 */
		if (view.id === 'trashbin') {
			return t('files', 'Delete permanently')
		}

		/**
		 * If we're only selecting files, use proper wording
		 */
		if (isAllFiles(nodes)) {
		 return n('files', 'Delete file', 'Delete files', nodes.length)
		}

		/**
		 * If we're only selecting folders, use proper wording
		 */
		if (isAllFolders(nodes)) {
			return n('files', 'Delete folder', 'Delete folders', nodes.length)
		}

		return t('files', 'Delete')
	},
	iconSvgInline: (nodes: Node[]) => {
		if (canUnshareOnly(nodes)) {
			return CloseSvg
		}

		if (canDisconnectOnly(nodes)) {
			return NetworkOffSvg
		}

		return TrashCanSvg
	},

	enabled(nodes: Node[]) {
		return nodes.length > 0 && nodes
			.map(node => node.permissions)
			.every(permission => (permission & Permission.DELETE) !== 0)
	},

	async exec(node: Node) {
		try {
			await axios.delete(node.encodedSource)

			// Let's delete even if it's moved to the trashbin
			// since it has been removed from the current view
			//  and changing the view will trigger a reload anyway.
			emit('files:node:deleted', node)
			return true
		} catch (error) {
			logger.error('Error while deleting a file', { error, source: node.source, node })
			return false
		}
	},
	async execBatch(nodes: Node[], view: View, dir: string) {
		return Promise.all(nodes.map(node => this.exec(node, view, dir)))
	},

	order: 100,
})
