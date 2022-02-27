Edit Message
============

.. doxygenfunction:: discord_edit_message
.. doxygenstruct:: discord_edit_message

Example
-------

.. code:: c

   void done_create_message(struct discord *client, void *data, const struct discord_message *ret)
   {
     discord_edit_message(client, msg->channel_id, ret.id, &(struct discord_edit_message){
                                                             .content = "Such a fast response!"
                                                           }, NULL);
   }

   void fail_create_message(struct discord *client, CCORDcode code, void *data)
   {
     printf("%s\n", discord_strerror(code, client));
   }

   ...

   discord_create_message(client, msg->channel_id, &(struct discord_create_message){
                                                     .content = "Hello there?" 
                                                   }, 
                                                   &(struct discord_ret_message){
                                                     .done = done_create_message,
                                                     .fail = fail_create_message
                                                   });