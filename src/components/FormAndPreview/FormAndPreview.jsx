import React, { Component } from "react";
import CryptoBoyNFTImage from "../CryptoBoyNFTImage/CryptoBoyNFTImage";

class FormAndPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoPunkIndex: "",
      cryptoBunkImageURL: "/images/punks/punk-0001x8.png",
      cryptoBoyPrice: "",
    };
  }
  Load_New_Image=()=>{

      var s = this.state.punkid+"";
      while (s.length < 4) s = "0" + s;

      window.alert(
        "Changing Image" + s
      );
      var newImageUrl = '/images/punks/punk-' + s + 'x8.png';
      this.setState({
        cryptoBunkImageURL : newImageUrl

      })
    }

  componentDidMount = async () => {
    await this.props.setMintBtnTimer();
  };

  callClaimPunkFromApp = (e) => {
    e.preventDefault();
    this.props.claimPunk(
      this.state.punkid
    );
  };
  callMintMyNFTFromApp = (e) => {
    e.preventDefault();
    this.props.offerPunkForSale(
      this.state.punkid,
      this.state.cryptoBoyPrice
    );
  };
  callBuyPunkFromApp = (e) => {
    e.preventDefault();
    this.props.buyPunk(
      this.state.punkid,
      this.state.cryptoBoyPrice
    );
  };
  render() {
    return (
      <div>
        <div className="card mt-1">
          <div className="card-body align-items-center d-flex justify-content-center">
            <h5>Color Your Crypto Boy As You Want It To be!</h5>
          </div>
        </div>

        <img
            src={this.state.cryptoBunkImageURL}
            />
       <form onSubmit={this.Load_New_Image} className="pt-4 mt-1">
        <button
          id="mintBtn22"
          style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
          type="submit"
          className="btn mt-4 btn-block btn-outline-primary"
        >
        Load Punk
        </button>
      </form>
        <form onSubmit={this.callClaimPunkFromApp} className="pt-4 mt-1">
          <div className="row">
            <div className="col-md-9">
              <div>
                <label htmlFor="punkId">Punk ID</label>
                <input
                  required
                  type="number"
                  name="punkid"
                  id="punkid"
                  value={this.state.punkid}
                  className="form-control"
                  placeholder="Enter Punk Id"
                  onChange={(e) =>
                    this.setState({ punkid: e.target.value })
                  }
                />
              </div>
              <div>
              <button
                id="mintBtn22"
                style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
                type="submit"
                className="btn mt-4 btn-block btn-outline-primary"
              >
                Claim Punk
              </button>
              </div>
            </div>
          </div>
        </form>
        <form onSubmit={this.callMintMyNFTFromApp} className="pt-4 mt-1">
          <div className="row">
            <div className="col-md-9">
              <div>
                <label htmlFor="punkId">Punk ID</label>
                <input
                  required
                  type="number"
                  name="punkid"
                  id="punkid"
                  value={this.state.punkid}
                  className="form-control"
                  placeholder="Enter Punk Id"
                  onChange={(e) =>
                    this.setState({ punkid: e.target.value })
                  }
                />
              </div>
	      <div>
                <label htmlFor="punkid">Price</label>
                <input
                  required
                  type="number"
                  name="punkid"
                  id="punkid"
                  value={this.state.cryptoBoyPrice}
                  className="form-control"
                  placeholder="Enter Punk ID"
                  onChange={(e) =>
                    this.setState({ cryptoBoyPrice: e.target.value })
                  }
                />
              </div>
	      <div>
              <button
                id="mintBtn22"
                style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
                type="submit"
                className="btn mt-4 btn-block btn-outline-primary"
              >
                Offer to Sell Punk
              </button>
              </div>
            </div>
          </div>
        </form>
        <form onSubmit={this.callBuyPunkFromApp} className="pt-4 mt-1">
          <div className="row">
            <div className="col-md-9">
              <div>
                <label htmlFor="punkId">Punk ID</label>
                <input
                  required
                  type="number"
                  name="punkid"
                  id="punkid"
                  value={this.state.punkid}
                  className="form-control"
                  placeholder="Enter Punk Id"
                  onChange={(e) =>
                    this.setState({ punkid: e.target.value })
                  }
                />
              </div>
	      <div>
                <label htmlFor="price">Price</label>
                <input
                  required
                  type="number"
                  name="price"
                  id="cryptoBoyPrice"
                  value={this.state.cryptoBoyPrice}
                  className="form-control"
                  placeholder="Enter Price In Ξ"
                  onChange={(e) =>
                    this.setState({ cryptoBoyPrice: e.target.value })
                  }
                />
              </div>
              <div>
	      <button
                id="mintBtn22"
                style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
                type="submit"
                className="btn mt-4 btn-block btn-outline-primary"
              >
                Buy Crypto Punk
              </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default FormAndPreview;
