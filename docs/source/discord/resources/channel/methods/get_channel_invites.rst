..
  Most of our documentation is generated from our source code comments,
    please head to github.com/Cogmasters/concord if you want to contribute!

  The following files contains the documentation used to generate this page: 
  - discord.h (for public datatypes)
  - discord-internal.h (for private datatypes)
  - specs/discord/ (for generated datatypes)

Get Channel Invites
===================

.. doxygenfunction:: discord_get_channel_invites

Example
-------

.. code:: c

   void done_get_channel_invites(struct discord *client, void *data, const struct discord_invites *ret)
   {
     if (ret)
       for (int i = 0; ret[i]; ++i)
         printf("%s\n", ret[i]->code);
   }

   void fail_get_channel_invites(struct discord *client, CCORDcode code, void *data)
   {
     printf("%s\n", discord_strerror(code, client));
   }
   
    discord_get_channel_invites(client, msg->channel_id, &(struct discord_ret_invite){
                                                           .done = done_get_channel_invites,
                                                           .fail = fail_get_channel_invites
                                                         });
