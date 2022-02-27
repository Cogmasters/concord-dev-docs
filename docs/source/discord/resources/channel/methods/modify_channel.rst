==============
Modify Channel
==============

.. doxygenfunction:: discord_modify_channel
.. doxygenstruct:: discord_modify_channel

Example
-------

.. code:: c

   u64snowflake id = 1231231232131ULL; // ficticious channel ID

   discord_modify_channel(client, id, &(struct discord_modify_channel){
                                        .name = "Friends_channel"
                                      }, NULL);