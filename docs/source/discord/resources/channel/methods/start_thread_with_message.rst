..
  Most of our documentation is generated from our source code comments,
    please head to github.com/Cogmasters/concord if you want to contribute!

  The following files contains the documentation used to generate this page: 
  - discord.h (for public datatypes)
  - discord-internal.h (for private datatypes)
  - specs/discord/ (for generated datatypes)

Start Thread With Message
=========================

.. doxygenfunction:: discord_start_thread_with_message
.. doxygenstruct:: discord_start_thread_with_message_params

Example
-------

.. code:: c
   
   discord_start_thread_with_message(client, msg->channel_id, msg->id, &(struct discord_start_thread_with_message){
                                                                         .name = "New_thread",
                                                                         .auto_archive_duration = 4320
                                                                       }, NULL);
