import React from "react";
import {Card,Icon,Row, Col} from "antd";
const IconWithTextCard = (props) => {
  const {icon, title, subTitle} = props;

  const pannelStyle ={
    backgroundColor: 'rgba(51, 51, 51, 1)',
  };
  return (
    <Card style={pannelStyle}>
      
        <Col span={24}>
        <Row style={{paddingBottom:0}}>
        <div className="gx-mr-lg-4 gx-mr-3">
        <Icon type={icon} 
             style={{fontSize: 50}}/>
        </div>
        </Row>
        <Row style={{paddingTop:0}}>
        <div className="gx-media-body">
          <h1 style={{color:"white"}} className="gx-fs-xxxl gx-font-weight-medium gx-mb-1">{title}</h1>
          <p className="gx-mb-0 gx-text-primary">{subTitle}</p>
        </div>
        </Row>
        </Col>
      
    </Card>
  );
};

export default IconWithTextCard;
