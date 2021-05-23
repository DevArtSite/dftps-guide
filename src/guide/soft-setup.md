# Software Setup

## Introduction of setup

For the sake of ease, I opted for a Deno-style installation, so to install DFtpS you just need to call a bash script stored in the project’s repo git and run it with root privileges **is very important**.

**It is very important to start the installation with root rights, because at the time of installation the executable is stored in the "/usr/bin" directory and the software configuration file in the "/etc" folder and only the root user normally has access to these two folders.**

**For the moment this project is only compatible with the linux system.**

## Install

```sh
curl -fsSL https://deno.land/x/dftps/install.sh | sudo sh
```

## Install Specific Version

```sh
curl -fsSL https://deno.land/x/dftps/install.sh | sudo sh -s v1.0.0
```

## After install

After the installation you will be asked to edit the configuration file in "/etc/dftps.toml".

```sh
sudo nano /etc/dftps.toml
```

Here is an example of this file:

```ini
#ftp server default config file
[addr]
  port = 21
# hostname = "127.0.0.1"

[options]
  # Url for passive connection.
  pasvUrl = "127.0.0.1"
  # Minimum port for passive connection.
  pasvMin = 1024
  # Maximum port for passive connection.
  pasvMax = 65535
  # Handle anonymous connexion. true || false
# anonymous = false
  # Sets the format to use for file stat queries such as "LIST".
# fileFormat?: string;
  # Array of commands that are not allowed
# blacklist?: string[];
  # Url of webhook like Discord webhook
# webhook="webhook-url"

[database]
  # Select your connector type ("MariaDB" | "MongoDB" | "MySQL" | "PostgreSQL" | "SQLite")
  #connector = "MariaDB"

  # MariaDB, MySQL, PostgreSQL Example
  #database = "database-name"
  #host = "host"
  #username = "username"
  #password = "password"
  #port = port

  # MongoDB Example
  #"mongodb://127.0.0.1:27017"
  #uri = "mongodb-url"
  #database = "database-name"

  # SQLite Example
  #filepath = "sqlite file path"
```

Once you have edited the configuration file correctly you can use the CLI interface to interact with our software and start your ftp server.

To learn more about the CLI interface [it’s here](./cli).
