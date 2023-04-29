import axios from 'axios'

const fetchData = axios.create({ baseURL: "https://dev.codeleap.co.uk/careers/" });
export default fetchData;