AnimaView a minimalist package that allows you to animate text on scroll.

<img src="https://github.com/sx-motive/anima-view/blob/master/src/anima-preview.gif" alt="anima view" border="0" />

## Installation

Use the package manager [npm](https://www.npmjs.com/package/anima-view) to install AnimaView.

```bash
npm install anima-view
```

## Usage

Styles for animation can be changed depending on your preferences, the standard styles can be taken below

css

```css
.word {
  display: inline-block;
  overflow: hidden;
}
.word span {
  display: block;
  transition: transform 1s cubic-bezier(0.28, 0.81, 0.43, 0.97);
  transform-origin: top left;
  transform: translate(0, 100%) skewY(20deg);
}
.word.show span {
  transform: translate(0, 0) skew(0deg);
}
```

js

```javascript
import AnimaView from 'anima-view';

const anima = new AnimaView(/* pass elements as a first parameter */);
anima.init();
```

## Options

You can use the second parameter as the type of animation. There are currently 5 animation types supported

```javascript
['left', 'right', 'top', 'bottom', 'random'].
```

The second parameter is taken as a string. If no parametre has been passed, the default animation type is 'bottom'.
