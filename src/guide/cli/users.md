# Manage ftp users

> In this section you will see how you can add, view information or delete a user and see the list of users.

## Add an user

To add a user you will need to make the following command with these mandatory parameters.

- **-u** or **--username** Username of ftp account
- **-p** or **--password** Password of ftp account
- **-r** or **--root** Directory of ftp account
- **--uid** User id of ftp account *You can find it by doing the command ``ìd -u`` or ``id -u username``*
- **--gid** Group id of ftp account *You can find it by doing the command ``ìd -g`` or ``id -g username``*

If you want to use a virtual user (who has no account on the machine) you will have to give him the ids corresponding to the user owner of the folder.

```sh
dftps user add -u myuser -p mypassword -r /mydirectory --uid 1000 --gid 1000
```

## Get an user

To have the information of a particular user you will have to execute the following command:

```sh
dftps user get -u myuser
```

Which will send you something like this:

```log
┌────────────────┬───────────────────────────────┬──────┬──────┐
│ Username       │ Folder                        │ uid  │ gid  │
├────────────────┼───────────────────────────────┼──────┼──────┤
│ usermachine    │ /home/usermachine             │ 1000 │ 1000 │
└────────────────┴───────────────────────────────┴──────┴──────┘
```

## List all users

To see the list of your users you just need to type this:

```sh
dftps user
```

Which will send you something like this:

```log
┌────────────────┬───────────────────────────────┬──────┬──────┐
│ Username       │ Folder                        │ uid  │ gid  │
├────────────────┼───────────────────────────────┼──────┼──────┤
│ usermachine    │ /home/usermachine             │ 1000 │ 1000 │
├────────────────┼───────────────────────────────┼──────┼──────┤
│ virtualuser    │ /home/usermachine/virtualuser │ 1000 │ 1000 │
└────────────────┴───────────────────────────────┴──────┴──────┘
```

## Delete an user

To delete a user you will have to execute the following command

```sh
dftps user del -u myuser
```

## Update an user

*Comming soon...*
