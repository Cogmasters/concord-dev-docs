========================================
discord_set_presence - set client status
========================================

.. doxygenfunction:: discord_set_presence

Example
-------

.. code:: c

    void on_ready(struct discord *client)
    {
      struct discord_presence_status status = {
        .activities = (struct discord_activity *[]){
          &(struct discord_activity){
            .name = "Reading the docs...",
            .type = DISCORD_ACTIVITY_GAME
          },
          NULL // END OF ACTIVITIES LIST
        },
        .status = "idle",
        .since = discord_timestamp(client)
      };

      discord_set_presence(client, &status);
    }

    int main(void)
    {
      struct discord *client = discord_init(BOT_TOKEN);
      discord_set_on_ready(client, &on_ready);

      discord_run(client);

      discord_cleanup(client);
    }
