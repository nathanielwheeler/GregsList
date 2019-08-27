import HouseService from "../Services/HouseService.js"

//PRIVATE
let _hs = new HouseService()

function _draw() {
    let houses = _hs.Houses
    let template = ''
    houses.forEach(h => template += h.Template)
    document.getElementById('houses-cards').innerHTML = template
}

//PUBLIC
export default class HouseController {
    constructor() {
        _hs.addSubscriber('houses', _draw)
        _hs.getApiHouses()
    }







}