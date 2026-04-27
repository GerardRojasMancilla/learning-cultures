import {Category} from "../domain/model/categories.entity.js";

export class CategoryAssembler{
    static toEntityFromResource(resource){
        return new Category({...resource});

    }

    static toEntitiesFromResponse(response){
        if(response.status !== 200){
            console.error(`${response.status} - ${response.statusText}`);
            return[];
        }

        let resource = response.data instanceof Array ? response.data
            : response.data ['categoires'];
        return resource.map(resource => this.toEntityFromResource(resource));
    }
}