import axios from 'axios';

export const API_URL = 'https://new-backend.unistory.app/api';

const $api = axios.create({
  baseURL: API_URL
});

export default $api;
