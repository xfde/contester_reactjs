import React from "react";
import { Parallax} from 'react-parallax';
import { Button,Row,Col, Typography } from 'antd';
const {Title}=Typography;

const ParallaxComp =()=> (
<div>
  <Parallax
    blur={2}
    bgImage={require('assets/images/cover.jpg')}
    bgImageAlt="Background"
    strength={300}>
  <Row  type="flex" align="middle" style={{ height: "33em",paddingInlineStart: "20px" }}>
    <Col>
    <Title level={2} style={{color:"white"}}><br/>
      Contester 
    </Title>
    <Title level={4} style={{color:"white"}} >
    &#x25BB; O soluție simplă pentru stimularea implicării elevilor în activități extrașcolare
    </Title>
    <br/><br/>
    <Button type={"primary"}><a href="/despre">
                Află mai multe
              </a></Button>
    <br/>
    </Col>
    </Row>  
  </Parallax>
  </div>
);
export default ParallaxComp;
