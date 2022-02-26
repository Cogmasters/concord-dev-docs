Get Channel
===========

.. doxygenfunction:: discord_get_channel

Example
-------

.. code:: c
   
   struct discord_channel ret;

   discord_get_channel(client, msg->channel_id, &ret);

   printf("The name of this channel is: %s", ret.name);
   discord_channel_cleanup(&ret);
