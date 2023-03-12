AnimaView a minimalist package that allows you to animate text on scroll.

<img src="https://github.com/sx-motive/anima-view/blob/master/src/anima-preview.gif" alt="anima view" border="0" />

## Installation

Use the package manager [npm](https://www.npmjs.com/package/anima-view) to install AnimaView.

```bash
npm install anima-view
```

## Usage

Styles for animation can be changed depending on your preferences, the standard styles can be taken below

html

```html
<!-- use elements with id, class, or data attribute -->
<p data-anima>Example text</p>
```

js

```javascript
import AnimaView from 'anima-view';
// can be any dom element
const elements = document.querySelectorAll('[data-anima]');
// without options default is bottom
const anima = new AnimaView(elements, options);
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

export default Component () {
  useEffect(() => {
   const elements = document.querySelectorAll('[data-anima]');
   const anima = new AnimaView(elements, 'random');
   anima.init();
  })
  return <p data-anima>Example text</p>
}
```

## GitHub

If you like the project or would like to improve it, please rate the project on the githab, this will help motivate me to continue working on it.

[GitHub](https://github.com/sx-motive/anima-view) | [Website](https://animaview.netlify.app/)
