
const employeeCards = (employeesInfo) => {
  
    let cardsArray = '';


    if (role === 'manager') {
        const officeNumber = employeesInfo.getmoreInfo();
    return `
        <div class = "col-4">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${employeesInfo.getName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                <p class="card-text">Number: ID: ${employeesInfo.getId}.</p>
                <a href="#" class="card-link">Email: ${officeNumber}</a>
                <a href="#" class="card-link">${employeesInfo.getEmail}</a>
                </div>
            </div>
        </div>
    `; 

    } else if (role === 'engineer') {
        const gitHub = employees.getmoreInfo();
        return `
        <div class = "col-4">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${employeesInfo.getName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                <p class="card-text">Number: ID: ${employeesInfo.getId}.</p>
                <a href="#" class="card-link">Email: ${gitHub}</a>
                <a href="#" class="card-link">${employeesInfo.getEmail}</a>
                </div>
            </div>
        </div>
        `;
    } else {
        const school = employees.getmoreInfo();
        return `
        <div class = "col-4">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${employeesInfo.getName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                <p class="card-text">Number: ID: ${employeesInfo.getId}.</p>
                <a href="#" class="card-link">Email: ${school}</a>
                <a href="#" class="card-link">${employeesInfo.getEmail}</a>
                </div>
            </div>
        </div>
        `; 
    }
    

}

const generateHTML = (htmlTemplate) => {
    ` 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <header>
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
            <img src="./assets/nav.png" width="30" height="30" class="d-inline-block align-top" alt="">
            Team Profile
            </a>
        </nav>
        </header>

        <main>
        <div class = "container">
            <div class = "row" id = "employee-cards">
            ${employeeCards(htmlTemplate)}
        </div>
        </main>
    </body>

    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    </html>
    `;
};

module.exports = generateHTML;