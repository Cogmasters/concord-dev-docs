Get Invite
==========

.. doxygenfunction:: discord_get_invite
.. doxygenstruct:: discord_get_invite


Example
-------

.. code:: c

   void done_get_invite(struct discord *client, void *data, const struct discord_invite *ret)
   {
     printf("Approximate member count: %i\n", ret.approximate_member_count);
   }

   void fail_get_invite(struct discord *client, CCORDcode code, void *data)
   {
     printf("%s\n", discord_strerror(code, client));
   }

   ...

   char *invite_code = "Y7Xa6MA82v";
   
   discord_get_invite(client, invite_code, NULL, &(struct discord_ret_invite) {
                                                   .done = done_get_invite,
                                                   .fail = fail_get_invite
                                                 });
