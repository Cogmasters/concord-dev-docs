..
  Most of our documentation is generated from our source code comments,
    please head to github.com/Cogmasters/concord if you want to contribute!

  The following files contains the documentation used to generate this page: 
  - discord.h (for public datatypes)
  - discord-internal.h (for private datatypes)
  - specs/discord/ (for generated datatypes)

Get Invite
==========

.. doxygenfunction:: discord_get_invite
.. doxygenstruct:: discord_get_invite_params


Example
-------

.. code:: c

   char *invite_code = "Y7Xa6MA82v";
   struct discord_ret_invite ret;
   
   discord_get_invite(client, invite_code, NULL, &ret);
   
   printf("Approximate member count: %i\n", ret.approximate_member_count);
   
   discord_invite_cleanup(ret);
