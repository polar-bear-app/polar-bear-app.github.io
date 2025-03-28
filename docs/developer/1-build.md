---
title: Build from Source
---

To build Polar Bear from source code, you can follow these steps:

1. Clone the source code repository:

   ```
   git clone https://github.com/polar-bear-os/polar-bear.git
   ```

2. Make sure you already have Rust and Cargo installed. If not, please check the official Rust website for [installation instructions](https://www.rust-lang.org/tools/install). Then, you can install the [xbuild](https://github.com/rust-mobile/xbuild) tool:

   ```
   cargo install xbuild
   ```

3. Build the project:

   ```
   x build --platform android --arch arm64
   ```

Then you will find the APK file in `target/x/debug/android/polar-bear.apk`.
