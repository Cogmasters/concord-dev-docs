Create Channel Invite
=====================

.. doxygenfunction:: discord_create_channel_invite
.. doxygenstruct:: discord_create_channel_invite

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

   ...
      
   discord_create_channel_invite(client, msg->channel_id, NULL, &(struct discord_ret_invite) {
                                                                  .done = done_create_channel_invite,
                                                                  .fail = fail_create_channel_invite
                                                                });
