import React, { Component } from "react";
import CryptoBoyNFTImage from "../CryptoBoyNFTImage/CryptoBoyNFTImage";

class FormAndPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoPunkIndex: "",
      cryptoBunkImageURL: "/images/punks/punk-0001x8.png",
      cryptoBoyPrice: "",
      maxForThisRun: 0,
    };
  }
  Load_New_Image=(e)=>{
      this.state.punkid =e.target.value;
      var s = this.state.punkid+"";
      while (s.length < 4) s = "0" + s;


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
  callreservePunksForOwnerFromApp = (e) => {
    e.preventDefault();
    this.props.reservePunksForOwner(
      this.state.maxForThisRun
    );
  };
  render() {
    return (
      <div>
        <div className="card mt-1">
          <div className="card-body align-items-center d-flex justify-content-center">
            <h5>BakedPunks Marketplace [BETA]</h5>
          </div>
        </div>

        <img
            src={this.state.cryptoBunkImageURL}
            />


        <form onSubmit={this.callClaimPunkFromApp} className="pt-4 mt-1">
          <div className="row">
            <div className="col-md-12">
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
                    this.Load_New_Image(e)
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
            <div className="col-md-12">
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
                      this.Load_New_Image(e)
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
                  placeholder="Enter Price In BNB"
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
            <div className="col-md-12">
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
                    this.Load_New_Image(e)
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
                  placeholder="Enter Price In BNB"
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
                Buy Punk
              </button>
              </div>
            </div>
          </div>
        </form>
        <form onSubmit={this.callreservePunksForOwnerFromApp} className="pt-4 mt-1">
          <div className="row">
            <div className="col-md-12">
              <div>
                <label htmlFor="punkId">Run Amount</label>
                <input
                  required
                  type="number"
                  name="maxForThisRun"
                  id="maxForThisRun"
                  value={this.state.maxForThisRun}
                  className="form-control"
                  placeholder="Enter Max for This Run"
                  onChange={(e) =>
                    this.setState({ maxForThisRun: e.target.value })
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
                Reserve For Owner
              </button>
              </div>
            </div>
          </div>
        </form>

        Askweedman.io
      </div>
    );
  }
}

export default FormAndPreview;
