import { PartialType } from '@nestjs/mapped-types';
import { CreateCakeDTO } from './create-cake-dto';

/**
 * DTO interface for defining type rules
 * for updating a `cake` object.
 */
export class UpdateCakeDTO extends PartialType(CreateCakeDTO) {}
