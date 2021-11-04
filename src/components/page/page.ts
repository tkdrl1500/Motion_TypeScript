// PageComponents에는 페이지에 대한 부모 컨테이너에 대한 요소들이 있으면 된다.
export class PageComponent {
  private element: HTMLUListElement;

  constructor() {
    this.element = document.createElement('ul');
    this.element.setAttribute('class', 'page');
    this.element.textContent = 'This is PageComponent';
  }

  // attchTo라는 외부에서 사용할 수 있는 API를 만들었다.
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    // InsertPosition은 아무것도 전달하지 않으면 기본적으로 afterbegin이다

    //insertAdjacentElement는 특정 위치에서 노드를 삽입한다.
    parent.insertAdjacentElement(position, this.element);
  }
}
