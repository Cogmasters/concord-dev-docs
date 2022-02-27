Edit Channel Permissions
========================

.. doxygenfunction:: discord_edit_channel_permissions
.. doxygenstruct:: discord_edit_channel_permissions

Example
-------

.. code:: c

   u64_snowflake_t id = 1231231232131ULL; // ficticious channel ID
   
   discord_edit_channel_permissions(client, msg->channel_id, id, NULL, NULL);
