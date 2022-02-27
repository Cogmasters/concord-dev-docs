====================================================
discord_get_logconf - Get client's logging internals
====================================================

.. doxygenfunction:: discord_get_logconf

Example
-------

.. code:: c

    struct discord *client = discord_init(BOT_TOKEN);
    struct logconf *conf = discord_get_logconf(client);

    logconf_set_quiet(conf, false); // write logging to console
    logconf_set_level(conf, LOG_INFO);
    logconf_info(conf, "Logging from the DISCORD module");

    discord_run(client);

    discord_cleanup(client);
