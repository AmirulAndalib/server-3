<?php
/**
 * @copyright Copyright (c) 2017 Arthur Schiwon <blizzz@arthur-schiwon.de>
 *
 * @author Arthur Schiwon <blizzz@arthur-schiwon.de>
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author Joas Schilling <coding@schilljs.com>
 * @author Robin Appelman <robin@icewind.nl>
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

use OC\AppFramework\Bootstrap\Coordinator;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\IgnoreOpenAPI;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\Group\ISubAdmin;
use OCP\IGroupManager;
use OCP\INavigationManager;
use OCP\IRequest;
use OCP\IUserSession;
use OCP\Settings\IDeclarativeManager;
use OCP\Settings\IManager as ISettingsManager;
use OCP\Template;

#[IgnoreOpenAPI]
class PersonalSettingsController extends Controller {
	use CommonSettingsTrait;

	public function __construct(
		$appName,
		IRequest $request,
		INavigationManager $navigationManager,
		ISettingsManager $settingsManager,
		IUserSession $userSession,
		IGroupManager $groupManager,
		ISubAdmin $subAdmin,
		Coordinator $coordinator,
		IDeclarativeManager $declarativeSettingsManager,
		IEventDispatcher $eventDispatcher,
		IInitialState $initialState,
	) {
		parent::__construct($appName, $request);
		$this->navigationManager = $navigationManager;
		$this->settingsManager = $settingsManager;
		$this->userSession = $userSession;
		$this->subAdmin = $subAdmin;
		$this->groupManager = $groupManager;
		$this->declarativeSettingsManager = $declarativeSettingsManager;
		$this->initialState = $initialState;
	}

	/**
	 * @NoCSRFRequired
	 * @NoAdminRequired
	 * @NoSubAdminRequired
	 */
	public function index(string $section): TemplateResponse {
		return $this->getIndexResponse('personal', $section);
	}

	/**
	 * @param string $section
	 * @return array
	 */
	protected function getSettings($section) {
		$settings = $this->settingsManager->getPersonalSettings($section);
		$formatted = $this->formatSettings($settings);
		if ($section === 'additional') {
			$formatted['content'] .= $this->getLegacyForms();
		}
		return $formatted;
	}

	/**
	 * @return bool|string
	 */
	private function getLegacyForms() {
		$forms = \OC_App::getForms('personal');

		$forms = array_map(function ($form) {
			if (preg_match('%(<h2(?P<class>[^>]*)>.*?</h2>)%i', $form, $regs)) {
				$sectionName = str_replace('<h2' . $regs['class'] . '>', '', $regs[0]);
				$sectionName = str_replace('</h2>', '', $sectionName);
				$anchor = strtolower($sectionName);
				$anchor = str_replace(' ', '-', $anchor);

				return [
					'anchor' => $anchor,
					'section-name' => $sectionName,
					'form' => $form
				];
			}
			return [
				'form' => $form
			];
		}, $forms);

		$out = new Template('settings', 'settings/additional');
		$out->assign('forms', $forms);

		return $out->fetchPage();
	}
}
