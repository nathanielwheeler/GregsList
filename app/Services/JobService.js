import Car from "../Models/Job.js"
import Job from "../Models/Job.js";

let _jobApi = axios.create({
    baseURL: 'http://bcw-sandbox.herokuapp.com/api/jobs'
})

//PRIVATE
let _state = {
    jobs: []
}

// methods to run when a given property in state changes
let _subscribers = {
    jobs: []
}

function _setState(propName, data) {
    // add the data to the state
    _state[propName] = data
    // run every subscriber function that is watching the data
    _subscribers[propName].forEach(fn => fn())
}

//PUBLIC
export default class JobService {
    //NOTE adds subscriber function based on property it is watching
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }

    get Jobs() {
        return _state.jobs.map(j => new Job(j))
    }

    getApiJobs() {
        _jobApi.get()
            .then(rest => {
                let jobsData = rest.data.data.map(j => new Job(j))
                _setState('jobs', jobsData)
            })
            .catch(err => {
                console.error(err)
            })
    }

    addJob(data) {
        // A post request, URLExtension and object data as input.
        _jobApi.post('', data)
            .then(res => {
                _state.jobs.push(res.data.data)
                _setState('cars', _state.cars)
            })
            .catch(err => {
                console.error(err)
            })
    }







}