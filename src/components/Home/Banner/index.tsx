import SimpleImageSlider from "react-simple-image-slider";

import * as S from "./styles";
import { MobileBanner } from "./components/MobileBanner";
import { MdCenterFocusStrong } from "react-icons/md";

const images = [
  { url: "images/slider-1.png" },
  { url: "images/slider-2.png" },
  { url: "images/slider-3.png" },
  { url: "images/slider-4.png" },
];

function Banner() {
  return (
    <>
      <S.Banner>
        <SimpleImageSlider
          width={100}
          height={300}
          style={{backgroundPosition: "center !Important"}}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </S.Banner>
      <MobileBanner />
    </>
  );
}

export { Banner };
