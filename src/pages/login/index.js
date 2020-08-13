import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import * as actionCreator from './store/actionCreator';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if(loginStatus) {
      return(
      <Redirect to='/'></Redirect>
      )
    } else {
      return (
        <div>
          <input placeholder='buyerEmail' ref={(input) => {this.buyerEmail_l = input}}/>
          <input placeholder='password' type='password' ref={(input) => {this.password_l = input}} />
          <button onClick={() => this.props.login(this.buyerEmail_l, this.password_l)}>login</button>
          <p>don't have an account?</p>

          <input placeholder='buyerName' ref={(input) => {this.buyerName_s = input}}/>
          <input placeholder='buyerEmail' ref={(input) => {this.buyerEmail_s = input}}/>
          <input placeholder='password' type='password' ref={(input) => {this.password_s = input}} />
          <button onClick={() => this.props.signup(this.buyerName_s, this.buyerEmail_s,this.password_s)}>signup</button>
        </div>
      )
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.login.logStatus
})

const mapDispatch = (dispatch) => ({
  login(buyerEmail, password) {
    axios.post('/api/buyer/login', {
      buyerEmail: buyerEmail.value,
      password: password.value
    }).then((res) => {
      const result = res.data;
      const action = actionCreator.login(result);
      dispatch(action);
    })
  },

  signup(buyerName, buyerEmail, password) {
    axios.post('/api/buyer/signup', {
      buyerName: buyerName.value,
      buyerEmail: buyerEmail.value,
      password: password.value
    }).then((res) => {
      const result = res.data;
      const action = actionCreator.signup(result);
      dispatch(action);
    })
  }
})

export default connect(mapState, mapDispatch)(Login);