let frameElement;
let doc;

zE('webWidget', 'open');

zE('webWidget:on', 'close', function() {
CloseWebViewChannel.postMessage('closeWebView');
});

zE("webWidget:on", "userEvent", function (event) {
  if (event.action == "Contact Form Submitted") {
  FormSubmittedChannel.postMessage('FormSubmitted')}
});
