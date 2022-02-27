================================================
discord_run - start client connection to Discord
================================================

.. doxygenfunction:: discord_run

Example
-------

.. code:: c

    void on_ready(struct discord *client) 
    {
      log_info("Up and running!");
    }

    int main(void)
    {
      struct discord *client = discord_init(BOT_TOKEN);
      discord_set_on_ready(client, &on_ready);
      discord_run(client);
      discord_cleanup(client);
    }
