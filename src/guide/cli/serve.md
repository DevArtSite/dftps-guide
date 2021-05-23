# Run server

To launch your server you just need to execute the following command with root privileges.

> Remember that before executing this command you must have edited the configuration file which should normally be at `/etc/dftps.toml`, If you have not done so, refer to [Software Setup](../soft-setup.html#after-install)

```sh
sudo dftps serve
```

You can enable debug mode by adding `-d` to the command.

> *For this example I deliberately added a delay of 2000ms between each server response.*

![output_example](../assets/server-log.gif)