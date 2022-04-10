import axiosInstance from "../index";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { IconBox } from "./IconBox";
import { Button, YesButton, NoButton, AbsentButton } from "./Button";
import { Item } from "./Item";
import { Avatar } from "./Avatar";
import Drawer from "./Drawer";
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  background: #fff;
  border-radius: 24px;
`;

const AvatarCard = styled.div`
  aspect-ratio: 1;
`;

const WidgetButton = styled.button`
  position: absolute;
  background: #ffffff;
  transform: rotate(-90deg);
  top: 40%;
  border-top-left-radius: 10px 10px;
  border-top-right-radius: 10px 10px;
  border: none;
  right: 0%;
  margin-right: -40px;
`;

const BlueLine = styled.div`
  background: #0028ff;
  min-width: 100px;
  min-height: 8px;
`;

const FlexBox = styled.div`
  display: flex;

  align-items: center;
`;

const MenuTitle = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: white;
`;

const CardItem = styled.div`
  background: #ffffff;
  filter: drop-shadow(0px 10px 15px rgba(15, 53, 255, 0.05));
  border-radius: 16px;
  padding: 16px;
`;

const CardContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TransactionFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EtherscanButton = () => {
  return (
    <Button>
      <img src="/images/etherscan-logo.svg" alt="etherscan" />
    </Button>
  );
};

const StyledToggleContentButton = styled(Button)`
  /* background: #ffffff; */
  background: ${(props) => (props.selected ? "white" : "transparent")};
  border-radius: 40px;
  color: ${(props) => (props.selected ? "black" : "white")};
  height: 48px;
  width: 90px;
  font-size: 16px;
`;

const ToggleButton = (props) => {
  const { selected, handleOnclick } = props;

  return (
    <FlexBox
      style={{
        borderRadius: "40px",
        width: "180px",
        height: "48px",
        justifyContent: "space-between",
        border: "2px solid white",
      }}
      onClick={handleOnclick}
    >
      <StyledToggleContentButton selected={selected}>
        Alert
      </StyledToggleContentButton>
      <StyledToggleContentButton selected={!selected}>
        Survey
      </StyledToggleContentButton>
    </FlexBox>
  );
};

const TransactionPathText = styled.p`
  //styleName: B3 Regular Display;
  font-size: 12px;
  font-weight: 400;
`;

const CardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 10px;
  padding: 32px;
  background: #f5f5f5;
`;

const Transaction = (props) => {
  const {
    name,
    image,
    to,
    from,
    etherscanLink,
    isSent,
    valueUSD,
    value,
    symbol,
  } = props;

  return (
    <CardItem>
      <CardContentWrapper>
        <div>
          <Avatar src={image} /> {name}
        </div>

        <div>
          <p>
            {isSent ? "sent" : "receive"} {valueUSD} USD
          </p>
          <p>
            <span>{value}&nbsp;</span>
            {symbol}
          </p>
        </div>
      </CardContentWrapper>
      <hr />
      <TransactionFooterWrapper>
        <TransactionPathText>
          from&nbsp;
          <span style={{ color: "#3F5DFF" }}>{from.slic(0, 4)}..&nbsp;</span>
          to&nbsp;
          <span style={{ color: "#3F5DFF" }}>{to.silce(0, 4)}..</span>
        </TransactionPathText>
        <a href={etherscanLink} target="_blank" rel="noreferrer">
          <EtherscanButton>Etherscan</EtherscanButton>
        </a>
      </TransactionFooterWrapper>
    </CardItem>
  );
};

const SurveyFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: "#F5F5F5";
`;

const Survey = (props) => {
  const { name, image, proposalId, proposalLink } = props;

  const handleVote = (vote) => {};

  return (
    <CardItem>
      <CardContentWrapper>
        <div>
          <Avatar src={image} /> {name}
        </div>

        <div>
          <p>New Proposal</p>
          <p>
            ID&nbsp;<span style={{ fontWeight: 700 }}>{proposalId}</span>
          </p>
        </div>
      </CardContentWrapper>
      <CardContentWrapper>
        <p>How would you vote? </p>
        <a href={proposalLink} target="_blank" rel="noreferrer">
          <Button>
            Go to proposal{" "}
            <img src="/images/arrow-up.svg" alt="go-to-proposal" />
          </Button>
        </a>
      </CardContentWrapper>
      <SurveyFooterWrapper>
        <YesButton
          onClick={() => {
            handleVote("yes");
          }}
        />
        <NoButton
          onClick={() => {
            handleVote("no");
          }}
        />
        <AbsentButton
          onClick={() => {
            handleVote("absent");
          }}
        />
      </SurveyFooterWrapper>
    </CardItem>
  );
};

