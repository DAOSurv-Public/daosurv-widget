import axiosInstance from "../index";
import styled from "styled-components";
import { useEffect, useState } from "react";
import {
  Button,
  YesButton,
  NoButton,
  AbsentButton,
  EtherscanButton,
  PrimaryButton,
  OutlinePrimaryButton,
} from "./Button";
import { Avatar } from "./Avatar";
import Drawer from "./Drawer";
import BigNumber from "bignumber.js";
import { maskWallet } from "../utils/maskAddress";
import assets from "../assets/assets.json";

const WidgetButton = styled.button`
  position: fixed;
  background: #ffffff;
  transform: rotate(-90deg);
  top: 40%;
  border-top-left-radius: 10px 10px;
  border-top-right-radius: 10px 10px;
  border: none;
  right: 0;
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
  align-items: center;
`;

const StyledToggleContentButton = styled(Button)`
  /* background: #ffffff; */
  background: ${(props) => (props.selected ? "white" : "transparent")};
  border-radius: 40px;
  color: ${(props) => (props.selected ? "#0028FF" : "white")};
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar src={image} />
          <p
            style={{
              marginLeft: "8px",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            {name}
          </p>
        </div>

        <div>
          <p>
            {isSent ? "sent" : "receive"}{" "}
            <span style={{ fontWeight: 700 }}>{valueUSD}</span> USD
          </p>
          <p>
            <span style={{ fontWeight: 700 }}>{value}&nbsp;</span>
            {symbol}
          </p>
        </div>
      </CardContentWrapper>
      <hr />
      <TransactionFooterWrapper>
        <TransactionPathText>
          from&nbsp;
          <span style={{ color: "#3F5DFF" }}>{maskWallet(from)}&nbsp;</span>
          to&nbsp;
          <span style={{ color: "#3F5DFF" }}>{maskWallet(to)}</span>
        </TransactionPathText>
        <a href={etherscanLink} target="_blank" rel="noreferrer">
          <EtherscanButton>Etherscan</EtherscanButton>
        </a>
      </TransactionFooterWrapper>
    </CardItem>
  );
};

const DescriptionWrapper = styled.div`
  background: #f5f5f5;
  border-radius: 16px;
  padding: 16px;
`;

const SurveyFooterWrapper = styled.div`
  display: flex;
  gap: 10px 10px;
  justify-content: space-between;
  background: "#F5F5F5";
`;

const Survey = (props) => {
  const { name, image, proposalId, proposalLink } = props;
  const [confirmState, setConfirmState] = useState(false);
  const handleVote = (vote) => {
    setConfirmState(true);
  };

  return (
    <CardItem>
      {!confirmState ? (
        <>
          <CardContentWrapper>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar src={image} />
              <p
                style={{
                  marginLeft: "8px",
                  fontSize: "16px",
                  fontWeight: 700,
                }}
              >
                {name}
              </p>
            </div>

            <div>
              <p>New Proposal</p>
              <p>
                ID&nbsp;<span style={{ fontWeight: 700 }}>{proposalId}</span>
              </p>
            </div>
          </CardContentWrapper>
          <DescriptionWrapper>
            <p> How would you vote?</p>
          </DescriptionWrapper>
          <hr />
          <CardContentWrapper>
            <p>How would you vote? </p>
            <a href={proposalLink} target="_blank" rel="noreferrer">
              <Button>
                Go to proposal{" "}
                <img
                  src="https://www.daosurv.xyz/static/images/arrow-up-right.svg"
                  width="24px"
                  alt="go-to-proposal"
                />
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
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src="/images/info.svg" alt="info" />
            <p>Confirm your vote</p>
          </div>
          <SurveyFooterWrapper>
            <PrimaryButton
              onClick={() => {
                setConfirmState(false);
              }}
            >
              Confirm
            </PrimaryButton>
            <OutlinePrimaryButton
              onClick={() => {
                setConfirmState(false);
              }}
            >
              Cancel
            </OutlinePrimaryButton>
          </SurveyFooterWrapper>
        </>
      )}
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

// const transactions = [
//   {
//     name: "DuDaoo",
//     image: "",
//     to: "0xaddadwwa",
//     from: "0xaddadwwa",
//     etherscanLink: "",
//     isSent: true,
//     valueUSD: 10000,
//     value: 0.01,
//     symbol: "ETH",
//   },
//   {
//     name: "DuDaoo",
//     image: "",
//     to: "0xaddadwwa",
//     from: "0xaddadwwa",
//     etherscanLink: "",
//     isSent: true,
//     valueUSD: 10000,
//     value: 0.01,
//     symbol: "ETH",
//   },
//   {
//     name: "DuDaoo",
//     image: "",
//     to: "0xaddadwwa",
//     from: "0xaddadwwa",
//     etherscanLink: "",
//     isSent: true,
//     valueUSD: 10000,
//     value: 0.01,
//     symbol: "ETH",
//   },
// ];

const Widget = (props) => {
  const { daoId } = props;
  const [isAlertContent, setIsAlertContent] = useState(true);
  const [transactions, setTransactions] = useState();
  useEffect(() => {
    fetchData();
  }, [daoId]);

  const fetchData = async () => {
    if (daoId) {
      console.log("fetch data of: ", daoId);
      const res = await axiosInstance.get(
        `https://api.daosurv.xyz/widget/alerts/${daoId}`
      );
      console.log("response", res);
      setTransactions(res.data.list);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <WidgetButton
        onClick={() => {
          setIsOpen(true);
        }}
        style={{
          display: isOpen ? "none" : "block",
        }}
      >
        <img
          src="https://www.daosurv.xyz/static/images/logo.svg"
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
            src="https://www.daosurv.xyz/static/images/logo.svg"
            width="100px"
            styled={{ margin: 0, padding: 0 }}
            alt="logo"
          />
          <img
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              setIsOpen(false);
            }}
            src="https://www.daosurv.xyz/static/images/arrow-right.svg"
            width="24px"
            alt="close"
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
              {transactions &&
                transactions.map((transaction, index) => {
                  return (
                    <Transaction
                      name={assets[daoId].name}
                      image={assets[daoId].image}
                      to={transaction.to}
                      from={transaction.from}
                      etherscanLink={`https://etherscan.io/tx/${transaction.etherscanLink}`}
                      isSent={transaction.isSent}
                      valueUSD={new BigNumber(transaction.valueUSD).toFixed(2)}
                      value={new BigNumber(transaction.value).toFixed(2)}
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
                    name={assets[daoId].name}
                    proposalId={surveyItem.proposalId}
                    proposalLink={surveyItem.proposalLink}
                    image={assets[daoId].image}
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
