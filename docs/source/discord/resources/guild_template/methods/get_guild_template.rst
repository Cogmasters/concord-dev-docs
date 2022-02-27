..
  Most of our documentation is generated from our source code comments,
    please head to github.com/Cogmasters/concord if you want to contribute!

  The following files contains the documentation used to generate this page: 
  - discord.h (for public datatypes)
  - discord-internal.h (for private datatypes)
  - specs/discord/ (for generated datatypes)

Get Guild Template
==================

.. doxygenfunction:: discord_get_guild_template


Example
-------

.. code:: c

   void done_get_guild_template(struct discord *client, void *data, const struct discord_guild_template *ret)
   {
     printf("Guild Template name: %s\n", ret->name);
   }

   void fail_get_guild_template(struct discord *client, CCORDcode code, void *data)
   {
     printf("%s\n", discord_strerror(code, client));
   }

   char *code = "ABCDEFGHIJ"; //ficticious guild template ID
   
   discord_get_guild_template(client, code, NULL, &(struct discord_ret_guild_template){
                                                    .done = done_get_guild_template,
                                                    .fail = fail_get_guild_template
                                                  });
