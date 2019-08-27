import HouseService from "../Services/HouseService.js"

//PRIVATE
let _hs = new HouseService()

function _draw() {
    let houses = _hs.Houses
}

//PUBLIC
export default class HouseController {
    constructor() {
        _hs.addSubscriber('houses', _draw)
        _hs.getApiHouses()
    }







}