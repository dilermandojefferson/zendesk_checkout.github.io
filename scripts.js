
zE("webWidget", "open");
// zE('messenger', 'open');

zE('webWidget:on', 'close', function() {
WebViewChannel.postMessage('closeWebView');
});

zE("webWidget:on", "userEvent", function (event) {
  if (event.action == "Contact Form Shown") {
  WebViewChannel.postMessage('FormShown')}
  
  if (event.action == "Contact Form Submitted") {
  WebViewChannel.postMessage('FormSubmitted')}
  
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
