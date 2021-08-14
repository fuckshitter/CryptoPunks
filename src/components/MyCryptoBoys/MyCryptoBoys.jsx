import React, { useState, useEffect } from "react";
import CryptoBoyNFTImage from "../CryptoBoyNFTImage/CryptoBoyNFTImage";
import MyCryptoBoyNFTDetails from "../MyCryptoBoyNFTDetails/MyCryptoBoyNFTDetails";
import Loading from "../Loading/Loading";
import ReactPaginate from 'react-paginate';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

const MyCryptoBoys = ({
  accountAddress,
  cryptoBoys,
  balanceOf,
  selectedpunkid,
  totalTokensOwnedByAccount,
  loadMorePunks,
}) => {
  const [loading, setLoading] = useState(false);
  const [myCryptoBoys, setMyCryptoBoys] = useState([]);
  const [state, setState] = useState(0);
  //const [items, setItems] = useState([]);

  function onPressCard() {
    //Alert.alert('You selected the card!');
      window.alert('Loading Punks');
  }
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
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

  const elements = cryptoBoys;

  const items = []
//  const items = []

  for (const [index, value] of elements.entries()) {
    if(accountAddress == value){
          var s = index+"";
          while (s.length < 4) s = "0" + s;
          var newImageUrl = '/images/punks/punk-' + s + 'x4.png';
      items.push(<div class="card col-md-3" ><img src={newImageUrl} /><div class="card-body"> <h5 class="card-title">PUNK NO {index}</h5><p class="card-text"> PUNK OWNER {value}</p></div></div>)
    }
  }
  let query = useQuery();
  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of BakedPunks remaining {totalTokensOwnedByAccount} / 10000
          </h5>
        </div>
      </div>
        <Child name={query.get("punkid")} />
      <hr className="my-4" />
      <p className="lead">
          You Own {balanceOf} Punks
      </p>
      <div>
        <Child punkid={query.get("punkid")} />
      </div>
      <div className="row">
        {items}
      </div>

      <hr className="my-4" />
      Askweedman.io
    </div>
  );
  function Child({ punkid }) {
    if(punkid){
        selectedpunkid = punkid;
        //state.punkid  = selectedpunkid;
    }
    return (
      <div>
        {punkid ? (
          <h3>
            The <code>name</code> in the query string is &quot;{punkid} Logic :{selectedpunkid}
            &quot;
          </h3>
        ) : (
          <h3>There is no punkid in the query string </h3>
        )}
      </div>
    );
  }
};


export default MyCryptoBoys;
