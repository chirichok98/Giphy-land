import React, { Component } from 'react';
import axios from 'axios';

import Search from '../../components/Search/index';
import List from '../../components/List/index';
import LoadMore from '../../components/LoadMore/index';
import { urls, API_KEY } from '../../assets/configs/giphyApi';
import { defaultPaging } from '../../assets/configs/paging';

class Popular extends Component {
  state = {
    items: [],
    loading: {
      isPending: false,
      isError: false,
      isLoaded: false
    },
    paging: defaultPaging
  }

  componentWillMount = () => {
    this.loadItems();
  }

  onSearchChange = ({ query }) => {
    this.resetPaging();
    this.loadItems(query);
  }

  loadItems = (query) => {
    this.setPending();
    if (!query) {
      this.getPopular();
      return;
    }
    this.getBySearch(query);
  }

  resetPaging = () => {
    this.setState(() => ({ paging: defaultPaging }));
  }

  setItems = (items) => {
    this.setState(() => ({
      items,
      loading: {
        isPending: false,
        isLoaded: true
      }
    }));
  }

  setPending = () => {
    this.setState(() => ({
      loading: {
        isPending: true,
        isError: false,
        isLoaded: false
      }
    }));
  }

  setError = () => {
    this.setState(() => ({
      items: [],
      loading: {
        isPending: false,
        isError: true
      }
    }));
  }

  getPopular = () => {
    axios.get(urls.popular, {
      params: {
        api_key: API_KEY,
        ...this.state.paging
      }
    }).then((response) => this.setItems(response.data.data))
      .catch(() => this.setError());
  }

  getBySearch = (query) => {
    axios.get(urls.search, {
      params: {
        api_key: API_KEY,
        q: query,
        ...this.state.paging
      }
    }).then((response) => this.setItems(response.data.data))
      .catch(() => this.setError());
  }

  loadMore = () => {
    
  }

  render() {
    return (
      <div>
        <Search searchChange={this.onSearchChange} />
        <List items={this.state.items} />
        <LoadMore loadMore={this.loadMore} />
      </div >
    );
  }
}

export default Popular;
