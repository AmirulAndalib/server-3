OC.L10N.register(
    "files_versions",
    {
    "Versions" : "Versiones",
    "This application automatically maintains older versions of files that are changed." : "Esta aplicación mantiene automáticamente versiones anteriores de archivos que fueron cambiados. ",
    "This application automatically maintains older versions of files that are changed. When enabled, a hidden versions folder is provisioned in every user’s directory and is used to store old file versions. A user can revert to an older version through the web interface at any time, with the replaced file becoming a version. The app automatically manages the versions folder to ensure the user doesn’t run out of Quota because of versions.\n\t\tIn addition to the expiry of versions, the versions app makes certain never to use more than 50% of the user’s currently available free space. If stored versions exceed this limit, the app will delete the oldest versions first until it meets this limit. More information is available in the Versions documentation." : "Esta aplicación mantiene automáticamente versiones anteriores de los archivos que se cambian. Al habilitarse, una carpeta oculata de versiones de archivos se aprovisiona en cada directorio del usuario y se usa para almacenar las versiones anteriores de los archivos. Un usuario puede regresar a una versión anterior mediante al interfaz web en cualquier momento, el archivo reemplazado se convierte en una versión. La aplicación administra automáticamente la carpeta de versiones para asegurar que el usuario no agote su Cuota con estas versiones. \n\t\tAdicionalmente a la expiración de las versiones, la aplicación de versiones se asegura de nunca usar mas del 50% del espacio actualmente disponible del usuario. Si las versiones almacenadas exceden este límite, la aplicación borrará las versiones más antiguas hasta que se llegue dentro de este límite. Más información está disponible en la documentacion de Versiones. ",
    "Failed to revert {file} to revision {timestamp}." : "Falla al revertir {file} a revisión {timestamp}.",
    "_%n byte_::_%n bytes_" : ["%n byte","%n bytes","%n bytes"],
    "Restore" : "Restaurar",
    "No other versions available" : "No hay otras versiones disponibles"
},
"nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
