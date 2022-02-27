Follow News Channel
===================

.. doxygenfunction:: discord_follow_news_channel
.. doxygenstruct:: discord_follow_news_channel

Example
-------

.. code:: c

   u64snowflake id = 1231231232131ULL; // ficticious channel ID
   
   discord_follow_news_channel(client, id, NULL, NULL);
