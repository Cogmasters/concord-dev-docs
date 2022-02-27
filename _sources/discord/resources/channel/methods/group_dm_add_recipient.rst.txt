Group DM Add Recipient
======================

.. doxygenfunction:: discord_group_dm_add_recipient
.. doxygenstruct:: discord_group_dm_add_recipient

Example
-------

.. code:: c

   u64snowflake id = 1231231232131ULL; // ficticious channel ID
   
   discord_group_dm_add_recipient(client, id, 
                                  msg->author->id, 
                                  &(struct discord_group_dm_add_recipient){
                                    .access_token = "Access token of a user",
                                    .nick = "Nickname of the use that will be added"
                                  },
                                  NULL);
