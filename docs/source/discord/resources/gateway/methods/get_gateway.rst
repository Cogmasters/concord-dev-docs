Get Gateway
===========

.. doxygenfunction:: discord_get_gateway

Example
-------

.. code:: c

   struct sized_buffer ret;

   discord_get_gateway(client, &ret);

   printf("JSON length: %zu\n", ret.size);
   printf("%s\n", ret.start);
