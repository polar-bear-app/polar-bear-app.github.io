---
title: Firefox
---

Firefox works well on Polar Bear. This is one of the ways to use Browser DevTools on your phone.

![Firefox on Polar Bear](/img/firefox.webp)

## Fixed issues

### Gah. Your tab just crashed.

This is an unavoidable behavior of Firefox on Termux, caused by unsupported sandboxing. More on this issue, visit [#139](https://github.com/termux/proot/issues/139).

#### Solution

As [@ZhymabekRoman](https://github.com/termux/proot/issues/139#issuecomment-751988264) pointed out, this issue can be fixed by tweaking the `about:config` settings. Polar Bear automatically tweaks these settings for all profiles by using [Firefox AutoConfig](https://support.mozilla.org/en-US/kb/customizing-firefox-using-autoconfig) [on each startup](https://github.com/polar-bear-app/new-polar-bear/commit/e4781875f767cb311452a254f329ba2e1566f885).
