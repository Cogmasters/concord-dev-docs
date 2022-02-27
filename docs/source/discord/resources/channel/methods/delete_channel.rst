Delete Channel
==============

.. doxygenfunction:: discord_delete_channel

Example
-------

.. code:: c
   
   struct discord_channel ret;
   discord_delete_channel(client, msg->channel_id, &ret);
       
   printf("Deleted channel %s", ret.name);
   
   discord_channel_cleanup(&ret);
