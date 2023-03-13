<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2023, Thomas Citharel <nextcloud@tcit.fr>
 *
 * @author Thomas Citharel <nextcloud@tcit.fr>
 *
 * @license AGPL-3.0
 *
 * This code is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License, version 3,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License, version 3,
 * along with this program. If not, see <http://www.gnu.org/licenses/>
 *
 */
namespace OCP\User\Events;

use OCP\EventDispatcher\Event;

/**
 * @since 27.0.0
 */
class BeforeUserIdUnassignedEvent extends Event {
	private string $userId;

	/**
	 * @since 27.0.0
	 */
	public function __construct(string $userId) {
		parent::__construct();
		$this->userId = $userId;
	}

	/**
	 * @since 27.0.0
	 */
	public function getUserId(): string {
		return $this->userId;
	}
}
