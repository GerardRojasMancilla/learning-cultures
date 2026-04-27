import {BaseApi} from "../../shared/infrastructure/base-api.js";
import {BaseEndpoint} from "../../shared/infrastructure/base-endpoint.js";

const categoriesEndPointPath = import.meta.env.VITE_CATEGORIES_ENDPOINT_PATH;

export class PublishingAPI extends BaseApi{
    #categoriesEndpoint;

    constructor() {
        super();
        this.#categoriesEndpoint = new BaseEndpoint(this, categoriesEndPointPath);
    }

    getCategories(){
        return this.#categoriesEndpoint.getAll();
    }

    getCategoryById(id){
        return this.#categoriesEndpoint.getById(id);
    }

    createCategory(resource){
        return this.#categoriesEndpoint.create(resource);
    }
    updateCategory(resource){
        return this.#categoriesEndpoint.update(id,resource);
    }
    deleteCategory(id){
        return this.#categoriesEndpoint.delete(id);
    }

}