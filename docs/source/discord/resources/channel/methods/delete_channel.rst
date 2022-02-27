Delete Channel
==============

.. doxygenfunction:: discord_delete_channel

Example
-------

.. code:: c
   
   void done_discord_delete_channel(struct discord *client, void *data, const struct discord_invite *ret)
   {
     printf("Deleted channel %s", ret->name);
   }

   void fail_discord_delete_channel(struct discord *client, CCORDcode code, void *data)
   {
     printf("%s\n", discord_strerror(code, client));
   }
   
   discord_delete_channel(client, msg->channel_id, &(struct discord_ret_channel) {
                                                     .done = done_discord_delete_channel,
                                                     .fail = fail_discord_delete_channel
                                                   });
