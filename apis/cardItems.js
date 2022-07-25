import axios from 'axios';

const getItems = () => {
return axios.get("http://b3cab60b6b0a.ngrok.io/items")
            .then(response => {
                console.log('getting data from axios', response.data.result);
                console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'+typeof(response.data.result));
                return response.data.result;
                // this.setState({
                //     loading: false,
                //     axiosData: response.data
                // })
            })
            .catch(error => {
                console.log(error);
            });
            }
          
export default getItems;