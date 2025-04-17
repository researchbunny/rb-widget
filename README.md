# ResearchBunny Widget

Boost your website's impact with the ResearchBunny Widget! 🎧 Deliver audio summaries of research papers effortlessly, engage your audience, and make knowledge more accessible.

- **Collection Widget**: Embed a scrollable list of audio summaries for your academic papers.
- **Chat With Paper Widget**: Let users “chat” with your papers questions in plain English and get instant, context‑aware answers.  

<img src="https://www.researchbunny.com/images/features/features-widget-collection.png" alt="drawing" width="400"/>



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
  widgetId: '<WIDGET_ID>',       // (required) provided by ResearchBunny
  widgetType: 'collection',         // 'collection' (default) or 'chat'
  container: document.getElementById('app'), // (optional) where to append the script
});
```

To get the `WIDGET_ID`, signup on https://www.researchbunny.com and navigate to widget section. Refer to tutorial for more information.

## Resources

- **Demo**: https://www.researchbunny.com/widget?widgetId=cm29vjnwh00036r0rkw01os9z
- **Tutorial**: https://www.youtube.com/watch?v=pZrbjF2vCVE
- **Website**: https://www.researchbunny.com
