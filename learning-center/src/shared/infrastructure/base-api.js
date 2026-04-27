import axios from 'axios';

const platformApi = import.meta.env.VITE_LEARNING_PLATFORM_API_URL;

export class BaseApi{
    #http;

    constructor(){
        this.#http = axios.create({
            baseURL:platformApi,
            header: {
                'Content-Type': 'application/json',
                'Acces-Control-Allow-Origin': '*',
            }
        });
    }
    get http(){
        return this.#http;
    }
}

