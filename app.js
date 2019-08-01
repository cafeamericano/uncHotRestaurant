//Party constructor
function Party(phoneNumber, name, partySize) {
    this.phoneNumber = phoneNumber;
    this.name = name;
    this.partySize = partySize
    this.seated = false
}

//Create array
partyArr = []
//Create a sample parties
let smithParty = new Party('123-456-7890', 'Smith', 5)
let jonesParty = new Party('523-456-7890', 'Jones', 4)
let johnsonParty = new Party('823-456-7890', 'Johnson', 2)
let brownParty = new Party('923-456-7890', 'Brown', 3)
let markParty = new Party('453-456-7890', 'Mark', 8)
let donaldParty = new Party('893-456-7890', 'Donald', 7)

//Push partys into array
partyArr.push(smithParty)
partyArr.push(jonesParty)
partyArr.push(johnsonParty)
partyArr.push(brownParty)
partyArr.push(markParty)
partyArr.push(donaldParty)

//Determine who has a table and who does not
let seated = []
let notSeated = []
function tableSeater() {
    for (i = 0; i < partyArr.length; i++) {
        if (i < 5) {
            partyArr[i].seated = true;
            seated.push(partyArr[i])
        } else {
            partyArr[i].seated = false;
            notSeated.push(partyArr[i])
        }
    }
}

tableSeater()

//SERVER PORT NUMBER================================================================

let port = process.env.PORT || 8080

//REQUIREMENTS================================================================

var express = require('express')
var fs = require('fs')
var app = express()

//ROUTES================================================================

app.get('/', function (req, res) {
    res.send('home page')
});

app.get('/tables', function (req, res) {
    res.json(seated)
});

app.get('/waitlist', function (req, res) {
    res.json(notSeated)
});

//START SERVER================================================================

app.listen(port, function () {
    console.log(`Server listening on Port ${port}...`)
})

