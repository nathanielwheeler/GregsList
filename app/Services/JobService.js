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
            .then(res => {
                let jobsData = res.data.data.map(j => new Job(j))
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
                _state.jobs.push(new Job(res.data.data))
                _setState('jobs', _state.jobs)
            })
            .catch(err => {
                console.error(err)
            })
    }
    deleteJob(id) {
        _jobApi.delete(id)
            .then(res => {
                let index = _state.jobs.findIndex(job => job._id == id)
                _state.jobs.splice(index, 1)
                _setState('jobs', _state.jobs)
            })
            .catch(err => {
                console.error(err)
            })
    }






}