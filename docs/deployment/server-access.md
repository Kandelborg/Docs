---
id: server-access
title: Server access
---

## Accessing remote servers

Connect to each server after changing `server_ip` to the server ip and `server_id` to the relevant name used when creating the key-pairs:

```bash
ssh -p 2222 admin@server_ip -i ~/generated-keys/server_id.pub
```

You can use any SSH program of your choice, as long as you can to define the locations of your keys and port.

**If you choose to use other software than provided, remember to change the port to 2222 instead of 22.**

### Vagrant

If you have a VM and it's not running, spin it up and connect:

- `vagrant up && vagrant ssh`
