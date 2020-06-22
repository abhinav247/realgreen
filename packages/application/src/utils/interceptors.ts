
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.withCredentials = true


// const defaults = {
//     baseURL: 'https://run.mocky.io/v3/',
//     responseType: 'json',
//     headers: {
//       'Content-Type': 'application/json'
//     }
// }

const axiosInstance = axios.create(
);

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
//   const experienceProps = getCookie('getsomecookie');
//   if (cookies) {
//     try {
//       const initialCookies = JSON.parse(
//         // Removing extra double quotes and backslashes
//         experienceProps.replace(/^"|"$/g, '').replace(/\\/g, ''),
//       );
//       config.headers['X-CSRF-TOKEN'] = initialCookies.csrfToken;
//     } catch (error) {
//       console.error('Cookie parse error: ', error);
//     }
//   }
   return config;
    
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => Promise.reject(error.response),
);

export default axiosInstance;
