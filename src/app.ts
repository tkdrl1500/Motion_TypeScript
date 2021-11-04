import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      'Image Title',
      'https://picsum.photos/600/300'
    );
    image.attachTo(appRoot, 'beforeend');
  }
}

//! as HTMLElement <- null이 아니고 HTMLElement라고 해줬다
// 어플리케이션이 시작되면 새로운 App 클래스를 만들어서 루트에는 document에 querySelector를 이용해서
// Dom요수에 있는 document의 요소를 받아와서 그곳에 페이지를 추가해 주었다.
new App(document.querySelector('.document')! as HTMLElement);
