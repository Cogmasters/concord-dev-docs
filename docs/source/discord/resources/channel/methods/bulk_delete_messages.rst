Bulk Delete Messages
====================

.. doxygenfunction:: discord_bulk_delete_messages

Example
-------

.. code:: c

   u64_snowflake_t *messages[] = {
     &(u64_snowflake_t){ 1231231232131ULL }, // ficticious message ID
     &(u64_snowflake_t){ 3213213213213ULL }, // ficticious message ID
     NULL
   };

   discord_bulk_delete_messages(client, msg->channel_id, messages, NULL);
   
