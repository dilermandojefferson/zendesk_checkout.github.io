// zE('messenger', 'open');
zE("webWidget", "open");

//webWidget
zE("webWidget:on", "userEvent", function (event) {
  if (event.action == "Web Widget Opened") {
    WebViewChannel.postMessage('openWebView');
  }
  if (event.action == "Web Widget Minimised") {
    WebViewChannel.postMessage('closeWebView');
  }
  if (event.action == "Contact Form Submitted") {
    WebViewChannel.postMessage('FormSubmitted');
  }
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
