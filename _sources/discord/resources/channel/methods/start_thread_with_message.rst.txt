Start Thread With Message
=========================

.. doxygenfunction:: discord_start_thread_with_message
.. doxygenstruct:: discord_start_thread_with_message

Example
-------

.. code:: c
   
   discord_start_thread_with_message(client, msg->channel_id, msg->id, &(struct discord_start_thread_with_message){
                                                                         .name = "New_thread",
                                                                         .auto_archive_duration = 4320
                                                                       }, NULL);
