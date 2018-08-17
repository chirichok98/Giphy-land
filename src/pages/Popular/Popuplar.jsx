import React, { Component } from 'react';
import axios from 'axios';

import Search from './components/Search/index';
import LoadMore from './components/LoadMore/index';
import GifItemList from '../../components/GifItemList/index';
import { urls, API_KEY } from '../../assets/configs/giphyApi';
import { defaultPaging } from '../../assets/configs/paging';

class Popular extends Component {
  state = {
    items: [],
    query: '',
    loading: {
      isPending: false,
      isError: false,
      isLoaded: false
    },
    paging: defaultPaging
  }

  componentDidMount = () => {
    this.loadItems();
  }

  onSearchChange = ({ query }) => {
    this.setState(() => ({ query }));
    this.resetPaging();
    this.loadItems(true);
  }

  loadItems = (clearItems) => {
    this.setPending();
    if (!this.state.query) {
      this.getPopular(clearItems);
      return;
    }
    this.getBySearch(clearItems);
  }

  resetPaging = () => {
    this.setState(() => ({ paging: defaultPaging }));
  }

  setItems = (items, clearItems) => {
    this.setState((prevState) => ({
      items: clearItems ? [].concat(items) : prevState.items.concat(items),
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

  getPopular = (clearItems) => {
    axios.get(urls.popular, {
      params: {
        api_key: API_KEY,
        ...this.state.paging
      }
    }).then((response) => this.setItems(response.data.data, clearItems))
      .catch(() => this.setError());
  }

  getBySearch = (clearItems) => {
    axios.get(urls.search, {
      params: {
        api_key: API_KEY,
        q: this.state.query,
        ...this.state.paging
      }
    }).then((response) => this.setItems(response.data.data, clearItems))
      .catch(() => this.setError());
  }

  loadMore = () => {
    this.setState((prevState) => {
      const newPaging = {
        ...prevState.paging,
        offset: prevState.paging.offset + prevState.paging.limit
      };
      return { paging: newPaging };
    })
    this.loadItems(this.state.query);
  }

  render() {
    return (
      <div>
        <Search searchChange={this.onSearchChange} />
        <GifItemList items={this.state.items} />
        <LoadMore loadMore={this.loadMore} />
      </div >
    );
  }
}

export default Popular;
