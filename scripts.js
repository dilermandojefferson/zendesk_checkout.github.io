
zE("webWidget", "open");
// zE('messenger', 'open');

zE('webWidget:on', 'close', function() {
WebViewChannel.postMessage('closeWebView');
});

zE('webWidget:on', "Web Widget Opened", function() {
WebViewChannel.postMessage('openWebView');
});

zE('webWidget:on', "Web Widget Minimised", function() {
WebViewChannel.postMessage('closeWebView');
});

zE('webWidget:on', "Contact Form Submitted", function() {
WebViewChannel.postMessage('FormSubmitted');
});

// //messenger
// zE("messenger:on", "userEvent", function (event) {
//   if (event.action == "open") {
//     WebViewChannel.postMessage('openWebView');
//   }
//   if (event.action == "close") {
//     WebViewChannel.postMessage('closeWebView');
//   }
// });
// zE("messenger:set", "cookies", true)
