import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from 'react-date-picker';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/ro';

import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css' 

import './App.css';
import MediaCard from "./comp/card";
import database, { firebase } from "./firebase/firebase";
import { object } from 'prop-types';
import { timeout } from 'q';
import moment from 'moment';
import { relative } from 'path';
// import moment = require('../../../../AppData/Local/Microsoft/TypeScript/3.2/node_modules/moment/moment');













const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    position: 'absolute',
    zIndex: 1,
    top: 30,
    right: 50,

  },
  content: {
    margin: "100px 0px 0px 0px",
    padding: "0px 20px"
  },
  appBar: {
    top: 0,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paper: {
    position: 'relative',
    width: "350px",
    height: "450px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: 'calc(50% - 200px)',
    left: 'calc(50% - 200px)',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit *2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing.unit * 5,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 6,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },

  logoutbut:{
    position: "relative",
    marginRight: "1%",
    fontSize: "15px",
    color: "white",

  },
  addbutton:{
    position: "arelative",
    marginRight: "2%",

  },
  submitDialog:{
    position: relative,
    width: "200px",
    height: "170px",
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 6,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 300,
    },
  },

});


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      open: false,
      isEdit: false,
      editIndex: -1,
      olimpiade: [],
      filterolimpiade: [],
      concursuri: [],
      filterconcursuri: [],
      altele: [],
      filteraltele: [],
      id: '',
      organizator:'',
      descriere: '',
      col: '',
      link:'',
      data: new Date(),
      user: localStorage.getItem('user')
      
    }
    this.logout = this.logout.bind(this)
    this.loadData = this.loadData.bind(this)
    this.showDetails = this.showDetails.bind(this);
    this.loadData();
    // this.formatDate = this.formatDate.bind(this);
    this.handleChangeD= this.handleChangeD.bind(this);
    console.log(this.state, localStorage.getItem('user'));
  }
  logout() {
    firebase.auth().signOut();
    localStorage.setItem('auth', '');
    this.props.history.push('/loginpage')
  }

  loadData() {
    database.ref('olimpiade').on('value', (snapshot) => {
      const olimpiade = [];
      const userId =  localStorage.getItem('user');

      snapshot.forEach(function (item) {
        var itemVal = item.val();
        console.log("item",item)
        itemVal.key = item.key;
        // if (itemVal.user ===  userId) {
          olimpiade.push(itemVal);
        // }
      });
      this.setState({
        olimpiade: olimpiade,
        filterolimpiade: olimpiade
      });
    });
    database.ref('concursuri').on('value', (snapshot) => {
      const concursuri = [];
      const userId =  localStorage.getItem('user');

      snapshot.forEach(function (item) {
        var itemVal = item.val();
        console.log("item",item)
        itemVal.key = item.key;
        // if (itemVal.user ===  userId) {
          concursuri.push(itemVal);
        // }
      });
      this.setState({
        concursuri: concursuri,
        filterconcursuri: concursuri
      });
    });
    database.ref('altele').on('value', (snapshot) => {
      const altele = [];
      const userId =  localStorage.getItem('user');

      snapshot.forEach(function (item) {
        var itemVal = item.val();
        console.log("item",item)
        itemVal.key = item.key;
        // if (itemVal.user ===  userId) {
          altele.push(itemVal);
        // }
      });
      this.setState({
        altele: altele,
        filteraltele: altele
      });
    });
  }

  handleOpen = () => {
    this.setState({
      open: true,
      isEdit: false
    });
  };

  handleSubmit = (object,index) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>Are you sure?</h1>
            <p>You want to delete this ?</p>
            <Button variant="text" display="block" style={{ margin:'auto',display:'block', color:"red"  }} onClick={onClose}>No</Button>
            <Button variant="outlined" style={{ margin:'auto',display:'block', color:"blue"  }}  onClick={() => {
                this.triggerDelete(object,index)
                onClose()
            }}>Yes, Delete it!</Button>
          </div>
        )
      }
    })
  };

  handleClose = () => {
    this.setState({
      name: '',
      descriere: '',
      organizator: '',
      id: '',
      col: '',
      link: '',
      data: new Date(),
      open: false,
      isEdit: false
    });
  };

  hSelect()
  {
    // console.log("DateRaw:", this.state.data)
    var DateFortatter= new Date(this.state.data)
    // console.log("Date Fromatter:", DateFortatter)
    return DateFortatter
    
  }
  handleSave = () => {
    console.log("HandleSave");
    if (!this.state.isEdit) {
      if(this.state.id==='olimpiade'){
      var olimpiade = this.state.olimpiade;
      olimpiade.push({
        name: this.state.name,
        descriere: this.state.descriere,
        organizator: this.state.organizator,
        id: this.state.id,
        col: "#29b6f6",
        data: this.state.data,
        link: this.state.link
      });

      database.ref('olimpiade').push({
        name: this.state.name,
        col: "#29b6f6",
        descriere: this.state.descriere,
        organizator: this.state.organizator,
        id: this.state.id,
        link: this.state.link,
        data: this.state.data,
        user:  this.state.user
      }).then(() => {
        console.log('Data is saved!');
      }).catch((e) => {
        console.log('Failed.', e);
      });
      this.setState({
        open: false,
        name: '',
        descriere: '',
        organizator: '',
        id: '',
        col: '',
        link: '',
        data: '',
        olimpiade: olimpiade
      });
    }
    if(this.state.id==='concursuri'){
      var concursuri = this.state.concursuri;
      concursuri.push({
        name: this.state.name,
        descriere: this.state.descriere,
        organizator: this.state.organizator,
        id: this.state.id,
        col: "#00e676",
        data: this.state.data,
        link: this.state.link
      });

      database.ref('concursuri').push({
        name: this.state.name,
        descriere: this.state.descriere,
        organizator: this.state.organizator,
        id: this.state.id,
        col: "#00e676",
        link: this.state.link,
        data: this.state.data,
        user:  this.state.user
      }).then(() => {
        console.log('Data is saved!');
      }).catch((e) => {
        console.log('Failed.', e);
      });
      this.setState({
        open: false,
        name: '',
        descriere: '',
        id: '',
        col: '',
        organizator: '',
        link: '',
        data: '',
        concursuri: concursuri
      });
    }
    if(this.state.id==='altele'){
      var altele = this.state.altele;
      altele.push({
        name: this.state.name,
        descriere: this.state.descriere,
        organizator: this.state.organizator,
        id: this.state.id,
        col: "#ffe066",
        link: this.state.link,
        data: this.state.data
      });

      database.ref('altele').push({
        name: this.state.name,
        descriere: this.state.descriere,
        organizator: this.state.organizator,
        id: this.state.id,
        link: this.state.link,
        data: this.state.data,
        col: "#ffe066",
        user:  this.state.user
      }).then(() => {
        console.log('Data is saved!');
      }).catch((e) => {
        console.log('Failed.', e);
      });
      this.setState({
        open: false,
        name: '',
        descriere: '',
        id: '',
        col: '',
        organizator: '',
        link: '',
        data: '',
        altele: altele
      });
    }
  } 
    else {
      if(this.state.id==='olimpiade'){
      var olimpiade = this.state.olimpiade;
      olimpiade[this.state.editIndex] = {
        name: this.state.name,
        descriere: this.state.descriere,
        organizator: this.state.organizator,
        id: this.state.id,
        link: this.state.link,
        data: this.state.data,
        col: "#29b6f6",
        user:  this.state.user
      };
      database.ref('olimpiade/' + this.state.key).update({
        "name": this.state.name,
        "link": this.state.link,
        "data": this.state.data.toString(),
        "organizator": this.state.organizator,
        "id": this.state.id,
        "col": "#29b6f6",
        "descriere": this.state.descriere

      });
      this.setState({
        open: false,
        name: '',
        descriere: '',
        link: '',
        data: '',
        organizator: '',
        id: '',
        col: '',
        olimpiade: olimpiade,
        editIndex: -1,
        isEdit: false
      });
    }
    if(this.state.id==='concursuri'){
      var concursuri = this.state.concursuri;
      concursuri[this.state.editIndex] = {
        name: this.state.name,
        descriere: this.state.descriere,
        organizator: this.state.organizator,
        id: this.state.id,
        col: "#00e676",
        link: this.state.link,
        data: this.state.data,
        user:  this.state.user
      };
      database.ref('concursuri/' + this.state.key).update({
        "name": this.state.name,
        "link": this.state.link,
        "data": this.state.data.toString(),
        "organizator": this.state.organizator,
        "id": this.state.id,
        "col": "#00e676",
        "descriere": this.state.descriere

      });
      this.setState({
        open: false,
        name: '',
        descriere: '',
        link: '',
        data: '',
        organizator: '',
        id: '',
        col: '',
        concursuri: concursuri,
        editIndex: -1,
        isEdit: false
      });
    }
    if(this.state.id==='altele'){
     var altele = this.state.altele;
      altele[this.state.editIndex] = {
        name: this.state.name,
        descriere: this.state.descriere,
        organizator: this.state.organizator,
        id: this.state.id,
        col: "#ffe066",
        link: this.state.link,
        data: this.state.data,
        user:  this.state.user
      };
      database.ref('altele/' + this.state.key).update({
        "name": this.state.name,
        "link": this.state.link,
        "data": this.state.data,
        "organizator": this.state.organizator,
        "id": this.state.id,
        "col": "#ffe066",
        "descriere": this.state.descriere

      });
      this.setState({
        open: false,
        name: '',
        descriere: '',
        link: '',
        data: '',
        col: '',
        organizator: '',
        id: '',
        altele: altele,
        editIndex: -1,
        isEdit: false
      });
    }
  }

  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleChangeD(date){
    this.setState({
      data: date
    });
  }  

  showDetails = (e, object, index) => {
    console.log('object', object, this.state)


    this.setState({
      name: object.name,
      editIndex: index,
      key: object.key,
      link: object.link,
      data: object.data,
      id:object.id,
      organizator: object.organizator,
      descriere: object.descriere,
      isEdit: true,
      open: true
    });
    
  };


  triggerDelete(object, index) {

    if(object.id==='olimpiade'){
      console.log('Deleted olimpiada:',object);
    let olimpiade = [...this.state.olimpiade]
    olimpiade.splice(index, 1);
    this.setState({
      olimpiade: olimpiade
    })
    

    database.ref('olimpiade/' + object.key).remove(

    );
  }
  if(object.id==='concursuri'){
     console.log('Deleted concurs:',object);
    let concursuri = [...this.state.concursuri]
    concursuri.splice(index, 1);
    this.setState({
      concursuri: concursuri
    })
   

    database.ref('concursuri/' + object.key).remove(

    );
  }
  if(object.id==='altele'){ 
    console.log('Deleted altele:',object);
    let altele = [...this.state.altele]
    altele.splice(index, 1);
    this.setState({
      altele: altele
    })
   

    database.ref('altele/' + object.key).remove(

    );
  }

  }
  

  searchIdeas(query) {
    let filterolimpiade = this.state.olimpiade.filter((object) => {
      return object.name.toString().toLowerCase().includes(query.toString().toLowerCase()) || object.descriere.toString().toLowerCase().includes(query.toString().toLowerCase())
    });
    let filteraltele = this.state.altele.filter((object) => {
      return object.name.toString().toLowerCase().includes(query.toString().toLowerCase()) || object.descriere.toString().toLowerCase().includes(query.toString().toLowerCase())
    });
    let filterconcursuri = this.state.concursuri.filter((object) => {
      return object.name.toString().toLowerCase().includes(query.toString().toLowerCase()) || object.descriere.toString().toLowerCase().includes(query.toString().toLowerCase())
    });
    this.setState({
      filterolimpiade: filterolimpiade,
      filterconcursuri: filterconcursuri,
      filteraltele: filteraltele
    });
  }

  handleSearch(event) {
    this.searchIdeas(event.target.value)
  };

  componentDidMount() {
    const filterolimpiade = JSON.parse(localStorage.getItem('filterolimpiade')) || []
    this.setState({ filterolimpiade: filterolimpiade, olimpiade: filterolimpiade})
    const filterconcursuri = JSON.parse(localStorage.getItem('filterconcursuri')) || []
    this.setState({ filterconcursuri: filterconcursuri, concursuri: filterconcursuri})
    const filteraltele = JSON.parse(localStorage.getItem('filteraltele')) || []
    this.setState({ filteraltele: filteraltele, altele: filteraltele})
  }

  render() {
    const {
      classes
    } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar className={styles.toolbar}>
            <Typography variant="h6" color="inherit">
              Constester
            </Typography>
            <div className={classes.root}>
              <Toolbar>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    onKeyUp={this.handleSearch.bind(this)}
                  />
                </div>
              </Toolbar>
            </div> 
              
            <Button variant="contained" color="secondary" aria-label="Add" onClick={this.handleOpen} className={classes.addbutton} ><AddIcon /></Button>
            <Button onClick={this.logout} className={classes.logoutbut} >Logout</Button>
          </Toolbar>
      </AppBar>
      <div className={classes.content}>

      <p style={{fontSize:20}}>Olimpiade</p>
          <Divider variant="middle" style={{margin:15}}  />

        <Grid container spacing ={32}>
        {this.state.filterolimpiade.map((object,index) => 
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <MediaCard data={object}  clickFunction = {(e)=>{ this.showDetails(e,object, index)}} 
                                        confirmDelete={(e)=>{this.handleSubmit(object,index)}} 
                                      deleteFunction = {(e)=>{ e.stopPropagation();e.preventDefault();this.triggerDelete( object, index); }}/>
            </Grid>
          )}
        </Grid>

          <p style={{fontSize:20}}>Concursuri</p>
          <Divider variant="middle" style={{margin:15}}  />

        <Grid container spacing ={32}>
        {this.state.filterconcursuri.map((object,index) => 
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <MediaCard data={object}  clickFunction = {(e)=>{ this.showDetails(e,object, index)}} 
                                    confirmDelete={(e)=>{this.handleSubmit(object,index)}} 
                                  deleteFunction = {(e)=>{ e.stopPropagation();e.preventDefault();this.triggerDelete(object, index); }}/>
        </Grid>
      )}
        </Grid>
        
        <p style={{fontSize:20}}>Altele</p>
          <Divider variant="middle" style={{margin:15}}  />

        <Grid container spacing ={32}>
        {this.state.filteraltele.map((object,index) => 
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <MediaCard data={object}  clickFunction = {(e)=>{ this.showDetails(e,object, index)}}
                                    confirmDelete={(e)=>{this.handleSubmit(object,index)}} 
                                  deleteFunction = {(e)=>{ e.stopPropagation();e.preventDefault();this.triggerDelete(object, index); }}/>
        </Grid>
      )}
        </Grid>

      </div>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.open}
        onClose={this.handleClose}
        >
        <div  className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            {this.state.isEdit ? 'Editeaza Concursul' : 'Adauga Concursul'}
          </Typography>

          <FormControl className={classes.formControl} fullWidth={true}>
          
        <InputLabel htmlFor="object-select">Tipul Evenimentului</InputLabel>
        <Select
          value={this.state.id}
          onChange={this.handleChange('id')}
          input={<Input name="object" id="object-selecter" />}
        >
          <MenuItem value={"concursuri"}>Concurs</MenuItem>
          <MenuItem value={"olimpiade"}>Olimpiada</MenuItem>
          <MenuItem value={"altele"}>Altceva</MenuItem>
        </Select>
        {/* <FormHelperText>Alegeti tipul evenimentului.</FormHelperText> */}
      </FormControl>

          <form className={classes.container}  noValidate autoComplete="off">

            <TextField
              id="standard-name"
              label="Nume Concurs"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
              fullWidth={true}/>
              <TextField
              id="standard-name"
              label="Organizator"
              className={classes.textField}
              value={this.state.organizator}
              onChange={this.handleChange('organizator')}
              margin="normal"
              fullWidth={true}/>
            <TextField
              id="standard-multiline-flexible"
              label="Descriere"
              multiline
              rowsMax="3"
              value={this.state.descriere}
              onChange={this.handleChange('descriere')}
              className={classes.textField}
              margin="normal"
              fullWidth={true}/>
            <TextField
              id="standard-multiline-flexible"
              label="Link"
              multiline
              rowsMax="2"
              value={this.state.link}
              onChange={this.handleChange('link')}
              className={classes.textField}
              margin="normal"
              fullWidth={true}
              />
              <DatePicker 
                padding="5px"
                selected={this.hSelect()}
                onChange= {this.handleChangeD} 
                withPortal
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={60}
                // dateFormat="DD/MM/YYYY h:mm"
                timeCaption="Time"
                placeholderText="Click to select a date"
                />
                &nbsp;
              <Button variant="contained" style={{ margin:'auto',display:'block', color:"primary"  }} className={classes.container} onClick={this.handleSave}>Salveaza</Button>
          </form>
          
          
        </div>
      </Modal>
    </div>
    );
  }
}



export default withStyles(styles)(App);