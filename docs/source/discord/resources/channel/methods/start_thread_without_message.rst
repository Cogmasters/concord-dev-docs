Start Thread Without Message
============================

.. doxygenfunction:: discord_start_thread_without_message
.. doxygenstruct:: discord_start_thread_without_message

Example
-------

.. code:: c
   
   discord_start_thread_with_message(client, msg->channel_id, msg->id, &(struct discord_start_thread_with_message){
                                                                         .name = "New_thread",
                                                                         .auto_archive_duration = 4320,
                                                                         .discord_channel_types = DISCORD_CHANNEL_GUILD_PUBLIC_THREAD 
                                                                       }, NULL);
