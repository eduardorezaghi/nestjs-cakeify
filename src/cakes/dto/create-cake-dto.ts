import { IsString, IsArray, IsDate } from 'class-validator';

/**
 * DTO interface for defining type rules
 * for creating a `cake` object.
 */
export class CreateCakeDTO {
    @IsString()
    readonly flavour: string;

    @IsDate()
    readonly makingDate: Date;

    @IsDate()
    readonly expirationDate: Date;

    @IsArray()
    readonly ingredients: Array<any>;
}
