import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * Class for model rules
 * for creating a `cake` object.
 */

@Entity()
export class Cakes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    flavour: string;

    @Column()
    makingDate: Date;

    @Column()
    expirationDate: Date;

    @Column('json', { nullable: true })
    ingredients: Object;
}
