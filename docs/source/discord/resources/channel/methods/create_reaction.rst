..
  Most of our documentation is generated from our source code comments,
    please head to github.com/Cogmasters/concord if you want to contribute!

  The following files contains the documentation used to generate this page: 
  - discord.h (for public datatypes)
  - discord-internal.h (for private datatypes)
  - specs/discord/ (for generated datatypes)

===============
Create Reaction
===============

.. doxygenfunction:: discord_create_reaction

Example
-------

.. code:: c
   
  discord_create_reaction(client, msg->channel_id, msg->message_id, 0, "😄");
  
  printf("Reacted to the message.");
