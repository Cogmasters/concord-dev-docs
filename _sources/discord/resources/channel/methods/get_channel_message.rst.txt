Get Channel Message
===================

.. doxygenfunction:: discord_get_channel_message

Example
-------

.. code:: c

   struct discord_message ret1;
   struct discord_message ret2;

   struct discord_create_message params = { .content = "Hey!" };

   discord_create_message(client, msg->channel_id, &params, &ret1);
   
   discord_get_channel_message(client, msg->channel_id, ret1.id, &ret2);
   
   printf("I said: %s", ret2.content);
   
   discord_message_cleanup(&ret1);
   discord_message_cleanup(&ret1);
