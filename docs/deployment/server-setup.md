---
id: server-setup
title: Server setup
---

By following this guide, you'll to get two secure [Ubuntu Server 18.04](https://www.ubuntu.com/download/server) servers running in the cloud and ready for use.

This is compatible with any environment and OS.

This is made possible with a [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine)(VM)
that ensures everybody can achieve the same results, and never worry about configuring their own environment.

## Prerequisites

> **NOTE:** If you already use a unix or unix based based OS,
> you don't need to install the VM and can jump straight to creating [key-pairs](#create-ssh-key-pairs)

- [VirtualBox](https://www.virtualbox.org/)
- [Vagrant](https://www.vagrantup.com/downloads.html)

If they aren't installed, it's easy to do by going to their websites and following the instructions for your OS.

- The `ssh-keygen` command or equivalent

### VM Setup

This part is only for people needing the `ssh-keygen` command or a unix or unix-like OS.

Open a terminal and make a new project folder, then download the server-configuration repository:

```bash
mkdir vm-server-setup && cd vm-server-setup
git clone https://github.com/MathiasKandelborg/server-configuration.git .
```

Now it's time to setup the VM.

The initial setup generally takes some time as the computer is downloading, installing _and running_ an entire OS.
This only needs to be done once though. After this, the VM has been created and doesn't take long to boot:

```bash
vagrant up
```

When the installation processes are done, access the VM:

```bash
vagrant ssh
```

## Create SSH key-pairs

We'll create the key-pair with some extra flags for more security. We're also telling the program to create a 4096bit key instead of the less secure 2048bit

- Create api server key-pair
- Create website server key-pair

Change `api_server_id` & `website_server_id` to something relevant. This will be the name of the key-pairs:

```bash
ssh-keygen -f ~/generated-keys/api_server_id -t rsa -b 4096

ssh-keygen -f ~/generated-keys/website_server_id -t rsa -b 4096
```

> press 'enter' twice for no password.
>
> You can choose a password if you want to, it's obviously good for security.
> The password is needed every time the key is used.

You might have noticed that four files popped up inside a `generated-keys` folder in the home directory, see them by running `ls ~/generated-keys`.

The .pub files are for registering the key-pair in various places.

The others are **_highly confidential_**, if they become compromised you have no defence against hackers.

This particular compromise means that your database(s), login credentials, command history and everything else on your server is free to access for _anyone_.
It might also enable attacks on a personal/work machine as they have complete control over the server and that it does.

#### You are the _sole possessor_ of your confidential files. Make sure to handle them that way

This is a secure server setup and you _need_ to figure out how **you** are going to handle your files in a secure manner.

I cannot give any definitive suggestions to secure file & password handling, because there's so many situations to take into account.
It's advised take some time to learn about file & group permissions on computers along with proper data-handling practices.

One good solution to file transfer is [scp](http://manpages.ubuntu.com/manpages/bionic/en/man1/scp.1.html), as it uses SSH and asks for passwords if set.

---

## Cloud-init overview

The cloud-init file is where every install and execute command is defined.
They're executed on first boot.

Two servers are being made. One for the API and one for the website & api client.
To ensure great default security, two cloud-init files exists.
The only difference being a few settings in the firewall.

Here's an overlook of the instructions defined in **both** cloud-init files:

- Set the main user to 'admin'
- Disable root login functionality
- Disable password login
- Disable running admin commands without sudo
- Define authorized SSH keys for user 'admin'
- Enable login for new user 'admin' **only**
- Setup a firewall using UFW
  - Disable all ingoing connections
  - Disable default SSH port to defer generic hacking attempts
  - Enable port 2222 with rate-limiting
  - Enable NTP ports
- Set timezone to UTC

In `configuration/website/cloud-init`:

- Enable www, HTTP & HTTPS ports
- Enable port 4657

In `configuration/api/cloud-init`:

- Enable port 4466

### Configuring cloud-init

The only thing we need to do right now, is input the newly generated SSH key:

Changing values in cloud-init or `.yaml` files in genereal can be bothersome because of indentation, spaces and weird characters.

It's **highly recommended** to use find & replace for any action regarding cloud-init files.

- Copy the contents of server_id.pub

```bash
cat ~/generated-keys/server_id-pub
```

- Open the `cloud-init` files
- Input _all_ the contents of server_id.pub on line 8, from column 9 in both files
- **Optional:** Change username, which is done simultaneously on lines 3 & 12

> If you choose to change the name of the user, remember to change it on line 12 as well.
> This is where we tell the server which users are allowed to connect to the server.

## Changing SSH Port

Remember to these steps _before_ creating the server. Otherwise they have no effect.

For some clarification on why or why not to use custom SSH ports, [read this](https://www.quora.com/Is-changing-the-SSHD-default-port-a-good-practice).

**Example** _SSH port changed to 9001 by editing Line 10 & 16 from terminal_:

```bash
line 10: sed -i -e '/^#Port 22/s/^.*$/Port 9001/' /etc/ssh/sshd_config

 ...
 ...

line 16: ufw allow 9001/tcp
```

Which would result in having to use port 9001, when connecting to the server.

---

## Creating the servers

If you don't have a [Digital Ocean](https://www.digitalocean.com/) account already, go make one. Here's my [(100USD for 60 days referral link)](https://m.do.co/c/acc19c3cd28f).

1. Log into your account
2. Press the green button with the words 'create' in the top-right corner
3. Choose the 'Droplets' option
4. At the start in the images dropdown-menu choose `Ubuntu 18.04 x64`
5. Choose your preferred server size (the smallest is fine)
6. Skip the sections about enabling backups and adding volumes
7. Chose a data-center region closest to your location
8. Select the following additional options:
   - Private networking
   - IPv6
   - Monitoring
   - User data

After having chosen 'user data', a big text-box show up. This box is actually where most of the magic happens. Let's put something in it!

- Copy the contents of your customized cloud-init file
- Paste the file contents into the 'user data' text-box

> You can happily skip the SSH key section, as that functionality is what we've just done.
>
> We're just storing the key in our own, local environment. **_Not_** on a server somewhere we don't have control over it.

In the last section 'Finalize and create', you can define how many droplets you want and an optional hostname for the server.

Now for the last and hardest part of setting up a Digital Ocean droplet... I'm unsure if any of us are ready for this:

- Click create!

It's going to take a minute or two before the droplet is accessible with the custom configuration.
In the meantime, the other server can be setup in the exact same manner. The only difference being the cloud-init file used for setup.

After a little while, the servers are ready for logging in. Follow the [server access section](/deployment/server-access) to learn more about that.

We're now ready for deployment! Let's go build the applications.
