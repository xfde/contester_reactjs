import React from "react";
import {Row,Col,Layout,Icon, Divider,Input, Button} from "antd";
const text =(
  <span>Considerăm ca prin activități extrașcolare, care cuprind domenii și arii foarte mari, elevii își pot dezvolta anumite competențe și abilități necesare unei bune dezvoltări armonioase pentru o integrare în societate. 
  Acest tip de activități favorizeză dezvoltarea personală și profesională în domeniile de interes ale fiecărui elev, oferind oportunități valoroase prin care elevii pot acumula experiențe și cunoștințe noi.
  </span>
);
const text2="Datele despre concursuri și olimpiade nu au fost niciodată complet centralizate, îngrădind potențialul participării elevilor în cadrul acestora. ";

const text3= "Contester este o platformă ce își propune să promoveze în rândul tinerilor concursurile și activitățiile extrașcolare, oferind oportunități noi.\n\nPrin cadrul platformei web, elevii pot selecta domeniile de interes și obține informații despre concursurile active, iar prin aplicația de mobil,  aceștea beneficiază de opțiuni de personalizare, mementouri dar și posibilitatea de a-și găsii coechipieri pentru concursurile pe echipe."; 
const {Footer}=Layout;
const { Search } = Input;
class AboutPage extends React.Component {
constructor(props){
  super(props);
  this.state={
    windowHeight: 0,
    windowWidth: 0,
    value: '',
  }
  this.updateValue = this.updateValue.bind(this);
}
 imageSide=(src)=>{
   return(
        <Row gutter={32} style={{ marginBottom: "-1em" }}>
          <Col xl={20} md={20} sm={20} xs={20}>
            <img src={src} />
          </Col>
        </Row>
   );
} 
updateWindowDimension = () => {
  this.setState(
    {windowHeight: window.innerHeight,
      windowWidth: window.innerWidth}
  );
};

componentDidMount() {
  this.updateWindowDimension();
  window.addEventListener("resize", this.updateWindowDimension);
}

componentWillUnmount() {
  window.removeEventListener("resize", this.updateWindowDimension);
}
updateValue= ({ target: { value } }) => {
  this.setState({ value });
};
  render(){
    if(this.state.windowWidth <= 950){
  return (
    <div>
      <Row gutter={16} type="flex" align="middle">
        <Col xl={12} md={24} sm={12} xs={24}>
          <div style={{ marginLeft: "1.7em", marginRight: "1.7em" }}>
            <p
              style={{
                fontSize: "4em",
                color: "primary",
                margin: 0,
                marginBottom: "0.4em"
              }}
            >
              Poziție
            </p>
            <Col xl={12} md={12} sm={12} xs={24}>
           {this.imageSide("https://firebasestorage.googleapis.com/v0/b/contester-web.appspot.com/o/images%2Fundraw_profile_data_mk6k.svg?alt=media&token=61abb3c0-6888-4ad9-ac78-e3e58be3ea31")}
            </Col ><br/>
            <p
              style={{
                fontSize: "1.5em",
                color: "gray",
                textAlign: "justify",
                margin: 0,
                marginBottom: "0.4em"
              }}
            >
              {text}
            </p>
            <br />
          </div>
        </Col>
      </Row>
      <br/><br/>
      <Row gutter={16} type="flex" align="middle">
        <Col xl={12} md={12} sm={12} xs={24}>
          <div style={{ marginLeft: "1.7em", marginRight: "1.7em" }}>
            <p
              style={{
                fontSize: "1.5em",
                color: "gray",
                textAlign: "justify",
                margin: 0,
                marginBottom: "0.4em"
              }}
            >
              {text2}
            </p>
            <br />
          </div>
        </Col>
      </Row>
      <Row gutter={16} type="flex" align="middle">
        <Col xl={12} md={12} sm={12} xs={24}>
          <div style={{ marginLeft: "1.7em", marginRight: "1.7em" }}>
            <p
              style={{
                fontSize: "4em",
                color: "primary",
                margin: 0,
                marginBottom: "0.4em"
              }}
            >
              Obiective
            </p>
            <p
              style={{
                fontSize: "1.5em",
                color: "gray",
                textAlign: "justify",
                margin: 0,
                marginBottom: "0.4em"
              }}
            >
              {text3}
            </p>
            
          </div>
        </Col>
        <Col xl={12} md={12} sm={12} xs={24}> 
           {this.imageSide("https://firebasestorage.googleapis.com/v0/b/contester-web.appspot.com/o/images%2Fundraw_real-time_sync_o57k.svg?alt=media&token=967745ee-9655-4d4e-9cd5-eccba81a3956")}
        </Col>
      </Row><br/>
      <Footer style={{backgroundColor:"#333333"}}>
        <div className="gx-layout-footer-content">
                     Abonează-te și te notificăm când apar informații noi: 
                    <Row type="flex" align="middle"><Search placeholder="email" enterButton="Send" value={this.state.value || undefined} onChange={this.updateValue} onSearch={()=>{this.setState({value:''})}}/>
                  </Row>
                <br/>
                              
                <Col xl={10} md={24} sm={8} xs={24}>
                    Contact: info.contester@gmail.com
                </Col> <br/>
                <Row gutter={16} type="flex" align="middle">
                  <Col xl={10} md={12} sm={8} xs={12}>
                    Copyright Contester © 2019-2020
                  </Col>
                  <Col xl={4} md={10} sm={8} xs={10}>
                  <a href="/privacy"> Privacy Policy </a>
                  &#x7c;
                  <a href="/terms"> Terms of Use</a>
                  </Col>
                </Row>           
              </div>
        </Footer>
    </div>
  );
  }
  else{
    return (
      <div>
        <Row gutter={16} type="flex" align="middle">
          <Col xl={12} md={12} sm={12} xs={24}>
            
             {this.imageSide("https://firebasestorage.googleapis.com/v0/b/contester-web.appspot.com/o/images%2Fundraw_profile_data_mk6k.svg?alt=media&token=61abb3c0-6888-4ad9-ac78-e3e58be3ea31")}
          </Col>
          <Col xl={12} md={12} sm={12} xs={24}>
            <div style={{ marginLeft: "1.7em", marginRight: "1.7em" }}>
              <p
                style={{
                  fontSize: "4em",
                  color: "primary",
                  margin: 0,
                  marginBottom: "0.4em"
                }}
              >
                Poziție
              </p>
              <p
                style={{
                  fontSize: "1.5em",
                  color: "gray",
                  textAlign: "justify",
                  margin: 0,
                  marginBottom: "0.4em"
                }}
              >
                {text}
              </p>
              <br />
            </div>
          </Col>
        </Row>
        <br/><br/>
        <Row gutter={16} type="flex" align="middle">
          <Col xl={12} md={12} sm={12} xs={24}>
            <div style={{ marginLeft: "1.7em", marginRight: "1.7em" }}>
              <p
                style={{
                  fontSize: "1.5em",
                  color: "gray",
                  textAlign: "justify",
                  margin: 0,
                  marginBottom: "0.4em"
                }}
              >
                {text2}
              </p>
              <br />
            </div>
          </Col>
        </Row>
        <Row gutter={16} type="flex" align="middle">
          <Col xl={12} md={12} sm={12} xs={24}>
            <div style={{ marginLeft: "1.7em", marginRight: "1.7em" }}>
              <p
                style={{
                  fontSize: "4em",
                  color: "primary",
                  margin: 0,
                  marginBottom: "0.4em"
                }}
              >
                Obiective
              </p>
              <p
                style={{
                  fontSize: "1.5em",
                  color: "gray",
                  textAlign: "justify",
                  margin: 0,
                  marginBottom: "0.4em"
                }}
              >
                {text3}
              </p>
              <br />
            </div>
          </Col>
          <Col xl={12} md={12} sm={12} xs={24}> 
             {this.imageSide("https://firebasestorage.googleapis.com/v0/b/contester-web.appspot.com/o/images%2Fundraw_real-time_sync_o57k.svg?alt=media&token=967745ee-9655-4d4e-9cd5-eccba81a3956")}              
          </Col>
        </Row>
        <br/><br/>
        <Footer style={{backgroundColor:"#333333"}}>
        <div className="gx-layout-footer-content">
                
                  <Divider><Row gutter={16} type="flex" align="middle">
                     Abonează-te și te notificăm când apar informații noi: 
                     <Search placeholder="email" enterButton="Send" value={this.state.value || undefined} onChange={this.updateValue} onSearch={()=>{this.setState({value:''})}}/>
                  </Row></Divider>
                <br/>
                <Row gutter={16} type="flex" align="middle">
                  <Col xl={10} md={8} sm={8} xs={12}>
                    Copyright Contester © 2019-2020
                  </Col>
                  <Col xl={10} md={8} sm={8} xs={12}>
                    info.contester@gmail.com
                  </Col>
                  <Col xl={4} md={8} sm={8} xs={12}>
                  <a href="/privacy"> Privacy Policy </a>
                  &#x7c;
                  <a href="/terms"> Terms of Use</a>
                  </Col>
                </Row>           
              </div>
        </Footer>
      </div>
  );}
}
};

export default AboutPage;

    