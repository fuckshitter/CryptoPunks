import React from "react";
import metamaskIcon from "./metamask.svg";

const ConnectToMetamask = ({ connectToMetamask }) => {
  return (
    <div className="jumbotron">
      <h1 className="display-5">
        Baked Punks NFT Marketplace
      </h1>
      <p className="lead">
        This is an NFT marketplace where you can claim your Baked Punks.
      </p>
      <hr className="my-4" />
      <p className="lead">
          Contract Address : 0xead759ec13b02c21ae87044f009ce97c1c72371f
      </p>
      <hr className="my-4" />
      <button
        onClick={connectToMetamask}
        className="btn btn-primary d-flex align-items-center"
        style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
      >
        Connect Metamask{" "}
        <img
          src={metamaskIcon}
          alt="metamask-icon"
          style={{ width: "2rem", marginLeft: "0.5rem" }}
        />
      </button>
    </div>
  );
};

export default ConnectToMetamask;
