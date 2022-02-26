..
  Most of our documentation is generated from our source code comments,
    please head to github.com/Cogmasters/concord if you want to contribute!

  The following files contains the documentation used to generate this page: 
  - discord.h (for public datatypes)
  - discord-internal.h (for private datatypes)
  - specs/discord/ (for generated datatypes)

Delete Invite
=============

.. doxygenfunction:: discord_delete_invite


Example
-------

.. code:: c

   char *invite_code = "Y7Xa6MA82v";
   
   discord_delete_invite(client, invite_code, NULL);
   
