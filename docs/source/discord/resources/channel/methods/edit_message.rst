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

   void done_create_message(struct discord *client, void *data, const struct discord_message *ret)
   {
     discord_edit_message(client, msg->channel_id, ret.id, &(struct discord_edit_message_params){
                                                             .content = "Such a fast response!"
                                                           }, NULL);
   }

   void fail_create_message(struct discord *client, CCORDcode code, void *data)
   {
     printf("%s\n", discord_strerror(code, client));
   }
   
   discord_create_message(client, msg->channel_id, &(struct discord_create_message_params){
                                                     .content = "Hello there?" 
                                                    }, &(struct discord_ret_invite) {
                                                         .done = done_create_message,
                                                         .fail = fail_create_message
                                                       })
                                                    );
