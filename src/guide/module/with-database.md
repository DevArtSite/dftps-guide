# Example with database

> This example shows you how to use our ftp server with the help of the [DenoDB](https://deno.land/x/denodb) module.

## Import

To begin we will initially import the "createDb" function which will allow us to create a database and the "Users" model in addition to the imports mentioned above.

  ```ts
  import { verify, Model } from "https://deno.land/x/dftps/deps.ts";
  import createDb from "https://deno.land/x/dftps/src/db/mod.ts";
  import Users from "https://deno.land/x/dftps/src/db/Users.ts";
  ```

## Database options

Only the following database types are supported: "MariaDB" | "MongoDB" | "MySQL" | "PostgreSQL" | "SQLite"

- Maria, MySQL, PostgreSQL Options
  - database [string] (Required)
  - host [string] (Required)
  - username [string] (Required)
  - password [string] (Required)
  - port [number] (Optional)
- MongoDB Options
  - uri [string] (Required)
  - database [string] (Required)
- SQLite Options
  - filepath [string] (Required)

```ts
/** Example with MongoDB */
await createDb({
  connector: "MongoDB",
  uri: 'mongodb://127.0.0.1:27017',
  database: 'test'
});
```

## Server options

Then we just need to create an instance of Server with these options described below.

- [Listener Options](https://doc.deno.land/https/deno.land%2Fx%2Fdftps%2Fsrc%2Fserver%2Fmod.ts#FTPOptions)
- [FTPServer Options](https://doc.deno.land/https/deno.land%2Fx%2Fdftps%2Fsrc%2Fserver%2Fmod.ts#FTPServerOptions)

```ts
const serve = new Server({ port: 21, hostname: "127.0.0.1" });
```

## Await connection

All we have to do is wait for a new connection and check the veracity of it using the authentication tools (awaitUsername, awaitLogin) as well as the database api.

```ts
for await (const connection of serve) {
  const { awaitUsername, awaitLogin } = connection;
  let user: Model;
  /** Waiting to receiving username from connection */
  awaitUsername.then(({ username, resolveUsername }: UsernameResolvable) => {
    /** Find user in database */
    const found = await Users.where('username', username).get();
    if ((found instanceof Array && found.length === 0) || !found) return resolveUsername.reject("Incorrect username!");
    user = (found instanceof Array) ? found[0] : found;
    resolveUsername.resolve();
  });
  /** Waiting to receiving password from connection and finalize the user authenticate */
  awaitLogin.then(async ({ password, resolvePassword }: LoginResolvable) => {
    if (!user) return resolvePassword.reject("User not found!");
    if (! await verify(password, (user.password as string))) return resolvePassword.reject("Wrong password!");
    const { root, uid, gid } = user;
    resolvePassword.resolve({ root: (root as string), uid: (uid as number), gid: (gid as number) });
  });
}
```
