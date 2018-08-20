import React, { Component } from "react";

import Search from "./components/Search/index";
import LoadMore from "./components/LoadMore/index";
import GifItemList from "../../components/GifItemList/index";
import { getPopularGifs, getGifsBySearch } from "../../services/api/giphy";
import { defaultPaging } from "../../configs/paging";

class Popular extends Component {
  state = {
    items: [],
    query: "",
    loading: {
      isPending: false,
      isError: false,
      isLoaded: false
    },
    paging: defaultPaging
  };

  componentDidMount = () => {
    this.loadItems();
  };

  onSearchChange = ({ query }) => {
    this.setState(() => ({ query }));
    this.resetPaging();
    this.loadItems(true);
  };

  loadItems = clearItems => {
    this.setPending();
    if (!this.state.query) {
      this.getPopular(clearItems);
      return;
    }
    this.getBySearch(clearItems);
  };

  resetPaging = () => {
    this.setState(() => ({ paging: defaultPaging }));
  };

  setItems = (items, clearItems) => {
    this.setState(prevState => ({
      items: clearItems ? [].concat(items) : prevState.items.concat(items),
      loading: {
        isPending: false,
        isLoaded: true
      }
    }));
  };

  setPending = () => {
    this.setState(() => ({
      loading: {
        isPending: true,
        isError: false,
        isLoaded: false
      }
    }));
  };

  setError = () => {
    this.setState(() => ({
      items: [],
      loading: {
        isPending: false,
        isError: true
      }
    }));
  };

  getPopular = clearItems => {
    getPopularGifs({ ...this.state.paging })
      .then(response => this.setItems(response.data.data, clearItems))
      .catch(() => this.setError());
  };

  getBySearch = clearItems => {
    getGifsBySearch({
      q: this.state.query,
      ...this.state.paging
    })
      .then(response => this.setItems(response.data.data, clearItems))
      .catch(() => this.setError());
  };

  loadMore = () => {
    this.setState(prevState => {
      const newPaging = {
        ...prevState.paging,
        offset: prevState.paging.offset + prevState.paging.limit
      };
      return { paging: newPaging };
    });
    this.loadItems(this.state.query);
  };

  render() {
    return (
      <div>
        <Search searchChange={this.onSearchChange} />
        <GifItemList items={this.state.items} />
        <LoadMore loadMore={this.loadMore} />
      </div>
    );
  }
}

export default Popular;
