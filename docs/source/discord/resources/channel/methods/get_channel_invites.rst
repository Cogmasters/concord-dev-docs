Get Channel Invites
===================

.. doxygenfunction:: discord_get_channel_invites

Example
-------

.. code:: c

    struct discord_invite **ret;
   
    discord_get_channel_invites(client, msg->channel_id, &ret);
    
    if (ret)
      for (int i = 0; ret[i]; ++i)
        printf("%s\n", ret[i]->code);
   
    discord_invite_list_free(ret);
