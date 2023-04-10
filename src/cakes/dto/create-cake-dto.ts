import { IsString, IsArray, IsDate, IsDateString } from 'class-validator';

/**
 * DTO interface for defining type rules
 * for creating a `cake` object.
 */
export class CreateCakeDTO {
    @IsString()
    readonly flavour: string;

    @IsDateString()
    readonly makingDate: Date;

    @IsDateString()
    readonly expirationDate: Date;

    @IsArray()
    readonly ingredients: Array<any>;
}
