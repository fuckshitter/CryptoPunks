import React, { Component } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

class AllCryptoBoys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoPunkIndex: "",
      cryptoBunkImageURL: "/images/punks/punk-0001x8.png",
      cryptoBoyPrice: "",
      maxForThisRun: 0,
      cryptoBoys: null,
      currentPage: 0,
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
//    const history = useHistory();
//    history.push('/mint')
//    this.state.cryptoPunkIndex = e.target.value;
//    this.props.history.push("#/mint");
    //this.props.loadMorePunks();
  };

  render() {
    const elements = this.props.cryptoBoys;

    const items = []


    for (const [index, value] of elements.entries()) {

      var s = index+"";
      while (s.length < 4) s = "0" + s;
      var newImageUrl = '/images/punks/punk-' + s + '.png';
      var newLinkUrl = '/mint?punkid=' + index;
      items.push(<div class="card col-md-2" ><img src={newImageUrl} /><div class="card-body"> <h5 class="card-title">NO {index}</h5><p class="card-text"> OWNER {value}</p><Link to={newLinkUrl} className="nav-link" >Select</Link></div></div>)
//      items.push(<Link to={newLinkUrl} className="nav-link" ><img src={newImageUrl} /></Link>)
    }

    const pages = []
    const numberofPages = this.props.cryptoBoys.length/100;
        for (let j=0;j<numberofPages;j++) {
          var newLinkUrl = '/marketplace?pageid=' + j;
          pages[j] = <Link to={newLinkUrl} className="nav-link" >Select</Link>;
        }
    return (
      <div>
      <hr className="my-4" />
      <p className="lead">
        View All 10,000 BakedPunks. Current Page {this.state.currentPage} Punks {items.length}
        Pages  {pages}
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
              Load Punks
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
