import React from "react";

const ContractNotDeployed = () => {
  return (
    <div className="jumbotron">
      <h3>BakedPunks Contract Not Deployed To This Network.</h3>
      <hr className="my-4" />
      <p className="lead">
        Connect Metamask to Binance running a custom RPC
      </p>
    </div>
  );
};

export default ContractNotDeployed;
