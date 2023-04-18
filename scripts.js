zE("messenger:on", "open", function () {
  WebViewChannel.postMessage('openWebView')
});

zE('messenger', 'open');

zE("messenger:on", "close", function () {
  WebViewChannel.postMessage('closeWebView')
});
