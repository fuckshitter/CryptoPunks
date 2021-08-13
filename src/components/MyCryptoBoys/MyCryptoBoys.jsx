import React, { useState, useEffect } from "react";
import CryptoBoyNFTImage from "../CryptoBoyNFTImage/CryptoBoyNFTImage";
import MyCryptoBoyNFTDetails from "../MyCryptoBoyNFTDetails/MyCryptoBoyNFTDetails";
import Loading from "../Loading/Loading";
import ReactPaginate from 'react-paginate';

const MyCryptoBoys = ({
  accountAddress,
  cryptoBoys,
  balanceOf,
  totalTokensOwnedByAccount,
  loadMorePunks,
}) => {
  const [loading, setLoading] = useState(false);
  const [myCryptoBoys, setMyCryptoBoys] = useState([]);
  //const [items, setItems] = useState([]);

  function onPressCard() {
    //Alert.alert('You selected the card!');
      window.alert('Loading Punks');
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
      items.push(<li key={index}><img src={newImageUrl} /> ID:{index}</li>)
    }
  }
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
          You Own {balanceOf} Punks
      </p>
      <div>
        {items}
      </div>

      <hr className="my-4" />
      Askweedman.io
    </div>
  );
};

export default MyCryptoBoys;
