export class BaseEndpoint {
    constructor(baseAPI, endpointPath){
        this.http = baseAPI.http;
        this.endpointPath = endpointPath;
    }

    getAll(){
        return this.http.get(this.endpointPath);
    }

    getById(id){
        return this.http.get(`${this.endpointPath}/${id}`);
    }
    create(resource){
        return this.http.post(this.endpointPath, resource);
    }

    update(id, resource){
        return this.http.put(`${this.endpointPath}/${id}`, resource);
    }

    delete(id){
        return this.http.delete(`${this.endpointPath}/${id}`);
    }

}