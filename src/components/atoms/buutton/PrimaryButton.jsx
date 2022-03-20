import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

// styled.button`` はHTMLのタグに対してスタイルを適用
// styled(コンポーネント)`` は既存のコンポーネントに対してCSSを上書きする
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
