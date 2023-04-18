let frameElement;
let doc;

zE('webWidget', 'open');

zE('webWidget:on', 'close', function() {
WebViewChannel.postMessage('closeWebView');
});

zE("webWidget:on", "userEvent", function (event) {
  if (event.action == "Contact Form Submitted") {
  WebViewChannel.postMessage('FormSubmitted')}
});
