import axios from "axios";

const api = "https://api.giphy.com/v1/gifs/";

const API_KEY = "IOr5aYglJXEQM19Z6diRub05v4WZuPFl";

const SEARCH_URL = `${api}search`;
const POPULAR_URL = `${api}trending`;
const RANDOM_URL = `${api}random`;

const sendRequest = (url, params) => {
	return axios.get(url, {
		params: {
			...params,
			api_key: API_KEY
		}
	});
};

const giphy = {
	popular: (params) => sendRequest(POPULAR_URL, params),
	search: (params) => sendRequest(SEARCH_URL, params),
	random: () => sendRequest(RANDOM_URL),
};

export default giphy;