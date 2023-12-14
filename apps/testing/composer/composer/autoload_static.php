<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitTesting
{
    public static $prefixLengthsPsr4 = array (
        'O' => 
        array (
            'OCA\\Testing\\' => 12,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'OCA\\Testing\\' => 
        array (
            0 => __DIR__ . '/..' . '/../lib',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'OCA\\Testing\\AlternativeHomeUserBackend' => __DIR__ . '/..' . '/../lib/AlternativeHomeUserBackend.php',
        'OCA\\Testing\\AppInfo\\Application' => __DIR__ . '/..' . '/../lib/AppInfo/Application.php',
        'OCA\\Testing\\Controller\\ConfigController' => __DIR__ . '/..' . '/../lib/Controller/ConfigController.php',
        'OCA\\Testing\\Controller\\LockingController' => __DIR__ . '/..' . '/../lib/Controller/LockingController.php',
        'OCA\\Testing\\Controller\\RateLimitTestController' => __DIR__ . '/..' . '/../lib/Controller/RateLimitTestController.php',
        'OCA\\Testing\\Listener\\GetDeclarativeSettingsValueListener' => __DIR__ . '/..' . '/../lib/Listener/GetDeclarativeSettingsValueListener.php',
        'OCA\\Testing\\Listener\\RegisterDeclarativeSettingsListener' => __DIR__ . '/..' . '/../lib/Listener/RegisterDeclarativeSettingsListener.php',
        'OCA\\Testing\\Listener\\SetDeclarativeSettingsValueListener' => __DIR__ . '/..' . '/../lib/Listener/SetDeclarativeSettingsValueListener.php',
        'OCA\\Testing\\Locking\\FakeDBLockingProvider' => __DIR__ . '/..' . '/../lib/Locking/FakeDBLockingProvider.php',
        'OCA\\Testing\\Provider\\FakeText2ImageProvider' => __DIR__ . '/..' . '/../lib/Provider/FakeText2ImageProvider.php',
        'OCA\\Testing\\Provider\\FakeTextProcessingProvider' => __DIR__ . '/..' . '/../lib/Provider/FakeTextProcessingProvider.php',
        'OCA\\Testing\\Provider\\FakeTranslationProvider' => __DIR__ . '/..' . '/../lib/Provider/FakeTranslationProvider.php',
        'OCA\\Testing\\Settings\\DeclarativeSettingsForm' => __DIR__ . '/..' . '/../lib/Settings/DeclarativeSettingsForm.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitTesting::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitTesting::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitTesting::$classMap;

        }, null, ClassLoader::class);
    }
}
