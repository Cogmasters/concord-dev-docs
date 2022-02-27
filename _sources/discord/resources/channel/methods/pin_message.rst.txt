Pin Message
===========

.. doxygenfunction:: discord_pin_message

Example
-------

.. code:: c

   struct discord_message ret;

   struct discord_create_message params = { .content = "I'm important, I need to get pinned!" };

   discord_create_message(client, msg->channel_id, &params, &ret);
   
   discord_pin_message(client, msg->channel_id, ret.id);
   
   discord_message_cleanup(&ret);
