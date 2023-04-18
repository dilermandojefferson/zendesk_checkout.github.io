let frameElement;
let doc;

zE('webWidget', 'open');

zE('webWidget:on', 'close', function() {
WebViewChannel.postMessage('closeWebView');
});

zE("webWidget:on", "userEvent", function (event) {
  if (event.action == "Web Widget Opened") {
    setTimeout(() => hideHeader(), 3000);
  }
  
  if (event.action == "Contact Form Shown") {
  WebViewChannel.postMessage('FormShown')}
  
  if (event.action == "Contact Form Submitted") {
  WebViewChannel.postMessage('FormSubmitted')}
  
});

function hideHeader() {
  frameElement = document.getElementById("webWidget");
  if (frameElement) {
    doc = frameElement.contentDocument;

    doc.querySelector("footer .cYBQJZ").placeholder = "escreva sua mensagem...";

    var tag = document.createElement("style");

    var css = document.createTextNode(
      `@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');
            body *{
              font-family: 'Montserrat' !important;
              font-size: 12px;
              line-height: 19px;
              color: #555566;
            }
            header {
              display: none !important;
            }
            .kSCaYV {
              background-color: white !important;
              padding: 24px !important;
              padding-bottom: 36px !important;
            }
            .kSCaYV > div > div {
              margin-top: -8px !important;
            }
            div[data-embed='answerBot'] > div { 
              background-color: #F4F3F5 !important; 
            }
            textarea[data-garden-id='forms.textarea'] {
              height: 56px !important;
              width: 100% !important;
              background-color: #F4F3F5 !important;
              border-radius: 0 !important;
              display: flex !important;
              align-items: center !important;
            }
            textarea[name='description'].bcdGHE {
              height: unset !important;
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
            }
            .messageBubble-2ou39.jbOYwB {
              border-radius: 0 !important;
              padding: 16px !important;
              background-color: white !important;
              color: #555566 !important;
              max-width: 260px !important;
            }
            .messageBubble-2ou39.hlCbKV {
              border-radius: 0 !important;
              padding: 16px !important;
              background-color: #E8E7EB !important;
              color: #555566 !important;
              max-width: 260px !important;
            }
            .cdukDb {
              margin-top: 12px !important;
              margin-bottom: 12px !important;
            }
            .jJTBIT {
              background-color: white !important;
            }
            .fMlLlM {
              font-size: 24px !important;
              margin-bottom: 40px !important;
              color: #1A0E38 !important;
              font-weight: 300;
              line-height: 165%;

            }
            input[data-garden-id='forms.input'] {
              border-radius: 0 !important;
              padding-top: 8px !important;
              padding-bottom: 8px !important;
              padding-left: 0px !important;
              padding-right: 0px !important;
              font-size: 14px !important;
              background-color: transparent !important;
              border: none !important;
              border-bottom: 1px solid #8C869C !important;
            }
            input[data-garden-id='forms.input']:focus {
              box-shadow: none !important;
              border: none !important;
              border-bottom: 1px solid #2D2DB2 !important;
            }
            textarea[data-garden-id='forms.textarea'] {
              padding-top: 18px !important;
            }
            textarea[name='description'] {
              border-radius: 0 !important;
              padding-top: 8px !important;
              padding-bottom: 8px !important;
              padding-left: 0px !important;
              padding-right: 0px !important;
              font-size: 14px !important;
              background-color: transparent !important;
              border: none !important;
              border-bottom: 1px solid #8C869C !important;
            }
            textarea[name='description']:focus {
              box-shadow: none !important;
              border: none !important;
              border-bottom: 1px solid #2D2DB2 !important;
            }
            div[data-garden-id='dropdowns.faux_input'].ctBQaH {
              border-radius: 0 !important;
              padding-top: 8px !important;
              padding-bottom: 8px !important;
              padding-left: 0px !important;
              padding-right: 0px !important;
              font-size: 14px !important;
              background-color: transparent !important;
              border: none !important;
              border-bottom: 1px solid #8C869C !important;
            }
            .kGWAAA {
              box-shadow: none !important;
            }
            div[data-garden-id='dropdowns.faux_input'].ctBQaH:focus {
              box-shadow: none !important;
              border: none !important;
              border-bottom: 1px solid #2D2DB2 !important;
            }
            form[data-testid='support-ticket-form'] {
              background-color: #FFFFFF !important; 
            }
            label[data-garden-id='forms.input_label'] {
              color: #110022 !important;
              text-transform: uppercase !important;
              font-weight: 700 !important;
              margin-top: 32px !important;
            }
            label[data-garden-id='forms.input_label'] strong{
              color: #110022 !important;
              letter-spacing: 0.15em;
            }
            label[data-garden-id='forms.input_label'] div{
              color: #110022 !important;
            }
            .bInBnj:not([disabled]) {
              background-color: #1A0E38 !important;
              border: none !important;
            }
            .bInBnj {
              background-color: #1A0E38 !important;
              border: none !important;
              border-radius: 0 !important;
              width: 100% !important;
              height: 64px !important;
              letter-spacing: 0.15em;
              text-transform: uppercase;
              font-weight: 700;
              font-size: 12px !important;
            }
            button.eyrjvo.eyrjvo.eyrjvo[data-testid='pill-button'] {
              visibility: hidden;
              font-size: 1px !important;
            }
            button.eyrjvo.eyrjvo.eyrjvo[data-testid='pill-button']:after {
              content: "Falar com suporte";
              visibility: visible;
              color: #2d2db3 !important;
              font-weight: 600;
              border: none !important;
              font-size: 12px !important;
            }
            .jJTBIT {
              border-radius: 0 !important;
              border: none !important;
            }
            .gffeQv {
              border-radius: 0 !important;
              border: none !important;
            }
            .jJTBIT .iuJCfr {
              color: #2D2DB2 !important;
            }
            .fSLvRz path {
              stroke: #2D2DB2 !important;
            }
            .dmwHSF {
              color: #2D2DB2 !important;
            }
            .hGLFsb {
              background: white !important;
              border-radius: 0 !important;
              border: none !important;
            }
            .dTrJSy {
              background: white !important;
              border-radius: 0 !important;
              border: none !important;
            }
            textarea::placeholder {
              font-size: 14px !important;
              line-height: 155% !important;
              letter-spacing: 0.1em !important;
              color: #8C869C !important;
            }
            input::placeholder {
              font-size: 14px !important;
              line-height: 155% !important;
              letter-spacing: 0.1em !important;
              color: #8C869C !important;
            }
            label[for='dropzone-input'] {
              display: none;
            }
            #dropzone-input {
              border-radius: 0 !important;
              background: #F4F3F5 !important;
              border-color: #D1CFD7 !important;
              margin-top: 32px !important;
            }
            #dropzone-input > .eiBYcC {
              text-align: left !important;
            }
            #dropzone-input > .eiBYcC .blfOQk {
              color: #555566 !important;
            }
            div[data-testid='slide-appear-container'].jHJaTs {
              display: none !important;
            }
            .originalArticleButton-22KqM {
              display: none !important;
            }`
    );

    tag.appendChild(css);
    doc.head.appendChild(tag);
  }
}

