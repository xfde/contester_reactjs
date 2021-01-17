import React from "react";
import AdminLogin from "components/Contester/AdminLogin";
import ContestPageP from "components/Contester/ContestPage";
class AboutPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      step:1,
    }
  }
  nextStep=()=>{
    const{step}=this.state;
    this.setState({
      step: step + 1,
    });
  }
  render(){

    const{step}=this.state;
    switch(step){
        case 1:
          return (<AdminLogin nextStep={this.nextStep}/>);
        case 2:
          return (<ContestPageP/>);
        default:
            return (<AdminLogin nextStep={this.nextStep}/>);
  }
  }
};

export default AboutPage;
