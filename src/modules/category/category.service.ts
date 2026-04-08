/*
    Papel service
      - CRUD Categoria
      - Lidar com regras de negócio atrelado apenas a esse modulo
*/

import Category from "./category.model.js";
import type {
    ICreateCategoryDTO,
    IUpdateCategoryDTO
} from "./category.types.js"

class CategoryService {


    public async create(data: ICreateCategoryDTO){
        const category = await Category.create({
            name: data.name,
            description: data.description ?? "",
            active: data.active ?? true
        })
        return category;
    }

    public async get(){
        return await Category.find();
    }

    public async update(id: string, data: IUpdateCategoryDTO){
        return await Category.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true,
        });
    }

    public async findById(id: string){
        return await Category.findById(id);
    }

    public async delete(id: string){
        Category.findByIdAndDelete(id);
    }
}

export default new CategoryService();