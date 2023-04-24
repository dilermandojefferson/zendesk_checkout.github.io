zE("messenger:on", "open", function () {
  WebViewChannel.postMessage('openWebView')
});
zE("webWidget:on", "open", function () {
  WebViewChannel.postMessage('openWebView')
});

zE('messenger', 'open');
zE("webWidget", "open");

zE("messenger:on", "close", function () {
  WebViewChannel.postMessage('closeWebView')
});
zE("webWidget:on", "close", function () {
  WebViewChannel.postMessage('closeWebView')
});
