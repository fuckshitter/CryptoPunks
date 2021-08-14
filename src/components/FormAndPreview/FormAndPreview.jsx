import React, { Component } from "react";
import CryptoBoyNFTImage from "../CryptoBoyNFTImage/CryptoBoyNFTImage";
import {useLocation} from "react-router-dom";
import queryString from 'query-string'
import { HashRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class FormAndPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoPunkIndex: "",
      cryptoBunkImageURL: "/images/punks/punk-0001x8.png",
      cryptoBoyPrice: "",
      maxForThisRun: 0,
      addressTo: "",
    };
  }

  handleQueryString = () => {
     // Parsing the query string
     // Using parse method
     let queries = queryString.parse(this.props.location.search)
     console.log(queries)
     this.setState(queries)
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
  calltransferPunkFromApp = (e) => {
    e.preventDefault();
    this.props.transferPunk(
      this.state.addressTo,
      this.state.punkid
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
            <button
              onClick={this.handleQueryString}
              className='btn btn-primary'>
              click me </button>

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
        <form onSubmit={this.calltransferPunkFromApp} className="pt-4 mt-1">
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
                <label htmlFor="punkId">Address To</label>
                <input
                  required
                  type="text"
                  name="addressTo"
                  id="addressTo"
                  value={this.state.addressTo}
                  className="form-control"
                  placeholder="Address To"
                  onChange={(e) =>
                    this.setState({ addressTo: e.target.value })
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
                Transfer Punk
              </button>
              </div>
            </div>
          </div>
        </form>

        <hr className="my-4" />
        Askweedman.io
      </div>
    );
  }
}

export default FormAndPreview;
