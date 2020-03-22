import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6SDkMYgBzv3Vfr_a_7IALjRaGjksNial-IhYBIYsGDc'
    }

});