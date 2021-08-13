import React, { Component } from "react";

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

  render() {
    const elements = this.props.cryptoBoys;

    const items = []

    for (const [index, value] of elements.entries()) {

      var s = index+"";
      while (s.length < 4) s = "0" + s;
      var newImageUrl = '/images/punks/punk-' + s + 'x4.png';
      items.push(<li key={index}><img src={newImageUrl} /> ID:{index} OWNER {value}</li>)
    }
    return (
      <div>
      <hr className="my-4" />
      <p className="lead">
        This is an NFT marketplace where you can get Baked Punks.
      </p>
      <hr className="my-4" />
      <p className="lead">
          Contract Address : 0xead759ec13b02c21ae87044f009ce97c1c72371f
      </p>
      <hr className="my-4" />
      <div>
        {items}
      </div>
      <form onSubmit={this.callLoadMorePunks} className="pt-4 mt-1">
        <div className="row">
          <div className="col-md-9">
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

        Askweedman.io
      </div>
    );
  }
}

export default AllCryptoBoys;
