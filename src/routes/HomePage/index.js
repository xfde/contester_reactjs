import React from "react";
import Testimonials from "components/Contester/Testimonials/";
import Parallax from "components/Contester/Parallax/Parallax.js"
import {Divider,Col,Layout,Row} from "antd";
import FaqComponent from "components/Contester/Faq/";
import ReactDOM from "react-dom";
import Stats from "components/Contester/Stats/";
const modalRoot = document.getElementById('root');

class HomePage extends React.Component{
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount(){
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount(){
    modalRoot.removeChild(this.el);
  }
  render(){
   
  return  ReactDOM.render(
    <div>
    <Parallax />
    <Divider/>
    <Col span={24}>
    <Stats/>
    <Testimonials/>    
    </Col>
    <FaqComponent/>
    </div> ,this.el
    );  

}
};
    
export default HomePage;
