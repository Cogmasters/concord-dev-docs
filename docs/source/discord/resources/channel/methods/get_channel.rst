Get Channel
===========

.. doxygenfunction:: discord_get_channel

Example
-------

.. code:: c
   
   void done_get_channel(struct discord *client, void *data, const struct discord_channel *ret)
   {
     printf("The name of this channel is: %s", ret->name);
   }

   void fail_get_channel(struct discord *client, CCORDcode code, void *data)
   {
     printf("%s\n", discord_strerror(code, client));
   }

   discord_get_channel(client, msg->channel_id, &(struct discord_ret_channel){
                                                  .done = done_get_channel,
                                                  .fail = fail_get_channel
                                                });
