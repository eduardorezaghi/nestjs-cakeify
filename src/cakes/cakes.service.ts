import { Injectable } from '@nestjs/common';
import { CreateCakeDTO, UpdateCakeDTO } from 'src/dto';
import { Cakes } from './cakes.entity';

@Injectable()
export class CakesService {
    private cakes: Cakes[] = [
        {
            id: 1,
            flavour: "Red Velvet",
            makingDate: new Date(),
            expirationDate: new Date(new Date().getDate() * 7),
            ingredients: new Map()
                .set("egg", 2)
                .set("flour cups", 2)
                .set("cocoa powder", 3)
                .set("butter", 3) 
                .set("vanilla extract", 2) 
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
