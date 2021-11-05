import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
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

    const video = new VideoComponent(
      'Video Title',
      'https://www.youtube.com/embed/flOgJ65L3PY?list=RDfSdvaj4oqh8'
    );
    video.attachTo(appRoot, 'beforeend');

    const note = new NoteComponent('Note Title', 'Note Body');
    note.attachTo(appRoot, 'beforeend');

    const todo = new TodoComponent('Todo Title', 'Todo Item');
    todo.attachTo(appRoot, 'beforeend');
  }
}

//! as HTMLElement <- null이 아니고 HTMLElement라고 해줬다
// 어플리케이션이 시작되면 새로운 App 클래스를 만들어서 루트에는 document에 querySelector를 이용해서
// Dom요수에 있는 document의 요소를 받아와서 그곳에 페이지를 추가해 주었다.
new App(document.querySelector('.document')! as HTMLElement);
