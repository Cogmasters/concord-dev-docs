=======================================================================
discord_config_init - create a Discord client handle from a config file
=======================================================================

.. doxygenfunction:: discord_config_init

Sample ``config.json``
----------------------

.. code:: json

  {
    "logging": {
      "level": "trace",
      "filename": "bot.log",
      "quiet": false,
      "overwrite": true,
      "use_color": true,
      "http": {
        "enable": true,
        "filename": "http.log"
      },
      "disable_modules": [
        "WEBSOCKETS", 
        "USER_AGENT",
        "DISCORD_HTTP",
      ]
    },
    "discord": {
      "token": "YOUR-BOT-TOKEN",
      "default_prefix": {
        "enable": true,
        "prefix": "!"
      }
    }
  }

Example
-------

.. code:: c

    void on_ready(struct discord *client) 
    {
      log_info("Up and running!");
    }

    int main(void)
    {
      struct discord *client = discord_config_init("config.json");
      discord_set_on_ready(client, &on_ready);
      discord_run(client);
      discord_cleanup(client);
    }
