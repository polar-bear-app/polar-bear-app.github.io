---
title: The Wayland Protocol
---

## Display Server

You may be surprise that to display some pixels from your application, say, Firefox, to your screen, Linux implement a client-server protocol. In this model, Firefox is the client and the display server is the server (obviously).

Not all operating systems use a display server. Windows uses a monolithic graphics architecture where the windowing system, input handling, and rendering are all tightly integrated into the operating system.

## X11 and Xorg

If you have used Linux for a while, you must have seen the word X11 or Xorg. X11 is the original protocol for the display server. Xorg is a display server that implements the X11 protocol.

:::note
Remember, X11 is a protocol, Xorg is a display server. Although they are often used interchangeably, they are not the same thing.
:::

## Wayland

Wayland is a modern display server protocol that is designed to replace X11. And Polar Bear follows this trend. This approach has some advantages:

- Wayland servers, more frequently called **compositors**, are much more efficient than X11 servers.
- By implementing a minimal Wayland compositor, we can run Xwayland on top of it.

## Xwayland

Xwayland, just like Xorg, is a display server that implements the X11 protocol.

Xwayland, different from Xorg, in that it runs **on top of another Wayland compositor**, while Xorg runs on top of the Linux kernel.

How Xwayland did this, you may ask? It is more obvious than you think: it acts as a Wayland client. In other words, it is a Wayland client that takes the responsibility of an X11 display server.

## Wrapping it up

The magic behind Polar Bear is that:

- It implements a minimal Wayland compositor that runs on an Android native activity.
- That minimal Wayland compositor runs Xwayland.
- Xwayland displays the UI of other applications, such as Firefox or Xfce.

Fun fact: [Termux:X11](https://github.com/termux/termux-x11) also implements a display server, but it is based on X11. Just like how Xwayland is an X11 server running on top of Wayland, Termux:X11 is an X11 server running on top of an Android activity. (And Xorg is an X11 server running on top of the Linux kernel, remember that?)
