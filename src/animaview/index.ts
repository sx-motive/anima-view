import './index.css';

type Els =
  | NodeListOf<HTMLElement>
  | HTMLCollectionOf<Element>
  | HTMLElement
  | Element
  | null;

export default class AnimaView {
  els: Els;
  animType?: string;

  constructor(els: Els, animType?: string) {
    this.els = els;
    this.animType = animType;
  }

  getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max).toString();
  };

  getRandomPattern = () => {
    let num: string = '';
    switch (this.getRandomInt(4)) {
      case '0':
        num = '0 ,-110%';
        break;
      case '1':
        num = '0, 110%';
        break;
      case '2':
        num = '110%, 0';
        break;
      case '3':
        num = '-110%, 0';
    }
    return `translate(${num})`;
  };

  getTransformType = (span: HTMLElement) => {
    switch (this.animType) {
      case 'random':
        span.style.transform = this.getRandomPattern();
        break;
      case 'bottom':
        span.style.transform = `translate(0, 120%) skewY(10deg)`;
        break;
      case 'top':
        span.style.transform = `translate(0, -120%) skewY(-10deg)`;
        break;
      case 'left':
        span.style.transform = `translate(-110%, 0) skewX(10deg)`;
        break;
      case 'right':
        span.style.transform = `translate(110%, 0) skewX(-10deg)`;
        break;
      default:
        span.style.transform = `translate(0, 120%) skewY(10deg)`;
    }
  };

  getObserver = () =>
    new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        const intersecting = el.isIntersecting;
        intersecting
          ? el.target.classList.add('show')
          : el.target.classList.remove('show');
      });
    });

  init = () => {
    const pattern: RegExp = /(?<!(<\/?[^>]*|&[^;]*))([^\s<]+)/g;
    const defaultPattern: string = `$1<span class="word"><span>$2</span></span>`;

    let observer = this.getObserver();

    if (this.els === null) {
      console.log('No elements passed');
      return;
    }

    if (this.els instanceof NodeList || this.els instanceof HTMLCollection) {
      Array.prototype.map.call(this.els, (el) => {
        el.innerHTML = el.innerHTML.replace(pattern, defaultPattern);
        [...el.children].map((e) => {
          this.getTransformType(e.lastChild as HTMLElement);
          observer.observe(e);
        });
      });
    }

    if (this.els instanceof HTMLElement || this.els instanceof Element) {
      this.els.innerHTML = this.els.innerHTML.replace(pattern, defaultPattern);
      Array.from(this.els.children).map((e) => {
        this.getTransformType(e.lastChild as HTMLElement);
        observer.observe(e);
      });
    }
  };
}
