=============================================
discord_clone - clone a Discord client handle
=============================================

.. doxygenfunction:: discord_clone

Example
-------

.. code:: c

    #include <concord/discord.h>
    #include <concord/work.h> // use concord's threadpool

    void task(void *data)
    {
      struct discord *client = data;
      sleep(5); // simulate intensive operations with sleep
      discord_cleanup(client); // won't interfere with the original
    }

    void on_task(struct discord *client, const struct discord_message *msg)
    {
      struct discord *dup_client = discord_clone(client);
      work_run(&task, dup_client);
    }

    int main(void)
    {
      struct discord *client = discord_init(BOT_TOKEN);
      discord_set_on_command(client, "!task", &on_task);
      discord_run(client);
      discord_cleanup(client);
    }
