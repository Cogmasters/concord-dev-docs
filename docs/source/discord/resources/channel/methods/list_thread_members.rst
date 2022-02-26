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

   struct discord_ret_thread_members ret;

   discord_list_thread_members(client, msg->channel_id, &ret);
   
   if (ret)
     for (int i = 0; ret[i]; ++i)
       printf("%"PRIu64"\n", ret[i]->user_id);
       
   discord_thread_member_list_free(ret);
