..
  Most of our documentation is generated from our source code comments,
    please head to github.com/Cogmasters/concord if you want to contribute!

  The following files contains the documentation used to generate this page: 
  - discord.h (for public datatypes)
  - discord-internal.h (for private datatypes)
  - specs/discord/ (for generated datatypes)

============
Edit Message
============

.. doxygenfunction:: discord_edit_message
.. doxygenstruct:: discord_edit_message_params

Example
-------

.. code:: c

   struct discord_message ret;
   
   struct discord_create_message_params params = { .content = "Hello there?" };
   
   discord_create_message(client, msg->channel_id, params, &ret);
   
   struct discord_create_message_params paramss = { .content = "Hi!\nOh! What a fast response!" };
   
   discord_edit_message(client, msg->channel_id, ret.id, paramss, NULL);
