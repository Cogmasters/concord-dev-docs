Get Gateway
===========

.. doxygenfunction:: discord_get_gateway

Example
-------

.. code:: c

   struct sized_buffer ret;

   discord_get_gateway(client, &ret);

   printf("JSON length: %zu\n%s\n", ret.size, ret.start);
