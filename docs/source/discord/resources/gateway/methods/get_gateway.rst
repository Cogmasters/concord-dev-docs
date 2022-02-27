..
  Most of our documentation is generated from our source code comments,
    please head to github.com/Cogmasters/concord if you want to contribute!

  The following files contains the documentation used to generate this page: 
  - discord.h (for public datatypes)
  - discord-internal.h (for private datatypes)
  - specs/discord/ (for generated datatypes)

Get Gateway
===========

.. doxygenfunction:: discord_get_gateway

Example
-------

.. code:: c

   struct sized_buffer ret;

   discord_get_gateway(client, &ret);

   printf("JSON length: %zu\n%s\n", ret.size, ret.start);
