import React from "react";
import ContestCard from "components/Contester/contest_card";
import { Col,Row, Input,Menu, Dropdown, Button, Layout,Divider,Tag } from "antd";
import firebase from "firebase.js";
const {SubMenu}=Menu;
const {Search}=Input;
const {Footer}= Layout;

class ContestPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      windowHeight: 0,
      windowWidth: 0,
      filterState: false,
      activeFilters: [],
      cList: [],
      value: '',
      results:[],
      stateId:[{value:"Concurs"},{value:"Olimpiadă"},{value:"Atele Activități"}],
    }
    this.loadData();
    this.handleTags = this.handleTags.bind(this);
    this.removeFilters = this.removeFilters.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }
  
  loadData(){
    const {stateId,cList}=this.state;
    let aux=[];
    var db=firebase.firestore();
    for(let i=0;i<=2;i++){
      db.collection(stateId[i].value).where("approved", "==", true)
      .get()
      .then((querySnapshot)=> {
          querySnapshot.forEach((doc)=> {
              aux.push(doc.data());
          });
          this.setState({cList:aux,results:aux});
      })
      .catch((error)=> {
          
      });
  
  }
}
  removeFilters=()=>{
    const{cList}=this.state;
    this.setState({filterState:false});
    this.setState({
      results:cList,
      activeFilters: [],
    });
  }

  handleTags(e){
    let query = e.key
    let filter = this.state.cList.filter((object) => {
      return object.category.toString().toLowerCase().includes(query.toString().toLowerCase()) || object.tags.toString().toLowerCase().includes(query.toString().toLowerCase())
    });
    let activeFiltersL = this.state.activeFilters
    activeFiltersL.push(e.key)

    this.setState({
      results:filter,
      filterState: true,
      activeFilters: activeFiltersL
    })

  }

  handleSearch(query){
  let filter = this.state.cList.filter((object) => {
    return object.name.toString().toLowerCase().includes(query.toString().toLowerCase()) || object.description.toString().toLowerCase().includes(query.toString().toLowerCase())
  });
  this.setState({
    results:filter,
  });
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
  const {cList,filterState,results, activeFilters}=this.state;
  const CancelButton=(
    <Button type="danger" shape="circle" icon="close" onClick={this.removeFilters} />  
  );
  const menu = (
    <Menu onClick={this.handleTags}>
      <SubMenu title="Tip Activitate">
      <Menu.Item key={'Concurs'}>Concurs</Menu.Item>
      <Menu.Item key={'Olimpiadă'}>Olimpiadă</Menu.Item>
      <Menu.Item key={'Alte Activități'}>Alte Activități</Menu.Item>
      </SubMenu>
      <SubMenu title="Tag">
      <Menu.Item key={'Echipe'}>Echipe</Menu.Item>
      <Menu.Item key={'Software'}>Software</Menu.Item>
      <Menu.Item key={'IoT'}>IoT</Menu.Item>
      <Menu.Item key={'Video'}>Video</Menu.Item>
      <Menu.Item key={'Debate'}>Debate</Menu.Item>
      <Menu.Item key={'Cercetare Stiințifică'}>Cercetare Stiințifică</Menu.Item>
      <Menu.Item key={'Chimie'}>Chimie</Menu.Item>
      <Menu.Item key={'Matematică'}>Matematică</Menu.Item>
      <Menu.Item key={'Lb.Română'}>Lb.Română</Menu.Item>
      <Menu.Item key={'Fizică'}>Fizică</Menu.Item>
      <Menu.Item key={'Biologie'}>Biologie</Menu.Item>
      </SubMenu>
    </Menu>
  );
  if(this.state.windowWidth <= 950){
  return (
    
    <div>
      <Row justify="center" type="flex">
        <Col span={16}>
      <Search onSearch={value => this.handleSearch(value)} placeholder="Cauta concurs"  />
      </Col><Col span={8}>
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button>Filtre</Button>
      </Dropdown>{filterState ? CancelButton:""}
      </Col>
      {activeFilters.map(tag => (
              <Tag color={'grey'} key={tag}>{tag}</Tag>
                ))}
      </Row>
    <Row>
    {results.map((object,index)=>
          <Col xs={24} md={12} xl={8}>
            <ContestCard data={object}/>
          </Col>)}
    </Row>
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
  );}
  else{
    return (
    
      <div>
        <Row justify="center" type="flex">
          <Col span={16}>
        <Search onSearch={value => this.handleSearch(value)} placeholder="Cauta concurs"  />
        </Col><Col span={8}>
        <Dropdown overlay={menu} placement="bottomCenter">
          <Button>Filtre</Button>
        </Dropdown>{filterState ? CancelButton:""}
        </Col>
        {activeFilters.map(tag => (
              <Tag color={'grey'} key={tag}>{tag}</Tag>
                ))}
        </Row>
      <Row>
      {results.map((object,index)=>
            <Col xs={24} md={12} xl={8}>
              <ContestCard data={object}/>
            </Col>)}
      </Row>
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
                      Contact: info.contester@gmail.com
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
    );
  }
  }
};

export default ContestPage;
