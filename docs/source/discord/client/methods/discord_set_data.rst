========================================================
discord_set_data - save a pointer to user arbitrary data
========================================================

.. doxygenfunction:: discord_set_data

Example
-------

.. code:: c

    void on_ready(struct discord *client) 
    {
      char *text = discord_get_data(client);
      log_trace("%s", text);
    }

    int main(void)
    {
      struct discord *client = discord_init(BOT_TOKEN);
      discord_set_on_ready(client, &on_ready);

      char text[] = "Hello world!";
      discord_set_data(client, text);

      discord_run(client);

      discord_cleanup(client);
    }
