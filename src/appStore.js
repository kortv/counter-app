import {observable, action} from 'mobx';

const appStore =  new class AppState {

  @observable counter = 0;

  @action increment = () => {
    ++this.counter
  }
  @action decrement = () => {
    --this.counter
  }

}();

export default appStore;
