import React from "react";
import ContestCard from "components/Contester/contest_card_valid";
import { Col,Row } from "antd";
import firebase from "firebase.js";
import {ToastsContainer, ToastsStore} from 'react-toasts';

class ContestPageP extends React.Component {
  constructor(props){
    super(props);
    this.state={
      stateId:[{value:"Concurs"},{value:"Olimpiadă"},{value:"Atele Activități"}],
      cList: [],
      ToastsStore,
    }
    this.loadData();
  }
  loadData(){
    const {stateId}=this.state;
    let aux=[];
    var db=firebase.firestore();
    for(let i=0;i<=2;i++){
      db.collection(stateId[i].value).where("approved", "==", false)
      .get()
      .then((querySnapshot)=> {
          querySnapshot.forEach((doc)=> {
              aux.push(doc.data());
          });
          this.setState({cList:aux});
      })
      .catch((error)=> {
          
      });
  
  }
}
  render(){
    const {cList}=this.state;
  return (
    <div>
      {cList.map((object,index)=>
          <Col xs={24} md={12} xl={8}>
            <ContestCard ToastsStore={this.state.ToastsStore} data={object}/>
          </Col>)}
          <ToastsContainer store={this.state.ToastsStore}/>
    </div>
  );
  }
};

export default ContestPageP;
