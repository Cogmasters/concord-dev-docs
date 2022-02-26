..
  Most of our documentation is generated from our source code comments,
    please head to github.com/Cogmasters/concord if you want to contribute!

  The following files contains the documentation used to generate this page: 
  - discord.h (for public datatypes)
  - discord-internal.h (for private datatypes)
  - specs/discord/ (for generated datatypes)

Create Guild Template
=====================

.. doxygenfunction:: discord_create_guild_template
.. doxygenstruct:: discord_create_guild_template_params


Example
-------

.. code:: c

   discord_create_guild_template(client, 
                                 msg->guild_id, 
                                 &(struct discord_create_guild_template) {
                                   .name = "Guild template create example",
                                   .description = "Hello from Concord!"
                                 },
                                 NULL)
