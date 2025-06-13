---
title: Creating a Non-root User
---

For a simple setup process, Local Desktop won't prompt for a user registration form, that's why **it is login as root by default**.

However, some applications are **recommended** or **required** to run as a normal user. For example:

- Chrome and Electron-based applications like VS Code **work better or are safer** without root.
- AUR helpers like Paru or Yay require a non-root user and **won't work as root**.

:::info

Please follow the instructions below carefully, or you can continue to use XFCE with root if you prefer.

:::

## Create your user

Open a terminal and run the following command:

_(Replace `teddy` with your preferred username)_

```bash
useradd -m -G wheel teddy
```

- The `-m` flag creates a home directory for the user.
- The `-G wheel` option adds the user to the `wheel` group, allowing `sudo` access.

## Create your password

Set a password for your new user (you'll need this for `sudo`):

```bash
passwd teddy
```

## Set up `sudo`

Install `sudo` using `pacman` for convenience...

Edit the sudoers file to allow members of the `wheel` group to use `sudo`:

```bash
EDITOR=nano visudo
```

Uncomment the following line by removing the `#`:

```
# %wheel ALL=(ALL:ALL) ALL
```

It should look like:

```
%wheel ALL=(ALL:ALL) ALL
```

Save and exit.

## [Important] Tell Local Desktop

You must tell Local Desktop who to log in as, or it will log in as root. To (create and) edit the config file:

```
nano /etc/polar-bear/polar-bear.toml
```

Add the following content:

```toml title="/etc/polar-bear/polar-bear.toml"
[user]
username = "teddy"
```

_(Replace `teddy` with the username you created [previously](#create-your-user))_

The changes will take effect the next time you launch Local Desktop.
