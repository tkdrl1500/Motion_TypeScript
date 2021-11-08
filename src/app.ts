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
import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';

class App {
  // page는 Component이면서 addChild를 할 수있는 Composable이 가능한 요소이다
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    // const image = new ImageComponent(
    //   'Image Title',
    //   'https://picsum.photos/600/300'
    // );
    // this.page.addChild(image);

    // const video = new VideoComponent(
    //   'Video Title',
    //   'https://www.youtube.com/embed/flOgJ65L3PY?list=RDfSdvaj4oqh8'
    // );
    // this.page.addChild(video);

    // const note = new NoteComponent('Note Title', 'Note Body');
    // this.page.addChild(note);

    // const todo = new TodoComponent('Todo Title', 'Todo Item');
    // this.page.addChild(todo);

    const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
    imageBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const inputSection = new MediaSectionInput();
      dialog.addChild(inputSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });

      dialog.setOnSubmitListener(() => {
        const image = new ImageComponent(inputSection.title, inputSection.url);
        this.page.addChild(image);
        dialog.removeFrom(dialogRoot);
      });
    });

    const videoBtn = document.querySelector('#new-video')! as HTMLButtonElement;
    videoBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const inputSection = new MediaSectionInput();
      dialog.addChild(inputSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });

      dialog.setOnSubmitListener(() => {
        const video = new VideoComponent(inputSection.title, inputSection.url);
        this.page.addChild(video);
        dialog.removeFrom(dialogRoot);
      });
    });

    const noteBtn = document.querySelector('#new-note')! as HTMLButtonElement;
    noteBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const inputSection = new TextSectionInput();
      dialog.addChild(inputSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });

      dialog.setOnSubmitListener(() => {
        const note = new NoteComponent(inputSection.title, inputSection.body);
        this.page.addChild(note);
        dialog.removeFrom(dialogRoot);
      });
    });

    const todoBtn = document.querySelector('#new-todo')! as HTMLButtonElement;
    todoBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const inputSection = new TextSectionInput();
      dialog.addChild(inputSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });

      dialog.setOnSubmitListener(() => {
        const todo = new TodoComponent(inputSection.title, inputSection.body);
        this.page.addChild(todo);
        dialog.removeFrom(dialogRoot);
      });
    });
  }
}

//! as HTMLElement <- null이 아니고 HTMLElement라고 해줬다
// 어플리케이션이 시작되면 새로운 App 클래스를 만들어서 루트에는 document에 querySelector를 이용해서
// Dom요수에 있는 document의 요소를 받아와서 그곳에 페이지를 추가해 주었다.
new App(document.querySelector('.document')! as HTMLElement, document.body);
