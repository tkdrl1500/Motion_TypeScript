import { BaseComponent } from '../component.js';

// PageComponents에는 페이지에 대한 부모 컨테이너에 대한 요소들이 있으면 된다.
export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super(`<ul class='page'>This is PageComponent!</ul>`);
  }
}
