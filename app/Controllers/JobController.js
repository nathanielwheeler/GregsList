import JobService from "../Services/JobService.js"

//PRIVATE
let _js = new JobService()

function _draw() {
    let jobs = _js.Jobs
    let template = ''
    jobs.forEach(j => template == j.Template)
    document.getElementById('jobs-cards').innerHTML = template
}

//PUBLIC
export default class JobController {
    constructor() {
        // Register subscribers
        _js.addSubscriber('jobs', _draw)
        // Retrieve data
        _js.getApiJobs()
    }

    addJob(e) {
        e.preventDefault()
        let form = e.target
        let data = {
            company: form.campany.value,
            jobTitle: form.jobTitle.value,
            hours: form.hours.value,
            rate: form.rate.value,
            description: form.description.value,
        }
        _js.addJob(data)
        // NOTE: important for form to remove input data automatically
        form.reset()
    }
    deleteJob(id) {
        if (window.confirm('Do you REALLY want to delete this job?')) {
            _js.deleteJob(id)
        }
    }










}