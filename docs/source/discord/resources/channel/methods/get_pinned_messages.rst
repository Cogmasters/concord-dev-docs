Get Pinned Messages
===================

.. doxygenfunction:: discord_get_pinned_messages

Example
-------

.. code:: c

   void done_get_pinned_messages(struct discord *client, void *data, const struct discord_messages *ret)
   {
     if (ret)
       for (int i = 0; ret[i]; ++i)
         printf("%s\n", ret[i]->content);
   }

   void fail_get_pinned_messages(struct discord *client, CCORDcode code, void *data)
   {
     printf("%s\n", discord_strerror(code, client));
   }

   discord_get_pinned_messages(client, msg->channel_id, NULL, &(struct discord_ret_messages){
                                                                .done = done_get_pinned_messages,
                                                                .fail = fail_get_pinned_messages
                                                              });
