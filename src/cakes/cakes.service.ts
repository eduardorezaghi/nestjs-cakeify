import { Injectable } from '@nestjs/common';
import { CreateCakeDTO } from 'src/cakes/dto/create-cake-dto';
import { UpdateCakeDTO } from 'src/cakes/dto/update-cake-dto';
import { Cakes } from './entities/cakes.entity';

let now = new Date();

@Injectable()
export class CakesService {
    private cakes: Cakes[] = [
        {
            id: 1,
            flavour: "Red Velvet",
            makingDate: now,
            expirationDate: new Date(now.setDate(now.getDate() + 7)),
            ingredients: {
                "egg": 2,
                "flour cups": 2,
                "cocoa powder": 3,
                "butter": 3,
                "vanilla extract": 2
            }
        }
    ];

    findAll() {
        return this.cakes;
    }

    findOne(id: string) {
        return this.cakes.find(item => item.id === +id);
    }

    create(createCakeDTO: any) {
        this.cakes.push(createCakeDTO);
    }

    update(id: string, updateCakeDTO: UpdateCakeDTO) {
        const existingCake = this.findOne(id);
        if (existingCake) {
            // Update existing cake
        }
    }

    remove(id: string) {
        const cakeIndex = this.cakes.findIndex(item => item.id === +id);
        if (cakeIndex >= 0) {
            this.cakes.splice(cakeIndex, 1)
        }
    }
}
