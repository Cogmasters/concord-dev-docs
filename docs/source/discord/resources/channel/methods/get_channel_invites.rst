Get Channel Invites
===================

.. doxygenfunction:: discord_get_channel_invites

Example
-------

.. code:: c

   void done_get_channel_invites(struct discord *client, void *data, const struct discord_invites *ret)
   {
     for (int i = 0; i < ret->size; ++i)
       printf("%s\n", ret->array[i].code);
   }

   void fail_get_channel_invites(struct discord *client, CCORDcode code, void *data)
   {
     printf("%s\n", discord_strerror(code, client));
   }
   
    discord_get_channel_invites(client, msg->channel_id, &(struct discord_ret_invite){
                                                           .done = done_get_channel_invites,
                                                           .fail = fail_get_channel_invites
                                                         });
