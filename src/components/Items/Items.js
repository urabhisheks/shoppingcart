import React, { Component } from 'react'
import axios from 'axios';
import Item from '../Item/Item';
import {connect} from 'react-redux';
import {apiData} from '../../actions/index';
import classes from './Items.module.css';
const URL = 'https://api.myjson.com/bins/qzuzi';

class Items extends Component{

  state={
    data:null
  }

  componentDidMount(){
    axios.get(URL)
      .then(res => res.data)
      .then(data => {
        console.log(data);
        this.setState({data});
        this.props.apiData(data);
      })
      .catch(err => console.error(err));
  }

  render() {
    console.log('data ', this.props.data)
    const {data} = this.props 
    return (
      <div className={classes.Category}>
        <div className={classes.Items}>
        {data && 
          data.length && 
          data.map(item => <Item key={item.id} item={item}/>)}
          </div>
      </div>
    )
  }
}

const mapStateToProps = ({cart}) => ({
  data: cart.data
});

export default connect(mapStateToProps, {apiData})(Items);