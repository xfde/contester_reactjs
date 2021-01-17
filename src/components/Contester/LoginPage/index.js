import React from 'react';
import {firebase} from "firebase.js";
import {Button,Icon, Alert,Card,Row,Layout} from "antd";
import {ToastsContainer, ToastsStore} from 'react-toasts';
const CardStyle = {
  backgroundColor: "rgba(51, 51, 51, 1)"
};
class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      ToastsStore,
    }
  };
  handleGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(
      (result)=>{
        var token = result.credential.accessToken;
        var user = result.user;
         this.props.nextStep();
      }).catch((error)=>{
        this.state.ToastsStore.error(error.message,6500);
      });
         
  }
  handleFaceBook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(
      (result)=>{
        var token = result.credential.accessToken;
        var user = result.user;
         this.props.nextStep();
      }).catch((error)=>{
        this.state.ToastsStore.error(error.message,6500);
      });
  }
  render() {
    
    
    return (
    <div>
      <ToastsContainer store={this.state.ToastsStore}/>
    <Card style={CardStyle}>
      <Alert style={{color:"black"}}
          message="Notă privind înregistrarea concursurilor"
          description="Pentru a adouga un concurs este necesară înregistrarea. Din motive de securitate și ușurință a verificării autenticității surselor, încurajăm înregistrarea cu serviciile Google sau Facebook. Concursurile vor fi supuse unui proces de verificare anterior publicării."
          type="warning"
          showIcon
          banner
      />
      <br/>
      <Row justify="center" type="flex">
      <Button onClick={()=>{this.handleGoogle()}}><Icon type="google" />Continuă cu contul Google</Button>
      <Button onClick={()=>{this.handleFaceBook()}}><Icon type="facebook" />Continuă cu contul Facebook</Button>
      </Row>
    </Card>
    </div>
    );
  }
}
 
export default LoginPage;