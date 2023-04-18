zE('messenger:on', 'open');


zE("messenger:on", "userEvent", function (event) {
  if (event.action == "Web Widget Minimised") {
  WebViewChannel.postMessage('closeWebView');}
 
  if (event.action == "Contact Form Shown") {
  WebViewChannel.postMessage('FormShown');}
 
  if (event.action == "Contact Form Submitted") {
  WebViewChannel.postMessage('FormSubmitted');}
  
});
