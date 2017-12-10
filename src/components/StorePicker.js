// let's go!
import React from 'react';
import { render } from 'react-dom';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  //constructor(){
  //  super();
  //  this.goToStore = this.goToStore.bind(this);
  //}
  goToStore(event) {
    event.preventDefault();
    console.log('URL Changed');
    //First Grab text from input
    const storeId = this.storeInput.value;
    //Second transition to store route
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}}/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}


export default StorePicker;
