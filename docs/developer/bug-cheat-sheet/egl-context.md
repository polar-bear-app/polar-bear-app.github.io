---
title: Failed to create EGLContext
---

## Issue

You would likely encounter this problem when using an emulator.

The logs would tell you that the error variant is `EGL_BAD_MATCH`. Khronos EGL documentation points out these errors [very clearly](https://registry.khronos.org/EGL/sdk/docs/man/html/eglMakeCurrent.xhtml#errors). It seems like the cause of our specific case is:

> If context does not support being bound without read and draw surfaces, and both draw and read are EGL_NO_SURFACE, an EGL_BAD_MATCH error is generated.

:::info
It's hard to find these documentations on your own, that's why this Bug Cheat Sheet will prove to be very useful.

So remember: **whenever you get stuck, come back here!** And don't just read - please contribute whatever you find.
:::

## Solution

Polar Bear patched this [portion of Smithay](https://github.com/polar-bear-app/new-polar-bear/commit/58ffc6fc37da2d799db0d68b8549abe57fa2e636) to create a dummy 1x1 pbuffer surface and use it as both the draw and read surface when calling `eglMakeCurrent` to avoid the `EGL_BAD_MATCH` error.

Dear EGL experts, does the above hack make sense?