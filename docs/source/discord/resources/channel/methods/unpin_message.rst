Unpin Message
=============

.. doxygenfunction:: discord_unpin_message

Example
-------

.. code:: c
   
   u64_snowflake_t id = 1231231232131ULL; // ficticious channel ID
   
   discord_unpin_message(client, msg->channel_id, id, NULL);
