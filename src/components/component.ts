export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
}

/**
 * BaseComponent는 HTMLElement를 만드는 것을 캡슐화 한다
 */
export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T; // element는 외부에서 볼수 없고 이것을 상속하는 자식 클래스에서만 접근 가능하게 했다
  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }

  removeFrom(parent: HTMLElement) {
    if (parent !== this.element.parentElement) {
      throw new Error('Parent mismatch!');
    }
    parent.removeChild(this.element);
  }
}
