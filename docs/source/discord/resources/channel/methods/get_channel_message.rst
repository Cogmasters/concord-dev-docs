..
  Most of our documentation is generated from our source code comments,
    please head to github.com/Cogmasters/concord if you want to contribute!

  The following files contains the documentation used to generate this page: 
  - discord.h (for public datatypes)
  - discord-internal.h (for private datatypes)
  - specs/discord/ (for generated datatypes)

===================
Get Channel Message
===================

.. doxygenfunction:: discord_get_channel_message

Example
-------

.. code:: c

   void fail(struct discord *client, CCORDcode code, void *data)
   {
     printf("%s\n", discord_strerror(code, client));
   }

   void done_get_channel_message(struct discord *client, void *data, const struct discord_message *ret)
   {
     printf("I said: %s", ret->content);
   }

   void done_create_message(struct discord *client, void *data, const struct discord_message *ret)
   {
     discord_get_channel_message(client, ret->channel_id, ret1->id, &(struct discord_ret_invite) {
                                                                      .done = done_get_guild_template,
                                                                      .fail = fail_get_guild_template
                                                                    });
   }

   struct discord_create_message_params params = { .content = "Hey!" };

   discord_create_message(client, msg->channel_id, &params, &(struct discord_ret_message) {
                                                              .done = done_create_message,
                                                              .fail = fail_create_message
                                                            });
