---
title: What is Proot?
---

## How much Linux is Android?

You must have heard somewhere that Android are actually Linux. How true is that?

Android has a Linux kernel, and that's it.

What does that mean to have a Linux kernel? It means that Android uses the same core system responsible for process management, memory handling, and actually more than that but that's not important for us. But beyond that, Android is a completely different operating system. It does not have the same file system, the same libraries, and the same system calls. What's more, it does not even have the same graphical technology stack.

## Two problems to tackle

As explained, in order to make Android run (shell) Linux applications, we need to provide a similar environment, that is, the same file system, the same libraries, and the same system calls.

And in order to run GUI applications, we need to provide a similar graphical technology stack.

## Chroot

You might have heard of docker, it is all over the place nowadays. You can think of `chroot` as a simplified version of docker which you don't ever need to install because it is part of every Linux distribution.

`chroot` is a Linux command that changes the root directory of the current process and its children. If you are running Ubuntu, and you `chroot` into an Arch Linux filesystem, then you are actually running Arch Linux.

## Proot

So the same concept can apply to Android, right? We can setup an Arch Linux filesystem inside Android, and then `chroot` into it. Unfortunately, `chroot` requires root access, that means you must root your Android device. It is not only inconvenient, but also dangerous. There is another option, and that is `proot`.

Now you might got the idea of what `proot` is. It is a tool that allows you to run Linux in a chroot-like environment without root access.

## Wrapping it up

The magic behind Polar Bear is that:

- It scaffolds an Arch Linux filesystem inside the app's internal storage.
- It `proot` into the filesystem, so that you can have the same file system, the same libraries, and the same system calls. And with the already Linux Kernel that Android has, you can run Linux applications.

How about the magic behind GUI applications?
