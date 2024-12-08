declare namespace Calendly {
  interface PopupWidgetOptions {
    url: string;
  }

  function initPopupWidget(options: PopupWidgetOptions): void;
}

interface Window {
  Calendly: typeof Calendly;
}
