import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers = localStorage.getItem("token");
