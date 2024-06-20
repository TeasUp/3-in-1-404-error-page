let score = 0
let highest_score = 0

function click_game() {
    $("#game-btn").prop("disabled", true)

    const chance = Math.floor(Math.random() * 99)
    $("#game-btn").text(`chance : ${chance}%`)

    setTimeout(function() {
        const reseting = Math.random() < (chance / 100)

        if (reseting) {
            score = 0
        } else {
            score++
        }

        if (score > highest_score) {
            highest_score = score;
        }

        $("#game-btn").text(`score , high score: ${score} , ${highest_score}`)
        $("#game-btn").prop("disabled", false)
    }, 1500);
}


