import React from 'react';

import Story1 from '../../image/story_1.jpg';
import Video_mp4 from '../../image/video2.mov';
// import Video_webm from '../image/video.webm';
export function Story() {
  return (
    <div>
      <div class="bg-video">
        <video class="bg-video__content" autoPlay muted loop>
          <source src={Video_mp4} type="video/mp4" />
          Browser not support for this video!!!
        </video>
      </div>
      <div className="story__row">
        <div class="story">
          <figure class="story__shape">
            <img src={Story1} alt="" class="story__img" />
            <figcaption class="story__caption">
              ngân lê
                            </figcaption>
          </figure>
          <div class="story__text">
            <h3 class="heading-tertiary">
              Giờ thì tôi có thể tự tin mọi lúc
            </h3>
            <p>
              "Tôi bị nám khá lâu,tôi đã thử nhiều cách khác nhau để chữa nám từ phương pháp dân gian đến sử dụng mỹ phẩm đặc trị, 
              nhưng tất cả đều không khả quan. Được người quen giới thiệu tôi tìm đến MiuMiu Spa và sử dụng công nghệ Laser Toning.
              Và giờ đây hoàn toàn tự tin với làn da mới của mình."
            </p>
          </div>
        </div>
      </div>
      <div className="story__row">
        <div class="story">
          <figure class="story__shape">
            <img src={Story1} alt="" class="story__img" />
            <figcaption class="story__caption">
              ngân lê
          </figcaption>
          </figure>
          <div class="story__text">
            <h3 class="heading-tertiary">
              Wow! my life is completely different now
          </h3>
            <p>
            "Thường xuyên makeup, bởi vậy tôi luôn  phải chăm sóc làn da của mình. 
            Biết đến Lotus Spa với các công nghệ chăm sóc da tiên tiến và phù hợp với làn da của người châu Á. 
            Sau 1 thời gian sử dụng liệu trình, làn da của tôi đã sáng mịn và tươi trẻ hơn rất nhiều.
            Tôi thấy rất hài lòng. Cảm ơn MiuMiu Spa rất nhiều!"
          </p>
          </div>

        </div>
      </div>
    </div>
  )
}