import imgAnima from './animaview.gif';

const text: string = `
  <section>
   <div class="container">
    <h2 data-anima>Anima View</h2>
    <div class="tags">
     <a class="tags" data-anima href="https://github.com/sx-motive">Author ↗︎</a>
     <a class="tags" data-anima href="">GitHub repo ↗︎</a>
     <a class="tags" data-anima href="https://www.npmjs.com/package/anima-view">NPM package ↗︎</a>
   </div>
  <p data-anima>
    Animation on a website can serve several purposes, and its importance
    can vary depending on the specific context and goals of the website.
    Here are a few reasons why animation can be important:
  </p>

  <p data-anima>
    Captivating Attention: Animation can be a powerful tool for capturing
    a user's attention and drawing them in to explore your website
    further. By adding movement and interactivity to your website, you can
    create a more engaging user experience and increase the chances that
    visitors will stay on your site longer.
  </p>
  <img src="${imgAnima}" alt="anima view" />
  <p data-anima>
    Enhancing User Experience: Animations can also be used to enhance the
    user experience on a website. For example, animations can be used to
    provide visual feedback when a user interacts with a button or form
    field, or to guide a user through a multi-step process.
  </p>
  <p data-anima>
    Conveying Information: Animations can be used to convey complex
    information or concepts in a more engaging and memorable way. For
    example, an animated infographic can be more effective at explaining a
    complex data set than a static image or text.
  </p>
  <p data-anima>
    Branding: Animations can be used to reinforce a brand's visual
    identity and personality. By incorporating brand-specific animations
    into a website, a company can create a more cohesive and memorable
    online presence.
  </p>
  <p data-anima>
    Overall, animation can be an important tool for improving the user
    experience, conveying information, and enhancing the overall visual
    appeal of a website. However, it is important to use animation
    thoughtfully and in a way that is consistent with the goals and needs
    of the website and its users.
  </p>
  <span data-anima>Thanks ChatGPT for this awesome article 😽</span>
</div>
</section>
<footer>
<div class="container">
  <a href="https://www.npmjs.com/package/anima-view" data-anima
    >Try Anima View today ↗︎
  </a>
</div>
</footer>
`;

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

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        const intersecting = el.isIntersecting;
        intersecting
          ? el.target.classList.add('show')
          : el.target.classList.remove('show');
      });
    });

    if (this.els === null) {
      console.log('No elements passed');
      return;
    }

    if (this.els instanceof NodeList || this.els instanceof HTMLCollection) {
      Array.prototype.map.call(this.els, (el) => {
        el.innerHTML = el.innerHTML.replace(pattern, domPattern);
        [...el.children].map((el) => observer.observe(el));
      });
    }

    if (this.els instanceof HTMLElement || this.els instanceof Element) {
      this.els.innerHTML = this.els.innerHTML.replace(pattern, domPattern);
      Array.from(this.els.children).map((el) => observer.observe(el));
    }
  };
}

const el: HTMLElement | null = document.getElementById('anima-container');

window.onload = () => {
  el!.innerHTML = text;
  const animaView = new AnimaView(document.querySelectorAll('[data-anima]'));
  animaView.init();
};

export default AnimaView;
