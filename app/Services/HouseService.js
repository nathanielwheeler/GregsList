import House from "../Models/House.js"

let _houseApi = axios.create({
    baseURL: 'http://bcw.sandbox.herokuapp.com/api/houses'
})

//PRIVATE
let _state = {
    houses: []
}

let _subscribers = {
    houses: []
}

function _setState(propName, data) {
    _state[propName] = data
    _subscribers[propName].forEach(fn => fn())
}

// PUBLIC
export default class HouseService {
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }

    get Houses() {
        return _state.houses.map(h => new House(h))
    }

    getApiHouses() {
        _houseApi.get()
            .then(res => {
                let housesData = res.data.data.map(h => new House(h))
                _setState('houses', housesData)
            })
            .catch(err => { console.error(err) })
    }



}