let frameElement;
let doc;

zE('webWidget', 'open');

zE('webWidget:on', 'close', function() {
CloseWebViewChannel.postMessage('closeWebView');
});
