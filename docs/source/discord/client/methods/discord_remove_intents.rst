===================================================
discord_remove_intents - remove events to listen to
===================================================

.. doxygenfunction:: discord_remove_intents

Example
-------

.. code:: c

    struct discord *client = discord_init(BOT_TOKEN);
    // this will implicitly set intents for channel and direct messages
    discord_set_on_message_create(client, &on_msg);
    // keep only the channel messages intent
    discord_remove_intents(client, DISCORD_GATEWAY_DIRECT_MESSAGES);
    discord_run(client);
    discord_cleanup(client);
