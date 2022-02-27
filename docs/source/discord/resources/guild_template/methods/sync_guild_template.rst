Sync Guild Template
===================

.. doxygenfunction:: discord_sync_guild_template


Example
-------

.. code:: c

   char *code = "ABCDEFGHIJ"; //ficticious guild template ID
   
   discord_sync_guild_template(client, msg->guild_id, code, NULL);
