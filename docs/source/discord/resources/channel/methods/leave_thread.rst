Leave Thread
============

.. doxygenfunction:: discord_leave_thread

Example
-------

.. code:: c
   
   u64_snowflake_t id = 1231231232131ULL; // ficticious channel ID

   discord_leave_thread(client, id, NULL);
