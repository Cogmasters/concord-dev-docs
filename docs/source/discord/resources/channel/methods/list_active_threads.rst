List Active Threads
===================

.. doxygenfunction:: discord_list_active_threads

Example
-------

.. code:: c

   struct discord_thread_response_body body;

   discord_list_active_threads(client, msg->channel_id, &body);
   
   if (body.threads)
     for (int i = 0; body.threads[i]; ++i)
       printf("Thread name: %s\n", body.threads[i]->name);
       
   discord_thread_response_body_cleanup(&body);
