import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {searchByName} from '../../actions/index';
import {connect} from 'react-redux';
import classes from './Search.module.css';

class Search extends Component{

  state={
    isActive:false,
    searchTerm:'',
  }

  handleClick =e => {
    this.setState({isActive:true});
  }
  handleChange = e => {
    this.setState({searchTerm: e.target.value}, ()=>this.props.searchByName(this.state.searchTerm))
  }
  render() {
    const {isActive} = this.state;

    return (
      <span>
      {!isActive && <FontAwesomeIcon style={{marginRight: '10px'}} icon={faSearch} onClick={this.handleClick}/>}
      {isActive && 
      <span>
        <input type='text' className={classes.Search} onChange={this.handleChange} placeholder='Search'/>
        <FontAwesomeIcon style={{marginRight: '10px'}} icon={faSearch} onClick={this.handleClick}/>
      </span>}
      </span>
    );
  }
}


export default connect(null, {searchByName})(Search);
