==============================
Delete All Reactions For Emoji
==============================

.. doxygenfunction:: discord_delete_all_reactions_for_emoji

Example
-------

.. code:: c
   
   discord_create_reaction(client, msg->channel_id, msg->id, 0, "😄", NULL);

   discord_delete_all_reactions_for_emoji(client, msg->channel_id, msg->id, 0, "😄", NULL);
