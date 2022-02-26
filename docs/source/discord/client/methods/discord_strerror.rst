=================================================================
discord_strerror() - return string describing ``CCORDcode`` value
=================================================================

.. doxygengroup:: ConcordDiscordCodes
.. doxygenfunction:: discord_strerror

Example
-------

.. code:: c

    /* Attempt to send a message to a invalid channel (id 0) */
    void on_force_error(struct discord *client, 
                        const struct discord_message *msg)
    {
      CCORDcode code = discord_create_message(client, 0, NULL, NULL);
      log_error("%s", discord_strerror(code, client));
    }

    int main(void)
    {
      struct discord *client = discord_init(BOT_TOKEN);
      discord_set_on_command(client, "!force_error", &on_force_error);
      discord_run(client);
      discord_cleanup(client);
    }
