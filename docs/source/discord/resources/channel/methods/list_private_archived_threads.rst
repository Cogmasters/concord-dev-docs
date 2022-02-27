..
  Most of our documentation is generated from our source code comments,
    please head to github.com/Cogmasters/concord if you want to contribute!

  The following files contains the documentation used to generate this page: 
  - discord.h (for public datatypes)
  - discord-internal.h (for private datatypes)
  - specs/discord/ (for generated datatypes)

List Private Archived Threads
=============================

.. doxygenfunction:: discord_list_private_archived_threads

Example
-------

.. code:: c

   void done_list_private_archived_threads(struct discord *client, void *data, const struct discord_thread_response_body *body)
   {
     if (body.threads)
       for (int i = 0; body.threads[i]; ++i)
         printf("Thread name: %s\n", body.threads[i]->name);
   }

   void fail_list_private_archived_threads(struct discord *client, CCORDcode code, void *data)
   {
     printf("%s\n", discord_strerror(code, client));
   }

   discord_list_private_archived_threads(client, msg->channel_id, 0, 5, &(struct discord_ret_thread_response_body) {
                                                          .done = done_list_private_archived_threads,
                                                          .fail = fail_list_private_archived_threads
                                                        });
