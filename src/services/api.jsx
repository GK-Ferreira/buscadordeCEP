//importando axios para componente
import axios from 'axios';

//criando função do axios
const api = axios.create({
    
    //baseURl : é a URL que nunca muda como o nome já diz "URL base"
    baseURL:"https://viacep.com.br/ws/"
});

export default api;