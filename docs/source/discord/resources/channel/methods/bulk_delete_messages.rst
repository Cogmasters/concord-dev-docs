Bulk Delete Messages
====================

.. doxygenfunction:: discord_bulk_delete_messages

Example
-------

.. code:: c

  struct snowflakes messages = {
    .size = 2,
    .array = (u64snowflake[]){
      1231231231231231ULL,
      3213213213213213ULL
    }  
  };

   discord_bulk_delete_messages(client, msg->channel_id, messages, NULL);
   
