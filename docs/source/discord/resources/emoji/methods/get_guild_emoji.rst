Get Guild Emoji
===============

.. doxygenfunction:: discord_get_guild_emoji


Example
-------

.. code:: c

   u64_snowflake_t id = 1231231232131ULL; // ficticious emoji ID
   
   discord_get_guild_emoji(client, msg->guild_id, id, NULL);
