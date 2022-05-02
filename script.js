/* function game() {
    let boxes = document.querySelectorAll('.box')
    let Boxes = Array.from(boxes)
    function text(e) {
        e.currentTarget.textContent = 'X'
        e.currentTarget.style.backgroundColor = 'green'
    }
    function fill() {
        for (let i = 0; i < Boxes.length; i++) {
            Boxes[i].addEventListener('click', text)
        }
    }

    return {Boxes, text, fill}
}

let play = game()

play.Boxes
play.fill() */

let boxes = document.querySelectorAll('.box')
let Boxes = Array.from(boxes)

function board() {
    let layout = ['','','','','','','','','']
    return {layout}
}

let trialBox = (function() {
    let gameBoard = board()

    /* let boxes = document.querySelectorAll('.box') */

    let bunch = function() {
        /* let Boxes = Array.from(boxes) */

        for (let i = 0; i < Boxes.length; i++) {
            Boxes[i].textContent = gameBoard.layout[i]
            gameBoard[i] = Boxes[i].textContent
        }
    }

    return {gameBoard, bunch}

})()


trialBox.gameBoard
trialBox.bunch()


/* let player1 = function() {
    let doIt = function(e) {
        e.currentTarget.textContent = 'X'
    }

    let fillUp = function() {
        for (let i = 0; i < Boxes.length; i++) {
            Boxes[i].addEventListener('click', doIt)
        }
    }

    return {fillUp}

}

let running = player1()



let player2 = function() {
    let fillUp = function() {
        for (let i = 0; i < Boxes.length; i++) {
            Boxes[i].addEventListener('click', function(e) {
                e.currentTarget.textContent = 'O'
                console.log(trialBox.gameBoard)
            })
        }
    }
    return {fillUp}
}

let running2 = player2() */


function autoMark() {
    let markO = 0
    let markX = 0
    
    function addMark() {
        for (let i = 0; i < Boxes.length; i++) {
            Boxes[i].addEventListener('click', function(e) {
                console.log(e.currentTarget.textContent)
                if (e.currentTarget.textContent !== 'X' && e.currentTarget.textContent !== 'O' ) {
                    if (markO === 0 && markX === 0) {
                        markX += 1
                        
                        e.currentTarget.textContent = 'X'
                            
                    }
                    else if (markO === markX) {
                        markX += 1
            
                        e.currentTarget.textContent = 'X'
                    }
                    else if (markO < markX) {
                        markO += 1
                        
                        e.currentTarget.textContent = 'O'
                            
                        
                    }
                }
                else {
                    return false
                }
            })
        }


    }
    return {addMark}
}

let run = autoMark()




/* running.fillUp()
running2.fillUp()
 */

let player = function() {
    let fillUp = function() {
        for (let i = 0; i < Boxes.length; i++) {
            Boxes[i].addEventListener('click', run.addMark)
        }
    }
    return {fillUp}
}

let gamePlay = player()

run.addMark()