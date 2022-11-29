<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitFiles_Versions
{
    public static $prefixLengthsPsr4 = array (
        'O' => 
        array (
            'OCA\\Files_Versions\\' => 19,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'OCA\\Files_Versions\\' => 
        array (
            0 => __DIR__ . '/..' . '/../lib',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'OCA\\Files_Versions\\AppInfo\\Application' => __DIR__ . '/..' . '/../lib/AppInfo/Application.php',
        'OCA\\Files_Versions\\BackgroundJob\\ExpireVersions' => __DIR__ . '/..' . '/../lib/BackgroundJob/ExpireVersions.php',
        'OCA\\Files_Versions\\Capabilities' => __DIR__ . '/..' . '/../lib/Capabilities.php',
        'OCA\\Files_Versions\\Command\\CleanUp' => __DIR__ . '/..' . '/../lib/Command/CleanUp.php',
        'OCA\\Files_Versions\\Command\\Expire' => __DIR__ . '/..' . '/../lib/Command/Expire.php',
        'OCA\\Files_Versions\\Command\\ExpireVersions' => __DIR__ . '/..' . '/../lib/Command/ExpireVersions.php',
        'OCA\\Files_Versions\\Controller\\PreviewController' => __DIR__ . '/..' . '/../lib/Controller/PreviewController.php',
        'OCA\\Files_Versions\\Db\\VersionEntity' => __DIR__ . '/..' . '/../lib/Db/VersionEntity.php',
        'OCA\\Files_Versions\\Db\\VersionsMapper' => __DIR__ . '/..' . '/../lib/Db/VersionsMapper.php',
        'OCA\\Files_Versions\\Events\\CreateVersionEvent' => __DIR__ . '/..' . '/../lib/Events/CreateVersionEvent.php',
        'OCA\\Files_Versions\\Expiration' => __DIR__ . '/..' . '/../lib/Expiration.php',
        'OCA\\Files_Versions\\Hooks' => __DIR__ . '/..' . '/../lib/Hooks.php',
        'OCA\\Files_Versions\\Listener\\LoadAdditionalListener' => __DIR__ . '/..' . '/../lib/Listener/LoadAdditionalListener.php',
        'OCA\\Files_Versions\\Listener\\LoadSidebarListener' => __DIR__ . '/..' . '/../lib/Listener/LoadSidebarListener.php',
        'OCA\\Files_Versions\\Migration\\Version1020Date20221114144058' => __DIR__ . '/..' . '/../lib/Migration/Version1020Date20221114144058.php',
        'OCA\\Files_Versions\\Sabre\\Plugin' => __DIR__ . '/..' . '/../lib/Sabre/Plugin.php',
        'OCA\\Files_Versions\\Sabre\\RestoreFolder' => __DIR__ . '/..' . '/../lib/Sabre/RestoreFolder.php',
        'OCA\\Files_Versions\\Sabre\\RootCollection' => __DIR__ . '/..' . '/../lib/Sabre/RootCollection.php',
        'OCA\\Files_Versions\\Sabre\\VersionCollection' => __DIR__ . '/..' . '/../lib/Sabre/VersionCollection.php',
        'OCA\\Files_Versions\\Sabre\\VersionFile' => __DIR__ . '/..' . '/../lib/Sabre/VersionFile.php',
        'OCA\\Files_Versions\\Sabre\\VersionHome' => __DIR__ . '/..' . '/../lib/Sabre/VersionHome.php',
        'OCA\\Files_Versions\\Sabre\\VersionRoot' => __DIR__ . '/..' . '/../lib/Sabre/VersionRoot.php',
        'OCA\\Files_Versions\\Storage' => __DIR__ . '/..' . '/../lib/Storage.php',
        'OCA\\Files_Versions\\Versions\\BackendNotFoundException' => __DIR__ . '/..' . '/../lib/Versions/BackendNotFoundException.php',
        'OCA\\Files_Versions\\Versions\\IDeletableVersionBackend' => __DIR__ . '/..' . '/../lib/Versions/IDeletableVersionBackend.php',
        'OCA\\Files_Versions\\Versions\\INameableVersion' => __DIR__ . '/..' . '/../lib/Versions/INameableVersion.php',
        'OCA\\Files_Versions\\Versions\\INameableVersionBackend' => __DIR__ . '/..' . '/../lib/Versions/INameableVersionBackend.php',
        'OCA\\Files_Versions\\Versions\\IVersion' => __DIR__ . '/..' . '/../lib/Versions/IVersion.php',
        'OCA\\Files_Versions\\Versions\\IVersionBackend' => __DIR__ . '/..' . '/../lib/Versions/IVersionBackend.php',
        'OCA\\Files_Versions\\Versions\\IVersionManager' => __DIR__ . '/..' . '/../lib/Versions/IVersionManager.php',
        'OCA\\Files_Versions\\Versions\\LegacyVersionsBackend' => __DIR__ . '/..' . '/../lib/Versions/LegacyVersionsBackend.php',
        'OCA\\Files_Versions\\Versions\\Version' => __DIR__ . '/..' . '/../lib/Versions/Version.php',
        'OCA\\Files_Versions\\Versions\\VersionManager' => __DIR__ . '/..' . '/../lib/Versions/VersionManager.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitFiles_Versions::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitFiles_Versions::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitFiles_Versions::$classMap;

        }, null, ClassLoader::class);
    }
}
