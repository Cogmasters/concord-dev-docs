===================================================
discord_reconnect - reconnect a on-going connection
===================================================

.. doxygenfunction:: discord_reconnect

Example
-------

.. code:: c

    void on_reconnect(struct discord *client, const struct discord_message *msg)
    {
      discord_reconnect(client, true);
      log_info("Client will be reconnected");
    }

    int main(void)
    {
      struct discord *client = discord_init(BOT_TOKEN);
      discord_set_on_command(client, "!reconnect", &on_reconnect);
      discord_run(client);
      discord_cleanup(client);
    }
