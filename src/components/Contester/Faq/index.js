import React from "react";
import {Parallax} from "react-parallax";
import { Collapse,Icon, Col,Row} from 'antd';
const text = (
  <p style={{ paddingLeft: 24 }}>
    Contester este un agregator de olimpiade și concursuri școlare. Platforma are ca scop încurajarea elevilor de liceu să participe la activități extrașcolare promovând concursurile organizate de diferite companii / ong-uri. Prin stimularea participării elevilor la activități și concursuri, dorim să promovăm educația prin mijloace alterative.
  </p>
);
const text2 = (
  <p style={{ paddingLeft: 24 }}>
    Contester te ajută să găsești și monitorizezi concursuri și activități extrașcolare din aria proprie de interes. Avem în baza noastră de date peste 50 de concursuri active și saptămânal sunt adougate unele noi. Îți oferim informații verificate lucrând direct cu profesori și organizatorii concursurilor.
  </p>
);
const text3 = (
  <p style={{ paddingLeft: 24 }}>
    Platforma este creată de elevi în scopul promovării activităților extrașcolare și a educației alternative. Astfel, încurajăm pe oricine să contribuie la popularea portofoliului de concursuri publice. Concursurile introduse sunt verficate de persoane autorizate (incluzând profesori) și ulterior afșate în panoul principal. 
  </p>
);
const text4 = (
  <p style={{ paddingLeft: 24 }}>
    Încurajăm pe oricine să contribuie la popularea portofoliului de concursuri. Puteți introduce un nou concurs accesând formularul și înregistrându-vă cu un cont google sau facebook. Dacă doriți să intrați în contact cu noi, ne puteți lăsa un mesaj la adresa: info.contester@gmail.com
  </p>
);
const text5 = (
  <p style={{ paddingLeft: 24 }}>
    Dorim să oferim servicii profesioniste așa că veridicitatea datelor este importantă și tratată cu mare seriozitate de echipa noastră. Toate datele sunt verificate anterior publicării în panoul public de către persoane autorizate - elevi și profesori - desemnați pentru asigurarea corectitudinii datelor.
  </p>
);
const pannelStyle ={
  backgroundColor: 'rgba(51, 51, 51, 1)',
};
const { Panel } = Collapse;
const FaqComponent = () => (
  <Parallax
    blur={2}
    bgImage={require('assets/images/bkg_p.jpg')}
    bgImageAlt="Background"
    strength={200}>
      <br/><br/><br/>
    <Row type="flex" justify="center">
    <Col span={20}>
    <Row><Icon style={{fontSize: 30}} type="question-circle" />&nbsp;&nbsp;
    <h1 style={{color:"white"}}>Despre/FAQ</h1></Row><br/>
    <Collapse accordion bordered={false}>
    <Panel style={pannelStyle} header="Ce este Contester?" key="1">
     {text}
    </Panel>
    <Panel style={pannelStyle} header="Cu ce te poate ajuta?" key="2">
    {text2}
    </Panel>
    <Panel style={pannelStyle} header="Cum funcționează acest sistem?" key="3">
    {text3}
    </Panel>
    <Panel style={pannelStyle} header="Cum poți să contribui și tu?" key="4">
    {text4}
    </Panel>
    <Panel style={pannelStyle} header="Cine verifică întegritatea datelor?" key="5">
    {text5}
    </Panel>
    </Collapse>  
    </Col></Row>
    <br/><br/>
    <Row gutter={16} type="flex" align="middle">    
    <Col offset={1} xl={8} md={7} sm={7} xs={24}>
      Contact: info.contester@gmail.com
    </Col>
    <Col offset={1} xl={8} md={8} sm={8} xs={12}>
      Copyright Contester © 2019-2020
    </Col>
    <Col xl={4} md={7} sm={7} xs={10}>
    <a href="/privacy"> Privacy Policy </a>
     &#x7c;
    <a href="/terms"> Terms of Use</a>
    </Col></Row><br/>
  </Parallax>
);
export default FaqComponent;
