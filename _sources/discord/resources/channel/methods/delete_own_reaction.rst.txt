Delete Own Reaction
===================

.. doxygenfunction:: discord_delete_own_reaction

Example
-------

.. code:: c
   
   discord_delete_own_reaction(client, msg->channel_id, msg->id, 0, "😄");
