const cookie = require("./cookie");


function increaseScore(amount) {
    let score = cookie.getScore();
    let name = cookie.getName();
    cookie.setScore(score + amount);
    fetch("/api/increaseScore", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            name: name,
            amount: amount
        }
    }).then(response => response.json());
    let newamount = score + amount;
    console.log("increase score from " + score + " to " + newamount);
}

increaseScore(500);

module.exports = {
    increaseScore,
}
