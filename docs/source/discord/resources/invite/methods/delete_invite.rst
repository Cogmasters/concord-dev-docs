Delete Invite
=============

.. doxygenfunction:: discord_delete_invite


Example
-------

.. code:: c

   char *invite_code = "Y7Xa6MA82v";
   
   discord_delete_invite(client, invite_code, NULL);
   
