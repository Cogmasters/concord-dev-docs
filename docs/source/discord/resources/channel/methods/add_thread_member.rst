Add Thread Member
=================

.. doxygenfunction:: discord_add_thread_member


Example
-------

.. code:: c
   
   // channel_id must be from a thread channel
   discord_add_thread_member(client, msg->channel_id, msg->author->id, NULL); 
