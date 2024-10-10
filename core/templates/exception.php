<?php
/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2012-2015 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
/** @var array $_ */
/** @var \OCP\IL10N $l */

style('core', ['styles', 'header', 'exception']);

require_once __DIR__ . '/print_exception.php';

?>
<div class="guest-box wide">
	<h2><?php p($l->t('Internal Server Error')) ?></h2>
	<p><?php p($l->t('The server was unable to complete your request.')) ?></p>
	<p><?php p($l->t('If this happens again, please send the technical details below to the server administrator.')) ?></p>
	<p><?php p($l->t('More details can be found in the server log.')) ?></p>
	<?php if (isset($_['serverLogsDocumentation']) && $_['serverLogsDocumentation'] !== ''): ?>
		<p><a href="<?php print_unescaped($_['serverLogsDocumentation']) ?>" target="_blank" rel="noopener"><?php p($l->t('For more details see the documentation ↗.')) ?></a></p>
	<?php endif; ?>

	<h3><?php p($l->t('Technical details')) ?></h3>
	<ul>
		<li><?php p($l->t('Remote Address: %s', [$_['remoteAddr']])) ?></li>
		<li><?php p($l->t('Request ID: %s', [$_['requestID']])) ?></li>
		<?php if (isset($_['debugMode']) && $_['debugMode'] === true): ?>
			<li><?php p($l->t('Type: %s', [$_['errorClass']])) ?></li>
			<li><?php p($l->t('Code: %s', [$_['errorCode']])) ?></li>
			<li><?php p($l->t('Message: %s', [$_['errorMsg']])) ?></li>
			<li><?php p($l->t('File: %s', [$_['file']])) ?></li>
			<li><?php p($l->t('Line: %s', [$_['line']])) ?></li>
		<?php endif; ?>
	</ul>

	<?php if (isset($_['debugMode']) && $_['debugMode'] === true): ?>
		<br />
		<h3><?php p($l->t('Trace')) ?></h3>
		<?php print_exception($_['exception'], $l); ?>
	<?php endif; ?>
</div>
