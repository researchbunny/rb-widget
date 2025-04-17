/**
 * researchbunny-widget v1.0.0
 * Exposes a global ResearchBunny object with init() to load the rbWidget script.
 */

type InitOptions = {
  widgetId: string;
  widgetType?: "collection" | "chat" | "paper";
  container?: HTMLElement;
};

export interface ResearchBunnyStatic {
  /**
   * Dynamically injects the ResearchBunny widget script.
   *
   * @param options.widgetId      — Your widget ID (required)
   * @param options.widgetType    — 'collection' or 'chat' or 'paper' (default: 'collection')
   * @param options.container     — Container to append the <script> (default: document.body)
   */
  init(options: InitOptions): void;
}

const ResearchBunny: ResearchBunnyStatic = {
  init({
    widgetId,
    widgetType = "collection",
    container = document.body,
  }: InitOptions): void {
    if (!widgetId) {
      throw new Error('[researchbunny-widget] "widgetId" is required');
    }
    // Prevent duplicate injection
    if (
      document.querySelector<HTMLScriptElement>(
        `script[data-widget-id=\"${widgetId}\"]`
      )
    ) {
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.researchbunny.com/rbWidget.js";
    script.setAttribute("data-widget-id", widgetId);
    script.setAttribute("data-widget-type", widgetType);
    container.appendChild(script);
  },
};

// If used in browsers directly, attach to window
declare global {
  interface Window {
    ResearchBunny: ResearchBunnyStatic;
  }
}

if (typeof window !== "undefined") {
  window.ResearchBunny = ResearchBunny;
}

export default ResearchBunny;
