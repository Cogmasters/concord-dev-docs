Remove Thread Member
====================

.. doxygenfunction:: discord_remove_thread_member

Example
-------

.. code:: c
   
   discord_remove_thread_member(client, msg->channel_id, msg->author->id, NULL);
