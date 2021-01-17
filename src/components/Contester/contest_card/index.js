import React from 'react';
import {Col,Row, Avatar,Tag,Button,Card,Typography} from "antd";
const {Title, Paragraph,Text}=Typography;

const CardStyle={
  backgroundColor: 'rgba(51, 51, 51, 1)',
}
const TextArea={
  backgroundColor: 'rgba(62,67,71,1)',
  padding: 5,
}
class ContestCard extends React.Component {
  constructor(props){
    super(props);
    
  }
  render(){
    const {data}=this.props;
    const {tags}=data;
    var randomColor = require('randomcolor');
  return(
  <div>
  <Card style={CardStyle}>
  <Row>
    <Col span={24}>
      <Row>
        <Col xl={8} xs={9}>
          <Avatar shape="square" size={80} src={data.imageUrl}/>
        </Col>
        <Col xl={16} xs={15}>
          <Title level={4}>{data.name}</Title>
          <Row><Text style={{color: "white"}}>Categorie: </Text>&nbsp;{data.category}</Row>
          <Row><Text style={{color: "white"}}>Extra: </Text>&nbsp;{data.extra}</Row>
        </Col>
        
      </Row><br/>
      <Row>
      <Col xl={16} md={16} sm={16} xl={16}>
        <Text level={4} style={{color: "white"}}>Tags: </Text>
        {tags.map(tag => (
              <Tag color={randomColor({luminosity:"dark"})} key={tag}>{tag}</Tag>
                ))}
      </Col>
      <Col xl={8} ms={8} sm={8} xs={8}>
        <Text level={4} style={{color: "white"}}>Data: </Text>{data.date}
      </Col>
      </Row> 
        <Row>
          <Col span={24}>
              <Paragraph ellipsis={{ rows: 4, expandable: true }} style={TextArea}>
                {data.description}
              </Paragraph>
          </Col>
        </Row><Row>
          <Col xl={16} xs={12}>
            <Text style={{color: "white"}}>Organizator: </Text>{data.organizer}
          </Col>
          <Col xl={8} xs={12}>
          <a target="_blank" rel="noopener noreferrer" href={data.link}><Button type="primary">More Info</Button></a>
          </Col></Row>
            
    </Col>
  </Row>
  </Card>    
  </div>
  )}
}
 
export default ContestCard;