const surveyData = [
  {
    name: "Do Dao",
    proposalId: "1234",
    proposalLink: "google.com",
    image: "",
  },
  {
    name: "Do Dao",
    proposalId: "1234",
    proposalLink: "google.com",
    image: "",
  },
  {
    name: "Do Dao",
    proposalId: "1234",
    proposalLink: "google.com",
    image: "",
  },
];

const transactions = [
  {
    name: "DuDaoo",
    image: "",
    to: "0xaddadwwa",
    from: "0xaddadwwa",
    etherscanLink: "",
    isSent: true,
    valueUSD: 10000,
    value: 0.01,
    symbol: "ETH",
  },
  {
    name: "DuDaoo",
    image: "",
    to: "0xaddadwwa",
    from: "0xaddadwwa",
    etherscanLink: "",
    isSent: true,
    valueUSD: 10000,
    value: 0.01,
    symbol: "ETH",
  },
  {
    name: "DuDaoo",
    image: "",
    to: "0xaddadwwa",
    from: "0xaddadwwa",
    etherscanLink: "",
    isSent: true,
    valueUSD: 10000,
    value: 0.01,
    symbol: "ETH",
  },
];

const Widget = (props) => {
  const [name, setName] = useState();
  const [isAlertContent, setIsAlertContent] = useState(true);
  useEffect(() => {
    test();
  }, []);

  const test = async () => {
    const res = await axiosInstance.get("people/1/");
    setName(res.data.name);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        minWidth: "100vh",
        minHeight: "100vh",
        backgroundColor: "red",
      }}
    >
      <WidgetButton
        onClick={() => {
          setIsOpen(true);
        }}
        style={{
          display: isOpen ? "none" : "block",
        }}
      >
        <img
          src="/logo.svg"
          width="100px"
          styled={{ margin: 0, padding: 0 }}
          alt="logo"
        />
        <BlueLine />
      </WidgetButton>

      <Drawer
        open={isOpen}
        position="right"
        onDismiss={() => {
          setIsOpen(false);
        }}
        backgroundColor="#FFF"
        size="432px"
      >
        <FlexBox
          style={{
            justifyContent: "space-between",
            padding: "32px",
          }}
        >
          <img
            src="/logo.svg"
            width="100px"
            styled={{ margin: 0, padding: 0 }}
            alt="logo"
          />
        </FlexBox>
        <FlexBox
          style={{
            backgroundColor: "#0028FF",
            padding: "8px 32px",
            height: "64px",
            justifyContent: "space-between",
          }}
        >
          <MenuTitle>Feed</MenuTitle>
          <ToggleButton
            selected={isAlertContent}
            handleOnclick={() => {
              setIsAlertContent(!isAlertContent);
            }}
          />
        </FlexBox>
        <CardListWrapper>
          {isAlertContent ? (
            <>
              {transactions.map((transaction, index) => {
                return (
                  <Transaction
                    name={transaction.name}
                    image={transaction.image}
                    to={transaction.to}
                    from={transaction.from}
                    etherscanLink={transaction.etherscanLink}
                    isSent={transaction.isSent}
                    valueUSD={transaction.valueUSD}
                    value={transaction.value}
                    symbol={transaction.symbol}
                  />
                );
              })}
            </>
          ) : (
            <>
              {surveyData.map((surveyItem, index) => {
                return (
                  <Survey
                    name={surveyItem.name}
                    proposalId={surveyItem.proposalId}
                    proposalLink={surveyItem.proposalLink}
                    image={surveyItem.image}
                  />
                );
              })}
            </>
          )}
        </CardListWrapper>
      </Drawer>
    </div>
  );
};

export default Widget;
