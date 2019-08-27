export default class Job {
    constructor(data) {
        this._id = data._id
        this.company = data.company
        this.jobTitle = data.jobTitle
        this.hours = data.hours
        this.rate = data.rate
        this.description = data.description
    }

    get Template() {
        return `
        <div class='col-6 col-xl-4'>
            <div class='card bg-dark'>
                <div class='card-body'>
                    <h5 class='card-title'>${this.jobTitle} - ${this.company}</h5>
                    <p class='card-text'>$ ${this.rate} per hour, ${this.hours} per week</p>
                    <p class='card-text'>${this.description}</p>
                    <button class='btn btn-danger' onclick='app.controllers.jobCtrl.deleteJob("${this._id}")'>Delete</button>
                </div>
            </div>
        </div>
        `
    }
}