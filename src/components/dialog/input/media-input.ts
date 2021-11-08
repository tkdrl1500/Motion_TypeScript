import { BaseComponent } from '../../component.js';
import { MediaData } from '../dialog.js';

export class MediaSectionInput
  extends BaseComponent<HTMLElement>
  implements MediaData
{
  constructor() {
    super(`<div>
            <div class="form__container">
                <label for="title">Title</label>
                <input id="title" type="text" />
            </div>
            <div class="form__container">
                <label for="url">URL</label>
                <input id="url" type="text" />
            </div>
            </div>
        `);
  }

  // getter를 호출하는 시점에 URL, DOM 요소에 있는 URL을 읽어올 것이다
  // 사용자가 정보를 입력하고 Add 버튼을 누르면 컴포넌트에 있는 url이라는 geeter을 이용해서 입력된 URL을 읽어올 수 있다
  get title(): string {
    const element = this.element.querySelector('#title')! as HTMLInputElement;
    return element.value;
  }

  get url(): string {
    const element = this.element.querySelector('#url')! as HTMLInputElement;
    return element.value;
  }
}
