# Simple example

> In this example you will see how to import our dependencies and how to use them.

## Import

First, we import the Server class and type for user authentication.

```ts
import { Server } from "https://deno.land/x/dftps/server/mod.ts";
import type { UsernameResolvable, LoginResolvable } from "https://deno.land/x/dftps/server/connection.ts";
```

## Server options

Then we just need to create an instance of Server with these options described below.

- [Listener Options](https://doc.deno.land/https/deno.land%2Fx%2Fdftps%2Fsrc%2Fserver%2Fmod.ts#FTPOptions)
- *Optional* [FTPServer Options](https://doc.deno.land/https/deno.land%2Fx%2Fdftps%2Fsrc%2Fserver%2Fmod.ts#FTPServerOptions)

```ts
const serve = new Server({ port: 21 });
```

## Await connection

All we have to do is wait for a new connection and check the veracity of it using the authentication tools (awaitUsername, awaitLogin).

```ts
for await (const connection of serve) {
  const { awaitUsername, awaitLogin } = connection;
  /** waiting to receiving username from connection */
  awaitUsername.then(({ username, resolveUsername }: UsernameResolvable) => {
    if (!username !== "my-username") return resolveUsername.reject("Incorrect username!");
    resolveUsername.resolve();
  });
  /** waiting to receiving password from connection and finalize the user authenticate */
  awaitLogin.then(({ password, resolvePassword }: LoginResolvable) => {
    if (password !== "my-password") return resolvePassword.reject("Wrong password!");
    resolvePassword.resolve({ root: "my-folder", uid: 1000, gid: 1000 });
  });
}
```
