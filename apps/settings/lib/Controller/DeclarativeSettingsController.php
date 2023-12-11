<?php
/**
 * @copyright Copyright (c) 2023 Kate Döen <kate.doeen@nextcloud.com>
 *
 * @author Kate Döen <kate.doeen@nextcloud.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Settings\Controller;

use Exception;
use OC\AppFramework\Middleware\Security\Exceptions\NotAdminException;
use OC\AppFramework\Middleware\Security\Exceptions\NotLoggedInException;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\OCS\OCSBadRequestException;
use OCP\AppFramework\OCSController;
use OCP\IRequest;
use OCP\IUserSession;
use OCP\Settings\IDeclarativeManager;
use Psr\Log\LoggerInterface;

/**
 *
 */
class DeclarativeSettingsController extends OCSController {
	public function __construct(
		$appName,
		IRequest $request,
		private IUserSession $userSession,
		private IDeclarativeManager $declarativeManager,
		private LoggerInterface $logger,
	) {
		parent::__construct($appName, $request);
	}

	/**
	 * Sets a declarative settings value
	 *
	 * @param string $app ID of the app
	 * @param string $fieldId ID of the field
	 * @param mixed $value Value to be saved
	 * @return DataResponse<Http::STATUS_OK, null, array{}>
	 * @throws NotLoggedInException Not logged in or not an admin user
	 * @throws NotAdminException Not logged in or not an admin user
	 * @throws OCSBadRequestException Invalid arguments to save value
	 *
	 * 200: Value set successfully
	 */
	#[NoAdminRequired]
	public function setValue(string $app, string $fieldId, mixed $value): DataResponse {
		$user = $this->userSession->getUser();
		if ($user === null) {
			throw new NotLoggedInException();
		}

		try {
			$this->declarativeManager->loadSchemas();
			$this->declarativeManager->setValue($user, $app, $fieldId, $value);
			return new DataResponse(null);
		} catch (NotAdminException $e) {
			throw $e;
		} catch (Exception $e) {
			$this->logger->error("Failed to set declarative settings value: " . $e->getMessage());
			throw new OCSBadRequestException();
		}
	}
}
