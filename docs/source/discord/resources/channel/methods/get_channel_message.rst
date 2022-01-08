..
  Most of our documentation is generated from our source code comments,
    please head to github.com/Cogmasters/concord if you want to contribute!

  The following files contains the documentation used to generate this page: 
  - discord.h (for public datatypes)
  - discord-internal.h (for private datatypes)
  - specs/discord/ (for generated datatypes)

===================
Get Channel Message
===================

.. doxygenfunction:: discord_get_channel_message

Example
-------

.. code:: c

   struct discord_message ret;
   struct discord_message rett;

   struct discord_create_message_params params = { .content = "Hey!" };

   discord_create_message(client, msg->channel_id, &params, &rett);
   
   discord_get_channel_message(client, msg->channel_id, rett.id, &ret);
   
   printf("I said: %s", rett.content);
   
   discord_message_cleanup(ret);
   discord_message_cleanup(rett);
