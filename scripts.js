let frameElement;
let doc;

zE("webWidget", "open");

zE("webWidget:on", "userEvent", function (event) {
  if (event.action == "Web Widget Opened") {
    setTimeout(() => hideHeader(), 3000);
  }

  if (event.action == "Contact Form Shown") {
    changeInputs();
  }

  if (event.action == "Contact Form Submitted") {
    window.ReactNativeWebView.postMessage(JSON.stringify({ sended: true }));
  }
});
