OC.L10N.register(
    "files_external",
    {
    "Type to select user or group." : "Type to select user or group.",
    "(Group)" : "(Group)",
    "Compatibility with Mac NFD encoding (slow)" : "Compatibility with Mac NFD encoding (slow)",
    "Enable encryption" : "Enable encryption",
    "Enable previews" : "Enable previews",
    "Enable sharing" : "Enable sharing",
    "Check for changes" : "Check for changes",
    "Never" : "Never",
    "Once every direct access" : "Once every direct access",
    "Read only" : "Read only",
    "Disconnect" : "Disconnect",
    "Admin defined" : "Admin defined",
    "Automatic status checking is disabled due to the large number of configured storages, click to check status" : "Automatic status checking is disabled due to the large number of configured storages, click to check status",
    "Are you sure you want to disconnect this external storage? It will make the storage unavailable in Nextcloud and will lead to a deletion of these files and folders on any sync client that is currently connected but will not delete any files and folders on the external storage itself." : "Are you sure you want to disconnect this external storage? It will make the storage unavailable in Nextcloud and will lead to a deletion of these files and folders on any sync client that is currently connected but will not delete any files and folders on the external storage itself.",
    "Delete storage?" : "Delete storage?",
    "Saved" : "Saved",
    "Saving …" : "Saving …",
    "Save" : "Save",
    "Forbidden to manage local mounts" : "Forbidden to manage local mounts",
    "Storage with ID \"%d\" not found" : "Storage with ID \"%d\" not found",
    "Invalid backend or authentication mechanism class" : "Invalid backend or authentication mechanism class",
    "Invalid mount point" : "Invalid mount point",
    "Objectstore forbidden" : "Objectstore forbidden",
    "Invalid storage backend \"%s\"" : "Invalid storage backend \"%s\"",
    "Not permitted to use backend \"%s\"" : "Not permitted to use backend \"%s\"",
    "Not permitted to use authentication mechanism \"%s\"" : "Not permitted to use authentication mechanism \"%s\"",
    "Unsatisfied backend parameters" : "Unsatisfied backend parameters",
    "Unsatisfied authentication mechanism parameters" : "Unsatisfied authentication mechanism parameters",
    "Insufficient data: %s" : "Insufficient data: %s",
    "%s" : "%s",
    "Storage with ID \"%d\" is not user editable" : "Storage with ID \"%d\" is not user editable",
    "Access key" : "Access key",
    "Secret key" : "Secret key",
    "Builtin" : "Builtin",
    "None" : "None",
    "OAuth1" : "OAuth1",
    "App key" : "App key",
    "App secret" : "App secret",
    "OAuth2" : "OAuth2",
    "Client ID" : "Client ID",
    "Client secret" : "Client secret",
    "OpenStack v2" : "OpenStack v2",
    "Username" : "Username",
    "Password" : "Password",
    "Tenant name" : "Tenant name",
    "Identity endpoint URL" : "Identity endpoint URL",
    "OpenStack v3" : "OpenStack v3",
    "Domain" : "Domain",
    "Rackspace" : "Rackspace",
    "API key" : "API key",
    "Global credentials" : "Global credentials",
    "Log-in credentials, save in database" : "Log-in credentials, save in database",
    "Username and password" : "Username and password",
    "Log-in credentials, save in session" : "Log-in credentials, save in session",
    "Global credentials, user entered" : "Global credentials, user entered",
    "User entered, store in database" : "User entered, store in database",
    "RSA public key" : "RSA public key",
    "Public key" : "Public key",
    "RSA private key" : "RSA private key",
    "Private key" : "Private key",
    "Kerberos default realm, defaults to \"WORKGROUP\"" : "Kerberos default realm, defaults to \"WORKGROUP\"",
    "Kerberos ticket Apache mode" : "Kerberos ticket Apache mode",
    "Kerberos ticket" : "Kerberos ticket",
    "Amazon S3" : "Amazon S3",
    "Bucket" : "Bucket",
    "Hostname" : "Hostname",
    "Port" : "Port",
    "Region" : "Region",
    "Storage Class" : "Storage Class",
    "Enable SSL" : "Enable SSL",
    "Enable Path Style" : "Enable Path Style",
    "Legacy (v2) authentication" : "Legacy (v2) authentication",
    "WebDAV" : "WebDAV",
    "URL" : "URL",
    "Remote subfolder" : "Remote subfolder",
    "Secure https://" : "Secure https://",
    "FTP" : "FTP",
    "Host" : "Host",
    "Secure ftps://" : "Secure ftps://",
    "Local" : "Local",
    "Location" : "Location",
    "Nextcloud" : "Nextcloud",
    "SFTP" : "SFTP",
    "Root" : "Root",
    "SFTP with secret key login" : "SFTP with secret key login",
    "SMB/CIFS" : "SMB/CIFS",
    "Share" : "Share",
    "Show hidden files" : "Show hidden files",
    "Case sensitive file system" : "Case sensitive file system",
    "Disabling it will allow to use a case insentive file system, but comes with a performance penalty" : "Disabling it will allow to use a case insentive file system, but comes with a performance penalty",
    "Verify ACL access when listing files" : "Verify ACL access when listing files",
    "Check the ACL's of each file or folder inside a directory to filter out items where the user has no read permissions, comes with a performance penalty" : "Check the ACL's of each file or folder inside a directory to filter out items where the user has no read permissions, comes with a performance penalty",
    "Timeout" : "Timeout",
    "SMB/CIFS using OC login" : "SMB/CIFS using OC login",
    "Username as share" : "Username as share",
    "OpenStack Object Storage" : "OpenStack Object Storage",
    "Service name" : "Service name",
    "Request timeout (seconds)" : "Request timeout (seconds)",
    "The cURL support in PHP is not enabled or installed. Mounting of %s is not possible. Please ask your system administrator to install it." : "The cURL support in PHP is not enabled or installed. Mounting of %s is not possible. Please ask your system administrator to install it.",
    "The FTP support in PHP is not enabled or installed. Mounting of %s is not possible. Please ask your system administrator to install it." : "The FTP support in PHP is not enabled or installed. Mounting of %s is not possible. Please ask your system administrator to install it.",
    "\"%1$s\" is not installed. Mounting of %2$s is not possible. Please ask your system administrator to install it." : "\"%1$s\" is not installed. Mounting of %2$s is not possible. Please ask your system administrator to install it.",
    "External storage" : "External storage",
    "External storage support" : "External storage support",
    "Adds basic external storage support" : "Adds basic external storage support",
    "This application enables administrators to configure connections to external storage providers, such as FTP servers, S3 or SWIFT object stores, other Nextcloud servers, WebDAV servers, and more. Administrators can choose which types of storage to enable and can mount these storage locations for a user, a group, or the entire system. Users will see a new folder appear in their root Nextcloud directory, which they can access and use like any other Nextcloud folder. External storage also allows users to share files stored in these external locations. In these cases, the credentials for the owner of the file are used when the recipient requests the file from external storage, thereby ensuring that the recipient can access the shared file.\n\nExternal storage can be configured using the GUI or at the command line. This second option provides the advanced user with more flexibility for configuring bulk external storage mounts and setting mount priorities. More information is available in the external storage GUI documentation and the external storage Configuration File documentation." : "This application enables administrators to configure connections to external storage providers, such as FTP servers, S3 or SWIFT object stores, other Nextcloud servers, WebDAV servers, and more. Administrators can choose which types of storage to enable and can mount these storage locations for a user, a group, or the entire system. Users will see a new folder appear in their root Nextcloud directory, which they can access and use like any other Nextcloud folder. External storage also allows users to share files stored in these external locations. In these cases, the credentials for the owner of the file are used when the recipient requests the file from external storage, thereby ensuring that the recipient can access the shared file.\n\nExternal storage can be configured using the GUI or at the command line. This second option provides the advanced user with more flexibility for configuring bulk external storage mounts and setting mount priorities. More information is available in the external storage GUI documentation and the external storage Configuration File documentation.",
    "Enter missing credentials" : "Enter missing credentials",
    "Unable to update this external storage config. {statusMessage}" : "Unable to update this external storage config. {statusMessage}",
    "New configuration successfully saved" : "New configuration successfully saved",
    "There was an error with this external storage." : "There was an error with this external storage.",
    "We were unable to check the external storage {basename}" : "We were unable to check the external storage {basename}",
    "Examine this faulty external storage configuration" : "Examine this faulty external storage configuration",
    "Open in files" : "Open in files",
    "There was an error with this external storage. Do you want to review this mount point config in the settings page?" : "There was an error with this external storage. Do you want to review this mount point config in the settings page?",
    "External mount error" : "External mount error",
    "List of external storage." : "List of external storage.",
    "There is no external storage configured. You can configure them in your Personal settings." : "There is no external storage configured. You can configure them in your Personal settings.",
    "There is no external storage configured and you don't have the permission to configure them." : "There is no external storage configured and you don't have the permission to configure them.",
    "No external storage" : "No external storage",
    "Storage type" : "Storage type",
    "Unknown" : "Unknown",
    "Scope" : "Scope",
    "Personal" : "Personal",
    "System" : "System",
    "No external storage configured or you don't have the permission to configure them" : "No external storage configured or you don't have the permission to configure them",
    "Open documentation" : "Open documentation",
    "External storage enables you to mount external storage services and devices as secondary Nextcloud storage devices. You may also allow users to mount their own external storage services." : "External storage enables you to mount external storage services and devices as secondary Nextcloud storage devices. You may also allow users to mount their own external storage services.",
    "Folder name" : "Folder name",
    "Authentication" : "Authentication",
    "Configuration" : "Configuration",
    "Available for" : "Available for",
    "Click to recheck the configuration" : "Click to recheck the configuration",
    "Add storage" : "Add storage",
    "All users" : "All users",
    "Advanced settings" : "Advanced settings",
    "Allow users to mount external storage" : "Allow users to mount external storage",
    "Global credentials can be used to authenticate with multiple external storages that have the same credentials." : "Global credentials can be used to authenticate with multiple external storages that have the same credentials.",
    "Grant access" : "Grant access",
    "Error configuring OAuth1" : "Error configuring OAuth1",
    "Please provide a valid app key and secret." : "Please provide a valid app key and secret.",
    "Error configuring OAuth2" : "Error configuring OAuth2",
    "Generate keys" : "Generate keys",
    "Error generating key pair" : "Error generating key pair",
    "Empty response from the server" : "Empty response from the server",
    "Couldn't access. Please log out and in again to activate this mount point" : "Couldn't access. Please log out and in again to activate this mount point",
    "Couldn't get the information from the remote server: {code} {type}" : "Couldn't get the information from the remote server: {code} {type}",
    "Couldn't get the list of external mount points: {type}" : "Couldn't get the list of external mount points: {type}",
    "There was an error with message: " : "There was an error with message: ",
    "external-storage" : "external-storage",
    "Couldn't fetch list of Windows network drive mount points: Empty response from server" : "Couldn't fetch list of Windows network drive mount points: Empty response from server",
    "Please enter the credentials for the {mount} mount" : "Please enter the credentials for the {mount} mount",
    "Credentials saved" : "Credentials saved",
    "Credentials saving failed" : "Credentials saving failed",
    "Credentials required" : "Credentials required",
    "Name" : "Name"
},
"nplurals=2; plural=(n != 1);");
