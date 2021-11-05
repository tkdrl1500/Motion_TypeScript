import { BaseComponent, Component } from '../component.js';

export interface Composable {
  addChild(child: Component): void;
}

// 아무것도 전달 받지 않고 아무것도 리턴하지 않고 단지 닫쳤다고 알려주기만 하는 콜백함수이다
type OnCloseListener = () => void;

interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnCloseListener): void;
}

type SectionContainerConstructor = {
  //생성자는 아무런 것도 받지 않는 생성자이고 호출이 되면 SectionContainer의 규격을 따라가는 어떤 클래스의 타입도 가능하다
  new (): SectionContainer;
};

//PageItemComponent는 setOnCloseListener는 꼭 구현해야 된다 close가 가능해야되기 때문이다
export class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements SectionContainer
{
  //PageItemComponent는 어디에 속해 있는지 모르기 때문에 외부로부터 전달받은 콜백함수를 호출해줘야 된다
  // 외부로 부터 받은 콜백함수를 closeListener 변수에 저장
  private closeListener?: OnCloseListener;
  constructor() {
    super(`<li class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__controls">
              <button class="close">&times;</button>
            </div>
          </li>`);
    const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener(); // closeListener가 있으면 closeListener를 호출
    };
  }
  addChild(child: Component) {
    const container = this.element.querySelector(
      '.page-item__body'
    )! as HTMLElement;
    child.attachTo(container);
  }
  //설정 할수 있는 외부 함수 만들기
  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}

// PageComponents에는 페이지에 대한 부모 컨테이너에 대한 요소들이 있으면 된다.
export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super(`<ul class='page'></ul>`);
  }

  addChild(section: Component) {
    const item = new this.pageItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
