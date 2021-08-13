import React, { useState, useEffect } from "react";
import CryptoBoyNFTImage from "../CryptoBoyNFTImage/CryptoBoyNFTImage";
import MyCryptoBoyNFTDetails from "../MyCryptoBoyNFTDetails/MyCryptoBoyNFTDetails";
import Loading from "../Loading/Loading";

const MyCryptoBoys = ({
  accountAddress,
  cryptoBoys,
  balanceOf,
  totalTokensOwnedByAccount,
}) => {
  const [loading, setLoading] = useState(false);
  const [myCryptoBoys, setMyCryptoBoys] = useState([]);



  useEffect(() => {
    if (cryptoBoys.length !== 0) {
      if (cryptoBoys[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
    const my_crypto_boys = cryptoBoys.filter(
      (cryptoboy) => cryptoboy.currentOwner === accountAddress
    );
    setMyCryptoBoys(my_crypto_boys);
  }, [cryptoBoys]);

  callLoadMyPunks(() => {

  });
  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of Baked Punks remaining {totalTokensOwnedByAccount} / 10000
          </h5>
        </div>
      </div>
      <hr className="my-4" />
      <p className="lead">
          You Own {balanceOf}
      </p>
      <form onSubmit={this.callLoadMyPunks()} className="pt-4 mt-1">
        <div className="row">
          <div className="col-md-9">
            <div>
            <button
              id="mintBtn22"
              style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
              type="submit"
              className="btn mt-4 btn-block btn-outline-primary"
            >
              Load My Baked Punks
            </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyCryptoBoys;
