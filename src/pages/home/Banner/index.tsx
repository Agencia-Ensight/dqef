import * as S from "./styles";

import SimpleImageSlider from "react-simple-image-slider";
import { MobileBanner } from "./components/MobileBanner";

const images = [
  { url: "images/slider-1.png" },
  { url: "images/slider-1.png" },
  { url: "images/slider-1.png" },
];

export function Banner() {
  return (
    <>
      <S.Banner>
        <SimpleImageSlider
          width={100}
          height={500}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </S.Banner>
      <MobileBanner />
    </>
  );
}
