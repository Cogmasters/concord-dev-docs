Get Channel Messages
====================

.. doxygenfunction:: discord_get_channel_messages
.. doxygenstruct:: discord_get_channel_messages

Example
-------

.. code:: c
   
   struct discord_message **ret;
   
   discord_get_channel_messages(client, msg->channel_id, NULL, &ret);
   
   if (ret)
     for (int i = 0; ret[i]; ++i)
       printf("%s\n", ret[i]->content);
  
   discord_message_list_free(ret);
