import { Component } from './components/component.js';
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from './components/page/page.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { InputDialog } from './components/dialog/dialog.js';

class App {
  // page는 Component이면서 addChild를 할 수있는 Composable이 가능한 요소이다
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      'Image Title',
      'https://picsum.photos/600/300'
    );
    this.page.addChild(image);

    const video = new VideoComponent(
      'Video Title',
      'https://www.youtube.com/embed/flOgJ65L3PY?list=RDfSdvaj4oqh8'
    );
    this.page.addChild(video);

    const note = new NoteComponent('Note Title', 'Note Body');
    this.page.addChild(note);

    const todo = new TodoComponent('Todo Title', 'Todo Item');
    this.page.addChild(todo);

    const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
    imageBtn.addEventListener('click', () => {
      const dialog = new InputDialog();

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(document.body);
      });
      dialog.setOnSubmitListener(() => {
        //섹션을 만들어서 페이지에 추가 해준다
        dialog.removeFrom(document.body);
      });
      dialog.attachTo(document.body);
    });
  }
}

//! as HTMLElement <- null이 아니고 HTMLElement라고 해줬다
// 어플리케이션이 시작되면 새로운 App 클래스를 만들어서 루트에는 document에 querySelector를 이용해서
// Dom요수에 있는 document의 요소를 받아와서 그곳에 페이지를 추가해 주었다.
new App(document.querySelector('.document')! as HTMLElement);
