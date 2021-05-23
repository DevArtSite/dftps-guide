# Module Setup

## Install Deno

If you have not yet installed Deno, go to the [website](https://deno.land), its just about running a single command.

Well, there isn't anything else you'll need except Deno. But it's good to have an IDE, or just Editor, and in this case, [VS Code](https://code.visualstudio.com/) serves very well. Though JetBrains IDE support Deno with a Plugin too.

## VS Code Setup

If you are using VS Code (recommended), go ahead and install "VSCode Deno" extension for complete Deno support.
Open VS Code in your project directory, and add a new directory `.vscode` with a file `settings.json` in it.
Write the following contents into the file,

```json
{
    "deno.enable": true
}
```

Deno is now enabled in your directory! If you are having issues, try reloading VS Code. with `CTRL + Shift + P` and search `Reload Windows`.

To learn more about the module [it’s here](./module/simple).
