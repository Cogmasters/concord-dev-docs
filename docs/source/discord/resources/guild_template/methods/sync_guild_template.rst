..
  Most of our documentation is generated from our source code comments,
    please head to github.com/Cogmasters/concord if you want to contribute!

  The following files contains the documentation used to generate this page: 
  - discord.h (for public datatypes)
  - discord-internal.h (for private datatypes)
  - specs/discord/ (for generated datatypes)

Sync Guild Template
===================

.. doxygenfunction:: discord_sync_guild_template


Example
-------

.. code:: c

   char *code = "ABCDEFGHIJ"; //ficticious guild template ID
   
   discord_sync_guild_template(client, msg->guild_id, code, NULL);
