Get Reactions
=============

.. doxygenfunction:: discord_get_reactions
.. doxygenstruct:: discord_get_reactions

Example
-------

.. code:: c

   struct discord_user **ret;

   discord_create_reaction(client, msg->channel_id, msg->id, 0, "😄");
   
   discord_get_reactions(client, msg->channel_id, msg->id, 0, "😄", NULL, &ret);
   
   if (ret)
     for (int i = 0; ret[i]; ++i)
       printf("%s\n", ret[i]->username);
       
   discord_user_list_free(ret);
