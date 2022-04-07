import * as S from "./styles";

import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "images/slider-mobile-1.png" },
  { url: "images/slider-mobile-1.png" },
  { url: "images/slider-mobile-1.png" },
];

export function MobileBanner() {
  return (
    <S.Banner>
      <SimpleImageSlider
        width={100}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </S.Banner>
  );
}
