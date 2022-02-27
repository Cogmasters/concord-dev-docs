Group DM Remove Recipient
=========================

.. doxygenfunction:: discord_group_dm_remove_recipient

Example
-------

.. code:: c
   
   u64snowflake id = 1231231232131ULL; // ficticious channel ID
   
   discord_group_dm_remove_recipient(client, id, msg->author->id, NULL);
