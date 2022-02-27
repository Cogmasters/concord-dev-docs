===============
Create Reaction
===============

.. doxygenfunction:: discord_create_reaction

Example
-------

.. code:: c
   
  discord_create_reaction(client, msg->channel_id, msg->id, 0, "😄", NULL);
