import React, { Component } from "react";

class AllCryptoBoys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoPunkIndex: "",
      cryptoBunkImageURL: "/images/punks/punk-0001x8.png",
      cryptoBoyPrice: "",
      maxForThisRun: 0,
    };
  }

  componentDidMount = async () => {
  //  await this.props.setMintBtnTimer();
  };


  render() {
    return (
      <div>


        Askweedman.io
      </div>
    );
  }
}

export default AllCryptoBoys;
