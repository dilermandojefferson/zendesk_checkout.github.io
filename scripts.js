zE('messenger', 'open');
zE("webWidget", "open");

//webWidget
zE("webWidget:on", "userEvent", function (event) {
  if (event.action == "Web Widget Opened	") {
    WebViewChannel.postMessage('openWebView');
  }
  zE("webWidget:on", "Web Widget Minimised", function () {
    WebViewChannel.postMessage('closeWebView');
  });

  zE("webWidget:on", "Contact Form Submitted", function () {
    WebViewChannel.postMessage('FormSubmitted');
  });
});

//messenger
zE("messenger:on", "userEvent", function (event) {
  if (event.action == "open") {
    WebViewChannel.postMessage('openWebView');
  }
  if (event.action == "close") {
    WebViewChannel.postMessage('closeWebView');
  }
});

