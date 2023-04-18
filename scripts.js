zE('messenger', 'open');


zE("messenger:on", "open", function () {
  console.log(`You have opened the messaging Web Widget`)
});
zE("messenger:on", "close", function () {
  WebViewChannel.postMessage('closeWebView')
});
