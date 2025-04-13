---
title: How it works
---

1. An Arch Linux ARM64 filesystem is set up inside the app's internal storage.
2. Proot mounts the filesystem and provides a chroot-like environment.
3. A minimal built-in Wayland compositor runs in Android NDK.
4. Rootful Xwayland & a desktop environment launches inside the chroot and renders back to the Android native activity.
