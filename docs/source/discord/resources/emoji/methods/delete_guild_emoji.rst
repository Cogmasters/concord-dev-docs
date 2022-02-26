..
  Most of our documentation is generated from our source code comments,
    please head to github.com/Cogmasters/concord if you want to contribute!

  The following files contains the documentation used to generate this page: 
  - discord.h (for public datatypes)
  - discord-internal.h (for private datatypes)
  - specs/discord/ (for generated datatypes)

Delete Guild Emoji
==================

.. doxygenfunction:: discord_delete_guild_emoji


Example
-------

.. code:: c

   u64_snowflake_t id = 1231231232131ULL; // ficticious emoji ID
   
   discord_delete_guild_emoji(client, msg->guild_id, id, NULL);
