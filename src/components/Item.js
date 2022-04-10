import styled from "styled-components";
const CloseButton = styled.img`
  cursor: pointer;
  margin-left: 8px;
  width: 12px;
  height: 12px;
`;

const ItemWrapper = styled.div`
  background-color: #fafafa;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = (props) => {
  const { item } = props;

  return (
    <ItemWrapper>
      {item}
      <CloseButton src="/images/close.png" />
    </ItemWrapper>
  );
};
