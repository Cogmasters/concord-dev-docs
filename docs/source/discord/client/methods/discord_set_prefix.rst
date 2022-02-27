======================================================
discord_set_prefix - set a default prefix for commands
======================================================

.. doxygenfunction:: discord_set_prefix

Example
-------

.. code:: c

    struct discord *client = discord_init(BOT_TOKEN);
    discord_set_prefix(client, "#!");
    // triggers at '#!foo'
    discord_set_on_command(client, "foo", &callback1);
    // triggers at '#!?bar'
    discord_set_on_command(client, "?bar", &callback2);
    // triggers at '#!_.baz'
    discord_set_on_command(client, "_.baz", &callback3);
    discord_run(client);
    discord_cleanup(client);
