import axios from 'axios'
import data from '../../fakeData/fakedata.json'

// const baseURL = process.env.BaseURL;

const fetchData = axios.create({baseURL: data});

export default fetchData;