/**
 * DTO interface for defining type rules
 * for creating a `cake` object.
 */
export interface CreateCakeDTO {
    flavour: string,
    makingDate: Date,
    expirationDate: Date,
    ingredients: Array<Map<string, number>>
}

/**
 * DTO interface for defining type rules
 * for updating a `cake` object.
 */
export interface UpdateCakeDTO {
    flavour: string,
    ingredients: Array<Map<string, number>>
}
