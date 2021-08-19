import React, { Component } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

class PunksForSale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoPunkIndex: "",
      cryptoBunkImageURL: "/images/punks/punk-0001x8.png",
      cryptoBoyPrice: "",
      maxForThisRun: 0,
      cryptoBoysForSale: null,
    };
  }

  componentDidMount = async () => {
  //  await this.props.setMintBtnTimer();
  };
  callLoadMorePunks = (e) => {
    e.preventDefault();
    this.props.loadPunksForSale();
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

    const elements = this.props.cryptoBoysForSale;
    //const mutatedElements = [...elements].sort((a, b) => a - b);
    const mutatedElements = [...elements] .map((el, i) => ({ index: i, price: el, })) .sort((a, b) => a.price - b.price);

//    let items = []

    const items = mutatedElements.map((value, i) => {
    //for (const [index, value] of mutatedElements.entries()) {
      const cprice = 0x00;
      const cvalue = value;
      if(cprice != cvalue){

      var s = index+"";
      while (s.length < 4) s = "0" + s;
      var newImageUrl = '/images/punks/punk-' + s + 'x8.png';
      var newLinkUrl = '/buypunk?punkid=' + index;
      items.push(<div class="card col-md-3" ><img src={newImageUrl} /><div class="card-body">{" "}<h5 class="card-title">NO {index}</h5><p class="card-text"> PRICE {value} BNB</p><Link to={newLinkUrl} className="nav-link" >BUY</Link></div></div>)
//      items.push(<Link to={newLinkUrl} className="nav-link" ><img src={newImageUrl} /></Link>)
      }
    }

  //  items.sort((a, b) => (a.price - b.price));



    return (
      <div class="container">
      <div className="row">
        {items}
      </div>

        <hr className="my-4" />
        Askweedman.io
      </div>
    );
  }
}

export default PunksForSale;
