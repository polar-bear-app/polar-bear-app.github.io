---
title: What's Currently Supported
---

```mermaid
kanban
    ✅ Supported
        XFCE4
        Most native applications
        Electron applications but require --no-sandbox
        Applications that require fakeroot, such as sudo, yay, paru,..
        ARM64-v8a with 16 KB ELF alignment for Android 15+

    🗺️ Planed
        Reach proot-distro stability level
        Configuration file support: /etc/polar-bear/config.toml
        Launch as a non-root user
        Debloat ArchFS archive from the APK

    💭 Considering
        Audio via PulseAudio
        Black screen startup workaround

    ❌ Won't support
        A GUI configuration panel
        A mouse pointer simulation
```
