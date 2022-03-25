function urname() {
    var name = prompt("What is your name?")
    return name
}
var name = greet(urname())
    function greet(a) {
    alert(`Hello, ${a}!`)

}

function ran_num() {
    var num2 = Math.floor(Math.random() * 10) + 1
    return num2
}

function ran_user() {
    var scorep = 0
    var draw = "y"
    alert("It's your turn first!")
    do {
        var num = ran_num() 
        scorep = scorep + num       
        alert(`You drew an ${num}, your number is now ${scorep}`)
        var draw = prompt(`Would you like to draw? y/n`)
    } while ((draw == "y") && (scorep < 20))
    return scorep
}


function ran_comp() {
    var scorec = 0
    alert("It's now the computer's turn!")
    do {
        var num = ran_num()
        scorec = scorec + num
        alert(`${num} is the new number, ${scorec} is the computer's score.`)
    } while (scorec < 16)
    return scorec 
}



function compare(d, e) {
    if ((d >= 20) && (e >= 20)) {
        alert("No one wins.")
    } else if (d == 20) {
        alert("User loses, computer wins.")
    } else if (e == 20) {
        alert("Computer loses, user wins.")
    } else if (d <= 20) {
        alert("User wins!")
    } else if (e <= 20) {
        alert("Computer wins!")
    }
}


function game() {
    var rannum = ran_num()
    var user = ran_user()
    var comp = ran_comp()
    compare(user, comp)
    var play = prompt("Would you like to play again?")
    return play
}

do {
    game()
} while (play == "y")

