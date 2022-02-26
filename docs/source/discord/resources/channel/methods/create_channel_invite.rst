Create Channel Invite
=====================

.. doxygenfunction:: discord_create_channel_invite
.. doxygenstruct:: discord_create_channel_invite

Example
-------

.. code:: c
   
   struct discord_invite ret;
   char text[124];
   
   discord_create_channel_invite(client, msg->channel_id, NULL, &ret);
   
   snprintf(text, sizeof(text), "Created invite: %s", ret.code);
   
   struct discord_create_message params = { .content = text };
   discord_create_message(client, msg->channel_id, &params, NULL);
   
   discord_invite_cleanup(&ret);
