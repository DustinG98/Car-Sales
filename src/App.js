import React from 'react';

import { connect } from 'react-redux'

import { addItem, removeItem } from './actions/index'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = props => {
  const { state, dispatch } = props;

  const removeFeature = item => {
    // dispatch an action here to remove an item
    dispatch(removeItem(item.id))
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    dispatch(addItem(item))
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} buyItem={buyItem}/>
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  state: state
})

export default connect(mapStateToProps)(App);
