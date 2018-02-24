# VueJs-tips-Chrome-extension
a tip generator for VueJS Chrome extension

## Update Feb 2018:
This app helpful when I first started using VueJS, it was a cool example of a Chrome extension that used Vue. But it always bothered me that the app was really just a wrapper around the class-like structs object, so today I decided to make it more Vue-like, and update it to use Vue2.

But using Vue2 caused it to violate Chrome's content security policy, since there was no longer a CSP compliant version like there was with Vue1. And the easiest way to keep it simple and not require webpack was to sandbox the app, which required a small addition to the manifest file.
