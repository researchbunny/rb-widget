# @researchbunny/rb-widget

Dynamically inject the ResearchBunny `rbWidget.js` script via a simple `init` call.

---

## Installation

Install from npm:

```bash
npm install @researchbunny/rb-widget
# or
yarn add @researchbunny/rb-widget
```

## Usage

Import and initialize in your JavaScript or TypeScript project:

```js
import ResearchBunny from '@researchbunny/rb-widget';

ResearchBunny.init({
  widgetId: 'YOUR_WIDGET_ID',       // (required) provided by ResearchBunny
  widgetType: 'collection',         // 'collection' (default) or 'chat'
  container: document.getElementById('app'), // (optional) where to append the script
});
```
 
## API Reference

### `ResearchBunny.init(options)`

- **options.widgetId** `(string)` — Your ResearchBunny widget ID (required).
- **options.widgetType** `("collection" | "single")` — Choose between collection or single widget (default: `"collection"`).
- **options.container** `(HTMLElement)` — DOM element to append the `<script>` to (default: `document.body`).


## Scripts

- **`npm run build`** — Compile TypeScript to JavaScript in `dist/`.
- **`npm publish`** — Publish package (build runs automatically via `prepublishOnly`).
