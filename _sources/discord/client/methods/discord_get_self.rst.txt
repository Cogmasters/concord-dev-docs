===============================================
discord_get_self - get the client's cached user
===============================================

.. doxygenfunction:: discord_get_self

Example
-------

.. code:: c

    void on_ready(struct discord *client) 
    {
      const struct discord_user *bot = discord_get_self(client);
      log_info("Logged in as %s!", bot->username);
    }

    int main(void)
    {
      struct discord *client = discord_init(BOT_TOKEN);
      discord_set_on_ready(client, &on_ready);
      discord_run(client);
      discord_cleanup(client);
    }
