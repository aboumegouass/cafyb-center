import axios from 'axios'
//import { getCookie } from 'cookies-next'

export const axiosAPI = () => {
    //const token = getCookie('token-auth')

    return axios.create({
        baseURL: 'http://localhost/wordpress/wp-json/wp/v2',
        // headers: {
        //     Accept: 'application/json',
        //     Authorization: `Bearer ${token}`,
        //     'Accept-Language': 'ar',
        // },
    });
}