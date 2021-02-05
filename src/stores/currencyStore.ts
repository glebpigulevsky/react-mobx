import { API_PATH, ACTION_STATUSES } from './../utils/constants';

import axios from 'axios';
import { makeAutoObservable } from 'mobx';

class Currencies {
  currentCurrencies: CurrrenciesResponse = null;
  error: Error = null;
  status: string = null;

  constructor() {
    makeAutoObservable(this);
  }

  setStatusPending() {
    this.status = ACTION_STATUSES.PENDING;
  }

  setStatusFulfilled() {
    this.status = ACTION_STATUSES.FULFILLED;
  }

  setStatusRejected() {
    this.status = ACTION_STATUSES.REJECTED;
  }

  getCurrencie() {
    this.setStatusPending();
    axios.get(API_PATH.BITCOIN_PRICE_API)
      .then(response => {
        this.setStatusFulfilled();
        this.currentCurrencies = {
          time: response.data.time,
          bpi: Object.entries(response.data.bpi).reduce((array, item) => array.concat(item.slice(1)), []),
        }
      })
      .catch(error => {
        this.setStatusRejected();
        this.error = error
      });
  }
}

const currencieStore = new Currencies();

export default currencieStore;