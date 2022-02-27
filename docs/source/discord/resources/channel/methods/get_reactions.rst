..
  Most of our documentation is generated from our source code comments,
    please head to github.com/Cogmasters/concord if you want to contribute!

  The following files contains the documentation used to generate this page: 
  - discord.h (for public datatypes)
  - discord-internal.h (for private datatypes)
  - specs/discord/ (for generated datatypes)

=============
Get Reactions
=============

.. doxygenfunction:: discord_get_reactions
.. doxygenstruct:: discord_get_reactions_params

Example
-------

.. code:: c

   void done_get_reactions(struct discord *client, void *data, const struct discord_users *ret)
   {
     if (ret)
       for (int i = 0; ret[i]; ++i)
         printf("%s\n", ret[i]->username);
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
