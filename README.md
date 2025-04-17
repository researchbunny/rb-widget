# ResearchBunny Widget

Boost your website's impact with the ResearchBunny Widget! 🎧 Deliver audio summaries of research papers effortlessly, engage your audience, and make knowledge more accessible.

- **Collection Widget**: Embed a scrollable list of audio summaries for your whole paper library—visitors can browse and play key insights with one click.  
- **Chat With Paper Widget**: Let users “chat” with any paper—ask questions in plain English and get instant, context‑aware answers.  


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

## Scripts

- **`npm run build`** — Compile TypeScript to JavaScript in `dist/`.
- **`npm publish`** — Publish package (build runs automatically via `prepublishOnly`).
