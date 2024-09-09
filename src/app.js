const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Test response aafrom the web app')
})

app.get('/test', (req, res) => {
    const teststr = 'this is under /test route'
    res.send(teststr)
})

// define a router for GET request to /num
app.get('/num', (req, res) => {
    // generate a random nu mber between 10 an 100
    const nuim = Math.floor((Math.random() * 100) + 1)

    // send a response to the client with the reandom number
    res.send("a random number from the server is " + num)
})

app.set('view entine', 'ejs')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.render('home', { name: req.body.std_name, id: req.body.std_id})
})

app.post('/register', (req, res) => {
    console.log(req.body.std_name)
    console.log(req.body.std_id)

    // render the home view with the student' sname and id
    res.render('home', { name: req.body.std_name, id: req.body.std_id})
})

const calc_gpa = (grades, credits) => {
    let totalPts = 0
    let tc = 0

    grades.forEach((grade, idx) => {
        let gp = 0

        switch (grade) {
            case 'a':
                gp = 4
                break;

            case 'b':
                gp = 3
                break

            case 'c':
                gp = 2
                break

            case 'd':
                gp = 1

            default:
                gp = 0
        }

        totalPts += gp + credits[idx]
        tc += credits[idx]
    })

    return totalPts / tc;
}

app.post('/submit', (req, res) => {
    const name = req.body.name
    const id = req.body.id
    const grades = req.body.grades
    const credits = req.body.credits
    const gpa = calc_gpa(grades, credits)

    res.render('home', { name, id, gpa})
})
app.listen(8080, () => {
    console.log('app listening on port 8080')
})

