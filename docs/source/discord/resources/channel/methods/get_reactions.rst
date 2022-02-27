Get Reactions
=============

.. doxygenfunction:: discord_get_reactions
.. doxygenstruct:: discord_get_reactions

Example
-------

.. code:: c

   void done_get_reactions(struct discord *client, void *data, const struct discord_users *ret)
   {
     for (int i = 0; i < ret->size; ++i)
       printf("%s\n", ret->array[i].username);
   }

   void fail_get_reactions(struct discord *client, CCORDcode code, void *data)
   {
     printf("%s\n", discord_strerror(code, client));
   }

   discord_create_reaction(client, msg->channel_id, msg->id, 0, "😄", NULL);
   
   discord_get_reactions(client, msg->channel_id, msg->id, 0, "😄", NULL, &(struct discord_ret_users){
                                                                            .done = done_get_reactions,
                                                                            .fail = fail_get_reactions
                                                                          });
