export default class House {
    constructor(data) {
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.year = data.year
        this.price = data.price
        this.description = data.description
    }

    get Template() {
        return `
            <div class="card col-6 col-xl-4 bg-dark">
                <div class="card-body">
                    <h5 class="card-title">${this.bedrooms} BR/ ${this.bathrooms} Ba, ${this.levels} Levels</h5>
                    <p class="card-text">Built in ${this.year}</p>
                    <p class="card-text">Going for ${this.price}</p>
                    <p class="card-text">${this.description}</p>
                </div>
            </div>
        `
    }
}