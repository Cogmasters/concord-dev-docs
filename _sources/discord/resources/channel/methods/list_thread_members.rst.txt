List Thread Members
===================

.. doxygenfunction:: discord_list_thread_members

Example
-------

.. code:: c

   struct discord_thread_member **ret;

   discord_list_thread_members(client, msg->channel_id, &ret);
   
   if (ret)
     for (int i = 0; ret[i]; ++i)
       printf("%"PRIu64"\n", ret[i]->user_id);
       
   discord_thread_member_list_free(ret);
