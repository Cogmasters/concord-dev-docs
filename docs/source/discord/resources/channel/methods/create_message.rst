==============
Create Message
==============

.. doxygenfunction:: discord_create_message
.. doxygenstruct:: discord_create_message

Example
-------

.. code:: c
   
   struct discord_create_message params = { .content = "Pong!" };
   discord_create_message(client, msg->channel_id, &params, NULL);
