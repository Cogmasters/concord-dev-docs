..
  Most of our documentation is generated from our source code comments,
    please head to github.com/Cogmasters/concord if you want to contribute!

  The following files contains the documentation used to generate this page: 
  - discord.h (for public datatypes)
  - discord-internal.h (for private datatypes)
  - specs/discord/ (for generated datatypes)

List Thread Members
===================

.. doxygenfunction:: discord_list_thread_members

Example
-------

.. code:: c   
   
   void done_list_thread_members(struct discord *client, void *data, const struct discord_thread_members *ret)
   {
     if (ret)
       for (int i = 0; ret[i]; ++i)
         printf("%"PRIu64"\n", ret[i]->user_id);
   }

   void fail_list_thread_members(struct discord *client, CCORDcode code, void *data)
   {
     printf("%s\n", discord_strerror(code, client));
   }

   discord_list_thread_members(client, msg->channel_id, &(struct discord_ret_thread_members){
                                                          .done = done_list_thread_members,
                                                          .fail = fail_list_thread_members
                                                        });
