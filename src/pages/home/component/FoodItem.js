import React from 'react';
import PropTypes from 'prop-types';
import {addQuantityByIndex} from '../store/actionCreator';
import { connect } from 'react-redux';

const FoodItem = (props) => {
 return (
    <div>
        {props.name} - {props.price}
        <button onClick={() =>{props.addOne(props.loginStatus, props.categoryIndex, props.itemIndex)}}> add to cart </button>
    </div>
 )
}


FoodItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    categoryIndex: PropTypes.number,
    itemIndex: PropTypes.number
}

const mapStateToProps = (state) => ({
    loginStatus: state.login.logStatus
  })
  
const mapDispatchToProps = (dispatch) => {
    return {
        addOne(loginStatus, categoryIndex, itemIndex) {
            if(loginStatus) {
                const action = addQuantityByIndex(categoryIndex, itemIndex);
                dispatch(action);
            } else {
                alert('login first');
            }
            
        }
    }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(FoodItem);