import React from "react";

const AccountDetails = ({ accountAddress, accountBalance }) => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">BakedPunks NFT Marketplace</h1>
        <p className="lead">
          This is an NFT marketplace where you can get BakedPunks.
        </p>
        <hr className="my-4" />
        <p className="lead">
            Contract Address : 0xead759ec13b02c21ae87044f009ce97c1c72371f
        </p>
        <hr className="my-4" />
        <p className="lead">Account address :</p>
        <h4>{accountAddress}</h4>
        <p className="lead">Account balance :</p>
        <h4>{accountBalance} BNB</h4>
      </div>
    </div>
  );
};

export default AccountDetails;
