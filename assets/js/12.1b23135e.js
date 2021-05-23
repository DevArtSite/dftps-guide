(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{385:function(e,s,a){"use strict";a.r(s);var t=a(44),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"manage-ftp-users"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manage-ftp-users"}},[e._v("#")]),e._v(" Manage ftp users")]),e._v(" "),a("blockquote",[a("p",[e._v("In this section you will see how you can add, view information or delete a user and see the list of users.")])]),e._v(" "),a("h2",{attrs:{id:"add-an-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-an-user"}},[e._v("#")]),e._v(" Add an user")]),e._v(" "),a("p",[e._v("To add a user you will need to make the following command with these mandatory parameters.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("-u")]),e._v(" or "),a("strong",[e._v("--username")]),e._v(" Username of ftp account")]),e._v(" "),a("li",[a("strong",[e._v("-p")]),e._v(" or "),a("strong",[e._v("--password")]),e._v(" Password of ftp account")]),e._v(" "),a("li",[a("strong",[e._v("-r")]),e._v(" or "),a("strong",[e._v("--root")]),e._v(" Directory of ftp account")]),e._v(" "),a("li",[a("strong",[e._v("--uid")]),e._v(" User id of ftp account "),a("em",[e._v("You can find it by doing the command "),a("code",[e._v("ìd -u")]),e._v(" or "),a("code",[e._v("id -u username")])])]),e._v(" "),a("li",[a("strong",[e._v("--gid")]),e._v(" Group id of ftp account "),a("em",[e._v("You can find it by doing the command "),a("code",[e._v("ìd -g")]),e._v(" or "),a("code",[e._v("id -g username")])])])]),e._v(" "),a("p",[e._v("If you want to use a virtual user (who has no account on the machine) you will have to give him the ids corresponding to the user owner of the folder.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("dftps user "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" -u myuser -p mypassword -r /mydirectory --uid "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1000")]),e._v(" --gid "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1000")]),e._v("\n")])])]),a("h2",{attrs:{id:"get-an-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-an-user"}},[e._v("#")]),e._v(" Get an user")]),e._v(" "),a("p",[e._v("To have the information of a particular user you will have to execute the following command:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("dftps user get -u myuser\n")])])]),a("p",[e._v("Which will send you something like this:")]),e._v(" "),a("div",{staticClass:"language-log extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("┌────────────────┬───────────────────────────────┬──────┬──────┐\n│ Username       │ Folder                        │ uid  │ gid  │\n├────────────────┼───────────────────────────────┼──────┼──────┤\n│ usermachine    │ /home/usermachine             │ 1000 │ 1000 │\n└────────────────┴───────────────────────────────┴──────┴──────┘\n")])])]),a("h2",{attrs:{id:"list-all-users"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-all-users"}},[e._v("#")]),e._v(" List all users")]),e._v(" "),a("p",[e._v("To see the list of your users you just need to type this:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("dftps user\n")])])]),a("p",[e._v("Which will send you something like this:")]),e._v(" "),a("div",{staticClass:"language-log extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("┌────────────────┬───────────────────────────────┬──────┬──────┐\n│ Username       │ Folder                        │ uid  │ gid  │\n├────────────────┼───────────────────────────────┼──────┼──────┤\n│ usermachine    │ /home/usermachine             │ 1000 │ 1000 │\n├────────────────┼───────────────────────────────┼──────┼──────┤\n│ virtualuser    │ /home/usermachine/virtualuser │ 1000 │ 1000 │\n└────────────────┴───────────────────────────────┴──────┴──────┘\n")])])]),a("h2",{attrs:{id:"delete-an-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-an-user"}},[e._v("#")]),e._v(" Delete an user")]),e._v(" "),a("p",[e._v("To delete a user you will have to execute the following command")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("dftps user del -u myuser\n")])])]),a("h2",{attrs:{id:"update-an-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-an-user"}},[e._v("#")]),e._v(" Update an user")]),e._v(" "),a("p",[a("em",[e._v("Comming soon...")])])])}),[],!1,null,null,null);s.default=r.exports}}]);