===================
Get Guild Audit Log
===================

.. doxygenfunction:: discord_get_guild_audit_log

.. doxygenstruct:: discord_get_guild_audit_log_params

Example
-------

.. code:: c

   struct discord_audit_log ret;

   discord_get_guild_audit_log(client, msg->guild_id, NULL, &ret);

   if (ret.users)
     for (int i = 0; ret.users[i]; ++i)
       printf("%s\n", ret.users[i]->username);
