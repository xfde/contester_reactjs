import React from 'react';
import {Col,Row, Avatar,Modal, Button,Card,Typography,Tag} from "antd";
import firebase from "firebase.js";
const { confirm } = Modal;
const {Title, Paragraph,Text}=Typography;
const CardStyle={
  backgroundColor: 'rgba(51, 51, 51, 1)',
}
const TextArea={
  backgroundColor: 'rgba(62,67,71,1)',
  padding: 5,
}

class ContestCardV extends React.Component{
  constructor(props){
    super(props);
    this.state={
      deleteVisible: false,
      editVisible: false,
      approveVisible: false,
    }; 
  
  }
handleDelete(){
  this.setState({deleteVisible: true});
}
showConfirm=()=> {
  const {data,ToastsStore}=this.props;
  var db=firebase.firestore();
  confirm({
    title: 'Do you want to approve this contest?',
    content: 'By clicking ok, the contest will be approved for display publicly.',
    onOk() {  
      db.collection(data.category).doc(data.name).update({
        approved: true,
      })
      .then(()=> {
        ToastsStore.success("Concursul a fost aprobat!");
      });
    },
    onCancel() {
      ToastsStore.warning("Acțiunea a fost anulată.");
    },
  });
}
showDeleteConfirm=()=> {
  const {ToastsStore}=this.props;
  confirm({
    title: 'Are you sure you want to delete this contest?',
    content: 'This action is permanent and will erase the contest completly.',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      ToastsStore.success("Concursul a fost sters cu succes!");
    },
    onCancel() {
      ToastsStore.warning("Acțiunea a fost anulată.");
    },
  });
}
showEditConfirm=()=>{
  const {ToastsStore}=this.props;
  ToastsStore.error("Optiunea nu este disponibilă.");
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
  <Col span={16}>
    <Text level={4} style={{color: "white"}}>Tags: </Text>
    {tags.map(tag => (
          <Tag color={randomColor({luminosity:"dark"})} key={tag}>{tag}</Tag>
            ))}
  </Col>
  <Col span={8}>
    <Text level={4} style={{color: "white"}}>Data: </Text>{data.date}
  </Col>
  </Row> 
    <Row>
      <Col span={24}>
          <Paragraph style={TextArea}>
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
      Actions: &nbsp;<Button type="dashed">Edit</Button><Button onClick={this.showDeleteConfirm} type="danger">Delete</Button><Button onClick={this.showConfirm} style={{backgroundColor:"green", color:"white"}} >Approve</Button>
</Col>
</Row>
</Card>    
</div>
);
    };
}
export default ContestCardV;