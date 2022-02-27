Get Gateway Bot
===============

.. doxygenfunction:: discord_get_gateway_bot

Example
-------

.. code:: c

   struct sized_buffer ret;

   discord_get_gateway_bot(client, &ret);
   
<<<<<<< HEAD
   printf("JSON length: %zu\n", ret.size);
   printf("%s\n", ret.start);
=======
   printf("JSON length: %zu\n%s\n", ret.size, ret.start);
   
>>>>>>> Remake examples (#6)
