List Public Archived Threads
============================

.. doxygenfunction:: discord_list_public_archived_threads

Example
-------

.. code:: c

   struct discord_thread_response_body ret;

   discord_list_public_archived_threads(client, msg->channel_id, 0, 5, &ret);
   
   if (ret.threads)
     for (int i = 0; ret.threads[i]; ++i)
       printf("Thread name: %s\n", ret.threads[i]->name);
       
   discord_thread_response_body_cleanup(&ret);
