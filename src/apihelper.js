import axios from 'axios';

const API = 'http://13.234.17.51:5000';

export const searchNearby = (lat, lng) => {
  console.log(lat, lng);
  return axios.get(`${API}/location/search?lat=${lat}&long=${lng}`);
};
