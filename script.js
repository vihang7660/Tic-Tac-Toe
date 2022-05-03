let boxes = document.querySelectorAll('.box')
let Boxes = Array.from(boxes)

function board() {
    let layout = ['','','','','','','','','']
    return {layout}
}

let trialBox = (function() {
    let gameBoard = board()


    let bunch = function() {

        for (let i = 0; i < Boxes.length; i++) {
            Boxes[i].textContent = gameBoard.layout[i]
            gameBoard[i] = Boxes[i].textContent
        }
    }

    return {gameBoard, bunch}

})()


trialBox.gameBoard
trialBox.bunch()


function individualBox() {
    let box1 = document.querySelector('.one')
    let box2 = document.querySelector('.two')
    let box3 = document.querySelector('.three')
    let box4 = document.querySelector('.four')
    let box5 = document.querySelector('.five')
    let box6 = document.querySelector('.six')
    let box7 = document.querySelector('.seven')
    let box8 = document.querySelector('.eight')
    let box9 = document.querySelector('.nine')

    return {box1, box2, box3, box4, box5, box6, box7, box8, box9}

}

let objectBox = individualBox()


function autoMark() {
    let markO = 0
    let markX = 0


    function eventListener(e) {
        if (markO === 0 && markX === 0) {
            markX += 1
            
            e.currentTarget.textContent = 'X'
                
        }
        else if (markO === markX) {
            markX += 1
    
            e.currentTarget.textContent = 'X'

            if ((objectBox.box1.textContent == 'X' && objectBox.box2.textContent == 'X' && objectBox.box3.textContent == 'X') || (objectBox.box4.textContent == 'X' && objectBox.box5.textContent == 'X' && objectBox.box6.textContent == 'X') || (objectBox.box7.textContent == 'X' && objectBox.box8.textContent == 'X' && objectBox.box9.textContent == 'X') || (objectBox.box1.textContent == 'X' && objectBox.box5.textContent == 'X' && objectBox.box9.textContent == 'X') || (objectBox.box3.textContent == 'X' && objectBox.box5.textContent == 'X' && objectBox.box7.textContent == 'X') || (objectBox.box1.textContent == 'X' && objectBox.box4.textContent == 'X' && objectBox.box7.textContent == 'X') || (objectBox.box2.textContent == 'X' && objectBox.box5.textContent == 'X' && objectBox.box8.textContent == 'X') || (objectBox.box3.textContent == 'X' && objectBox.box6.textContent == 'X' && objectBox.box9.textContent == 'X')) {
                console.log('X has won')
                removeListener()
            }
            else if (markX === 5) {
                console.log(`It's a Tie`)
            }
        }
        else if (markO < markX) {
            markO += 1
                
            e.currentTarget.textContent = 'O'

            if ((objectBox.box1.textContent == 'O' && objectBox.box2.textContent == 'O' && objectBox.box3.textContent == 'O') || (objectBox.box4.textContent == 'O' && objectBox.box5.textContent == 'O' && objectBox.box6.textContent == 'O') || (objectBox.box7.textContent == 'O' && objectBox.box8.textContent == 'O' && objectBox.box9.textContent == 'O') || (objectBox.box1.textContent == 'O' && objectBox.box5.textContent == 'O' && objectBox.box9.textContent == 'O') || (objectBox.box3.textContent == 'O' && objectBox.box5.textContent == 'O' && objectBox.box7.textContent == 'O') || (objectBox.box1.textContent == 'O' && objectBox.box4.textContent == 'O' && objectBox.box7.textContent == 'O') || (objectBox.box2.textContent == 'O' && objectBox.box5.textContent == 'O' && objectBox.box8.textContent == 'O') || (objectBox.box3.textContent == 'O' && objectBox.box6.textContent == 'O' && objectBox.box9.textContent == 'O')) {
                console.log('O has won')
                removeListener()      
            }
                    
                
        }
    }
    
    function addMark() {
        for (let i = 0; i < Boxes.length; i++) {

            Boxes[i].addEventListener('click', eventListener, {once: true})
        }


    }
    return {addMark, eventListener}
}

let run = autoMark()




run.addMark()

function removeListener() {
    for (let i = 0; i < Boxes.length; i++) {
        Boxes[i].removeEventListener('click', run.eventListener)
    }
}


