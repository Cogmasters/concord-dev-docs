Create Guild Template
=====================

.. doxygenfunction:: discord_create_guild_template
.. doxygenstruct:: discord_create_guild_template


Example
-------

.. code:: c

   discord_create_guild_template(client, msg->guild_id, &(struct discord_create_guild_template){
                                                          .name = "Guild template create example",
                                                          .description = "Hello from Concord!"
                                                        }, NULL);