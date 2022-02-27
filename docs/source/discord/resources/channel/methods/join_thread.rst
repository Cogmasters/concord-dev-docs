Join Thread
===========

.. doxygenfunction:: discord_join_thread

Example
-------

.. code:: c

   u64snowflake id = 1231231232131ULL; // ficticious channel ID
   
   discord_join_thread(client, id, NULL);
