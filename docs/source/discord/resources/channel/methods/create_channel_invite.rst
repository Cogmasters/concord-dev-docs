..
  Most of our documentation is generated from our source code comments,
    please head to github.com/Cogmasters/concord if you want to contribute!

  The following files contains the documentation used to generate this page: 
  - discord.h (for public datatypes)
  - discord-internal.h (for private datatypes)
  - specs/discord/ (for generated datatypes)

Create Channel Invite
=====================

.. doxygenfunction:: discord_create_channel_invite
.. doxygenstruct:: discord_create_channel_invite_params

Example
-------

.. code:: c
   
   void done_create_channel_invite(struct discord *client, void *data, const struct discord_invite *ret)
   {
     printf("Created invite: %s", ret->code);
   }

   void fail_create_channel_invite(struct discord *client, CCORDcode code, void *data)
   {
     printf("%s\n", discord_strerror(code, client));
   }
      
   discord_create_channel_invite(client, msg->channel_id, NULL, &ret);
