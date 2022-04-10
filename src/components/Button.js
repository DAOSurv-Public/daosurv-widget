import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: center;
  background: #0028ff;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  border-radius: 16px;
  border: none;
  align-items: center;
`;
const StyledButton = styled.button`
  color: ${(props) => (props.color ? props.color : "white")};
  background: ${(props) => (props.background ? props.background : "black")};
  border-radius: 16px;
  border: none;
  height: 32px;
  width: 106px;
`;

export const PrimaryButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: #0028ff;
  border-radius: 16px;
  height: 32px;
  width: 106px;
`;

export const EtherscanButton = () => {
  return (
    <Button>
      <img src="/images/etherscan-logo.svg" alt="etherscan" />
    </Button>
  );
};

export const YesButton = (props) => {
  const { onClick } = props;

  return (
    <StyledButton onClick={onClick} color="#195C39" background="#BDDDCC">
      Yes
    </StyledButton>
  );
};

export const NoButton = (props) => {
  const { onClick } = props;

  return (
    <StyledButton onClick={onClick} color="#830000" background="#D9A2A2">
      No
    </StyledButton>
  );
};

export const AbsentButton = (props) => {
  const { onClick } = props;

  return (
    <StyledButton onClick={onClick} color="#484848" background="#DFDFDF">
      Absent
    </StyledButton>
  );
};
