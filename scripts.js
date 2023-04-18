zE('webWidget', 'open');

zE("webWidget:on", "userEvent", function (event) {
  if (event.action == "close") {
  WebViewChannel.postMessage('closeWebView');}
 
  if (event.action == "Contact Form Shown") {
  WebViewChannel.postMessage('FormShown');}
 
  if (event.action == "Contact Form Submitted") {
  WebViewChannel.postMessage('FormSubmitted');}
  
});

