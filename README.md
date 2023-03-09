AnimaView a minimalist package that allows you to animate text on scroll.

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

Coming soon 😊
