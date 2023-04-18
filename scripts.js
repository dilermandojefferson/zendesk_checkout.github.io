let frameElement;
let doc;

zE('webWidget', 'open');

zE("webWidget:on", "userEvent", function (event) {
  if (event.action == "Web Widget Opened") {
  WebViewChannel.postMessage('WidgetOpened')}
 
  if (event.action == "Contact Form Shown") {
  WebViewChannel.postMessage('FormShown')}
 
  if (event.action == "Contact Form Submitted") {
  WebViewChannel.postMessage('FormSubmitted')}
  
});
zE('webWidget:on', 'close', function() {
WebViewChannel.postMessage('closeWebView');
});
