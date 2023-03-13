AnimaView a minimalist package that allows you to animate text on scroll.

<img src="https://github.com/sx-motive/anima-view/blob/master/src/anima-preview.gif" alt="anima view" border="0" />

## Installation

Use the package manager [npm](https://www.npmjs.com/package/anima-view) to install AnimaView.

```bash
npm install anima-view
```

or download files [animaview.min.js](https://cdn.jsdelivr.net/npm/anima-view/animaview.min.js) | [animaview.min.css](https://cdn.jsdelivr.net/npm/anima-view/animaview.min.css)

## Usage

### html

```html
<!-- use elements with id, class, or data attribute -->
<p data-anima>Example text</p>
```

### css

```css
.word {
  display: inline-block;
  overflow: hidden;
}
.word span {
  display: block;
  transition: all 1s cubic-bezier(0.28, 0.81, 0.43, 0.97);
  transition-delay: 0.145s;
}
.word.show span {
  transform: translateY(0) skewY(0) !important;
}
```

### js

```javascript
import AnimaView from 'anima-view';
// can be any dom element
const elements = document.querySelectorAll('[data-anima]');
// without options default is bottom
const anima = new AnimaView(elements, 'options');
anima.init();
```

## Options

You can use the second parameter as the type of animation. There are currently 5 animation types supported

```javascript
'left', 'right', 'top', 'bottom', 'random'.
```

The second parameter is taken as a string. If no parametre has been passed, the default animation type is 'bottom'.

## Example using with React

```jsx
import { useEffect } from 'react';
import AnimaView from 'anima-view';

export default function Component() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-anima]');
    const anima = new AnimaView(elements, 'random');
    anima.init();
  });
  return <p data-anima>Example text</p>;
}
```

## Evaluation and suggestions

If you like the project or would like to improve it, please rate on githab, this will motivate me to continue working on it, big thanks! ❤️

[GitHub](https://github.com/sx-motive/anima-view) | [Website](https://animaview.netlify.app/)
