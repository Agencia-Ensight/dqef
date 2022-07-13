import * as S from "./styles";

import { BiHelpCircle } from "react-icons/bi";

function HelpButton() {
  return (
    <S.Anchor href="https://wa.me/message/V5ETOHOBOW2HD1" target="_blank">
      <BiHelpCircle size={18} />
      Ajuda
    </S.Anchor>
  );
}

export { HelpButton };
