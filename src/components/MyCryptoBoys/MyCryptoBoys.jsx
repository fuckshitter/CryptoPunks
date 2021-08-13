import React, { useState, useEffect } from "react";
import CryptoBoyNFTImage from "../CryptoBoyNFTImage/CryptoBoyNFTImage";
import MyCryptoBoyNFTDetails from "../MyCryptoBoyNFTDetails/MyCryptoBoyNFTDetails";
import Loading from "../Loading/Loading";

class MyCryptoBoys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountAddress: "",
      cryptoBoys: "/images/punks/punk-0001x8.png",
      balanceOf: "",
      totalTokensOwnedByAccount: 0,
    };
  }


  const [loading, setLoading] = useState(false);
  const [myCryptoBoys, setMyCryptoBoys] = useState([]);



  
render() {
  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of Baked Punks remaining {this.state.totalTokensOwnedByAccount} / 10000
          </h5>
        </div>
      </div>
      <hr className="my-4" />
      <p className="lead">
          You Own {this.state.balanceOf}
      </p>
      <form onSubmit="#" className="pt-4 mt-1">
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
  }
}

export default MyCryptoBoys;
