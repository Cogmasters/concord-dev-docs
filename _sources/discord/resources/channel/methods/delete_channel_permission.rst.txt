Delete Channel Permission
=========================

.. doxygenfunction:: discord_delete_channel_permission

Example
-------

.. code:: c

   u64snowflake id = 1231231232131ULL; // ficticious channel ID
   
   discord_delete_channel_permission(client, msg->channel_id, id, NULL);
