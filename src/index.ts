type Els =
  | NodeListOf<HTMLElement>
  | HTMLCollectionOf<Element>
  | HTMLElement
  | Element
  | null;

class AnimaView {
  els: Els;

  constructor(els: Els) {
    this.els = els;
  }

  init = () => {
    const pattern = /(?<!(<\/?[^>]*|&[^;]*))([^\s<]+)/g;
    const domPattern = '$1<span class="word"><span>$2</span></span>';

    if (this.els === null) {
      console.log('No elements passed');
      return;
    }

    if (this.els instanceof NodeList || this.els instanceof HTMLCollection) {
      Array.prototype.map.call(this.els, (el) => {
        el.innerHTML = el.innerHTML.replace(pattern, domPattern);
        let observer = new IntersectionObserver((entries) => {
          entries.forEach((el) => {
            const intersecting = el.isIntersecting;
            intersecting
              ? el.target.classList.add('show')
              : el.target.classList.remove('show');
          });
        });
        [...el.children].map((el) => observer.observe(el));
      });
    }

    if (this.els instanceof HTMLElement || this.els instanceof Element) {
      this.els.innerHTML = this.els.innerHTML.replace(pattern, domPattern);
    }
  };
}

const animaView = new AnimaView(document.querySelectorAll('[data-anima]'));
animaView.init();

export default AnimaView;
