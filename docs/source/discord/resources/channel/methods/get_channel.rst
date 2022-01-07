..
  Most of our documentation is generated from our source code comments,
    please head to github.com/Cogmasters/concord if you want to contribute!

  The following files contains the documentation used to generate this page: 
  - discord.h (for public datatypes)
  - discord-internal.h (for private datatypes)
  - specs/discord/ (for generated datatypes)

===========
Get Channel
===========

.. doxygenfunction:: discord_get_channel

Example
-------

.. code:: c
   
   struct discord_channel ret;
   char text[128]

   discord_get_channel(client, msg->channel_id, &ret);

   snprint(text, sizeof(text), "The name of this channel is: %s", ret.name)

   struct discord_create_message_params params = { .content = text };
      
   discord_async_next(client, NULL);
   discord_create_message(client, msg->channel_id, &params, NULL);

   discord_channel_cleanup(&ret);
