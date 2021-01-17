import React from "react";
import FormComp from "components/Contester/Form";
import LoginPage from "components/Contester/LoginPage";
import {ToastsContainer, ToastsStore} from 'react-toasts';
class FormPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      step:1,
      ToastsStore,
    }

  };
  nextStep=()=>{
    const{step}=this.state;
    this.setState({
      step: step + 1,
    });
  }
  prevStep=()=>{
    const{step}=this.state;
    this.setState({
      step: step - 1,
    });
    window.scrollTo(0, 0);
  }
  render(){
    const{step}=this.state;
    switch(step){
        case 1:
          return (
            <div>
            <LoginPage nextStep={this.nextStep} />
            <ToastsContainer store={this.state.ToastsStore}/>
            </div>
          )
        case 2:
          return(

            <FormComp ToastsStore={this.state.ToastsStore} prevStep={this.prevStep} />
          )
      
    }
  };
  
};

export default FormPage;
