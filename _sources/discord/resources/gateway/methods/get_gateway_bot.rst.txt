Get Gateway Bot
===============

.. doxygenfunction:: discord_get_gateway_bot

Example
-------

.. code:: c

   struct sized_buffer ret;

   discord_get_gateway_bot(client, &ret);
   
   printf("JSON length: %zu\n%s\n", ret.size, ret.start);
   
