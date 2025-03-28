---
title: Getting Started
---

Welcome to Polar Bear!

If you are seeing this page, the application is doing a lot of things in the background:

- It is extracting an Arch Linux ARM64 filesystem.
- It will then install Xfce4 and other important packages.

This process can take up to 10 minutes. In the meantime, let's spend your precious time to grasp some important concepts.

## How to install applications?

Polar Bear ships Arch Linux to you. Installing applications is actually easier than other distros:

```
pacman -S firefox
```

The command above will install Firefox.

```
pacman -Ss chrom
```

The command above will search for applications that contain the word "chrom". You will find Chromium in the list, but not Google Chrome. Why?

Google Chrome, and many other important softwares that you might need, are proprietary softwares, and are not conveniently available in the pacman-able applications.

But you don't need to go to their website looking for \*.installer files. There is an important concept that make Arch so beloved: the AUR (Arch User Repository). The concept is that: you install an AUR package manager such as `yay` or `paru`, and then you can install any AUR package you want.

```
yay google-chrome
yay visual-studio-code
yay spotify
```

The hardest part is to install `yay` or `paru`, you have to follow the README.md on their GitHub repository. It is not that simple, but is a great exercise for you to learn how to install software from source code in Linux.

## I don't have a physical keyboard.

After Xfce launches, go to Applications > Accessories > Onboard. This is an on-screen keyboard. But you are highly recommended to get a physical keyboard.

## What worked?

## What didn't work?
