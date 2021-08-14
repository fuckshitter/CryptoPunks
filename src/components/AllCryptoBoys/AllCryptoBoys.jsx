import React, { Component } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'

class AllCryptoBoys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoPunkIndex: "",
      cryptoBunkImageURL: "/images/punks/punk-0001x8.png",
      cryptoBoyPrice: "",
      maxForThisRun: 0,
      cryptoBoys: null,
    };
  }

  componentDidMount = async () => {
  //  await this.props.setMintBtnTimer();
  };
  callLoadMorePunks = (e) => {
    e.preventDefault();
    this.props.loadMorePunks();
  };
  callGoToPunk = (e) => {
    e.preventDefault();
    window.alert("Non-Ethereum browser detected. You should consider trying MetaMask! " + e.target.value);
    this.props.history.replace("#/mint");
    //this.props.loadMorePunks();
  };

  render() {
    const elements = this.props.cryptoBoys;

    const items = []


    for (const [index, value] of elements.entries()) {

      var s = index+"";
      while (s.length < 4) s = "0" + s;
      var newImageUrl = '/images/punks/punk-' + s + 'x4.png';
      items.push(<div class="card col-md-3" ><img src={newImageUrl} /><div class="card-body"> <h5 class="card-title">PUNK NO {index}</h5><p class="card-text"> PUNK OWNER {value}</p><button onClick={this.callGoToPunk} className="btn btn-success" value={index} >Select</button></div></div>)
    }

    return (
      <div>
      <hr className="my-4" />
      <p className="lead">
        View All 10,000 BakedPunks.
      </p>
      <hr className="my-4" />
      <p className="lead">
          Contract Address : 0xead759ec13b02c21ae87044f009ce97c1c72371f
      </p>
      <hr className="my-4" />
      <div className="row">
        {items}
      </div>
      <form onSubmit={this.callLoadMorePunks} className="pt-4 mt-1">
        <div className="row">
          <div className="col-md-12">
            <div>
            <button
              id="mintBtn22"
              style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
              type="submit"
              className="btn mt-4 btn-block btn-outline-primary"
            >
              Load More Punks
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

export default AllCryptoBoys;
