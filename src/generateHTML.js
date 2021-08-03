//manager card
const newManagerCard = function (manger) {
    return `
    <div class="col-md-6 col-lg-4">
    <div class="card">
        <div class="card-header bg-light">
            <h2>${manager.name}</h2>
            <h3><i class="fas fa-mug-hot"></i> Manager</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office Number: <a href="tel: ${manager.officeNum}">${manager.officeNum}</a></li>
        </ul>
    </div>
    </div>
`
}

//engineer card
const newEngineerCard = function (engineer) {
    return `
    <div class="col-md-6 col-lg-4">
    <div class="card">
        <div class="card-header bg-light">
            <h2>${engineer.name}</h2>
            <h3><i class="fas fa-mug-hot"></i> engineer</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">Office Number: <a href="tel: ${engineer.gitHub}">${manager.gitHub}</a></li>
        </ul>
    </div>
    </div>
`
}

//intern card
const newInternCard = function (intern) {
    return `
    <div class="col-md-6 col-lg-4">
    <div class="card">
        <div class="card-header bg-light">
            <h2>${intern.name}</h2>
            <h3><i class="fas fa-mug-hot"></i> intern</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">Office Number: <a href="tel: ${intern.school}">${intern.school}</a></li>
        </ul>
    </div>
    </div>
`
}