Delete User Reaction
====================

.. doxygenfunction:: discord_delete_user_reaction

Example
-------

.. code:: c

   discord_create_reaction(client, msg->channel_id, msg->author->id, 0, "😄", NULL);
   
   discord_delete_user_reaction(client, msg->channel_id, msg->id, msg->author->id, 0, "😄", NULL);
