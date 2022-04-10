export const maskWallet = (address) => {
  const trimAddr = address.startsWith("0x")
    ? `${address.slice(0, 5)}..`
    : address;
  console.log("trimAddr", trimAddr);
  return trimAddr;
};
