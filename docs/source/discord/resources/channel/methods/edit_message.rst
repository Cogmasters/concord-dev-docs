Edit Message
============

.. doxygenfunction:: discord_edit_message
.. doxygenstruct:: discord_edit_message

Example
-------

.. code:: c

   struct discord_message ret;
   
   discord_create_message(client, 
                          msg->channel_id,
                          &(struct discord_create_message){ 
                            .content = "Hello there?" 
                          },
                          &ret);
   
   discord_edit_message(client,
                        msg->channel_id,
                        ret.id,
                        &(struct discord_edit_message){
                          .content = "Such a fast response!"
                        },
                        NULL);
   discord_message_cleanup(&ret); 
