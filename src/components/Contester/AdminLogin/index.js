import React from 'react';
import Login from 'ant-design-pro/lib/Login';
import { Alert,Row,Col,Spin } from 'antd';
import {firebase} from "firebase.js";

const {UserName, Password, Captcha, Submit } = Login;
class AdminLogin extends React.Component {
  constructor(props){
    super(props);
    this.state={
      notice: '',
      visible:false,
    }
  };
  onSubmit = (err, values) => {
    this.setState({visible:true});
    firebase.auth().signInWithEmailAndPassword(values.username, values.password).then((u)=>{
    }).then((u)=>{        
      this.setState({visible:false,notice:''});
      this.props.nextStep();
    }).catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      if(errorCode){
        this.setState({notice:errorMessage,visible:false});
      }
    });

  };

  render() {
    const {notice,visible} = this.state;
    const alert=(
      <Alert description="Este necesar un con autorizat pentru accesarea consolei."
      type="warning"
      message="Aceasta este consola Contester."
      showIcon/>
    );
    return (

      <Row type="flex" justify="center">
      <Col xs={22} xl={19}>
      {notice ? <Alert type="error" description={notice}/> : alert}<br/>
      <Login
        onSubmit={this.onSubmit}>
          <UserName name="username" />
          <Password placeholder="password" name="password" />
          <Spin spinning={visible}/>
        <Submit>Login</Submit>
      </Login>
      </Col>
      </Row>
    );
  }
}

export default AdminLogin;