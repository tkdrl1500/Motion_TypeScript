import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(
      `<section class="video">
         <div class="player">
            <iframe
            class="video__iframe"
            width="642"
            height="361"
            src=""
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ></iframe>
        </div>
        <h3 class="video__title"></h3>
      </section>
      `
    );
    const iframe = this.element.querySelector(
      '.video__iframe'
    )! as HTMLIFrameElement;

    iframe.src = this.convertToEmbeddedURL(url);

    const titleElement = this.element.querySelector(
      '.video__title'
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  //input
  //https://www.youtube.com/watch?v=flOgJ65L3PY
  //https://youtu.be/flOgJ65L3PY
  //output
  //https://www.youtube.com/embed/flOgJ65L3PY?list=RDfSdvaj4oqh8
  // 정규표현식을 이용하여 ID를 가지고 오자 (Regex)
  private convertToEmbeddedURL(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    console.log(match);
    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
