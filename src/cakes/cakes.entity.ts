/**
* Class for model rules
* for creating a `cake` object.
*/

export class Cakes {
    id: number,
    flavour: string,
    makingDate: Date,
    expirationDate: Date,
    ingredients: Map<string, number>
}
