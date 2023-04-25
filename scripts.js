let frameElement;
let doc;

zE('webWidget', 'open');

zE('webWidget:on', 'close', function() {
WebViewChannel.postMessage('closeWebView');
});

zE("webWidget:on", "userEvent", function (event) {
  if (event.action == "Web Widget Opened") {
    setTimeout(() => hideHeader(), 500);
  }
  if (event.action == 'Contact Form Shown') {
    WebViewChannel.postMessage('FormShown');
  }

  if (event.action == 'Contact Form Submitted') {
    WebViewChannel.postMessage('FormSubmitted');
  }
  
});

function hideHeader() {
  frameElement = document.getElementById("webWidget");
  if (frameElement) {
    doc = frameElement.contentDocument;

    doc.querySelector("footer .cYBQJZ").placeholder = "escreva sua mensagem...";

    var tag = document.createElement("style");

    var css = document.createTextNode(
      `.kSCaYV {
        background-color: white !important;
        padding: 24px !important;
        padding-bottom: 24px !important;
      }
      .kSCaYV > div > div {
        margin-top: -8px !important;
      }
      textarea[data-garden-id='forms.textarea'] {
        height: 56px !important;
        width: 100% !important;
        background-color: #F4F3F5 !important;
        border-radius: 0 !important;
        display: flex !important;
        align-items: center !important;
      }
      button[data-garden-id='buttons.icon_button'].fgvvBn {
        height: 56px !important;
        background-color: #F4F3F5 !important;
        border-radius: 0 !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        margin-left: -1px !important;
      }
      button[data-garden-id='buttons.icon_button'].fgvvBn * {
        fill: #3F3FF9 !important;
      }
      .fgvvBn .sc-bwzfXH {
        width: unset !important;
        height: unset !important;
        min-width: unset !important;
      }`
    );
    tag.appendChild(css);
    doc.head.appendChild(tag);
  }
}
