import * as S from "./styles";

import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "images/slider-mobile-1.png" },
  { url: "images/slider-mobile-2.png" },
  { url: "images/slider-mobile-3.png" },
  { url: "images/slider-mobile-4.png" },
];

export function MobileBanner() {
  return (
    <S.Banner>
      <SimpleImageSlider
        autoPlay={true}
        autoPlayDelay={3}
        width={100}
        height={300}
        images={images}
        showBullets={true}
        showNavs={false}
        style={{background: 'transparent'}}
      />
    </S.Banner>
  );
}
