====================
Delete All Reactions
====================

.. doxygenfunction:: discord_delete_all_reactions

Example
-------

.. code:: c
     
   u64_snowflake_t message_id = strtoull(msg->content, NULL, 10); // assuming msg->content holds a message ID
       
   discord_delete_all_reactions(client, msg->channel_id, message_id, NULL);
