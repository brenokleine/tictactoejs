
let player1 = {
    name: `Player 1`,
    points: 0,
    mark: `X`
}

let player2 = {
    name: `Player 2`,
    points: 0,
    mark: `O`
}

let turn = 1;

document.getElementById(`start`).addEventListener(`click`, function() {
    document.getElementById(`startPage`).style.display = `none`
    document.getElementById(`game`).style.display = `flex` 

    document.getElementById(`player1`).value == `` ? player1.name = `Player 1` : player1.name = document.getElementById(`player1`).value

    document.getElementById(`player2`).value == `` ? player2.name = `Player 2` : player2.name = document.getElementById(`player2`).value

    scoreboard()
    
}) 

function scoreboard(endGame){
    if(endGame == undefined){
        turn == 1 ? document.getElementById(`scoreboard`).innerHTML = `[${player1.name} turn]` : document.getElementById(`scoreboard`).innerHTML = `[${player2.name} turn]`
    } else {

        document.querySelectorAll(`.place`).forEach(place => {
            place.value = `ON`
        })

        if(endGame == `tie`){
            document.getElementById(`scoreboard`).innerHTML = `[Its a TIE!]`
        } else {
            document.getElementById(`scoreboard`).innerHTML = `[${endGame.name} Wins!]`
        }
    }  
}
    //play moves
    document.querySelectorAll(`.place`).forEach(place => {
        place.addEventListener(`click`, function(){
            if(place.value == `OFF`){
    
                let player
    
                if(turn == 1){
                    player = player1
                    turn = 2
                } else {
                    player = player2
                    turn = 1
                }
    
                place.innerHTML = player.mark
                place.value = `ON`
                
                scoreboard(winStatus())
            } else {
                window.alert(`Serio?`)
            }
        })
    })


let c11 = document.getElementById(`11`)
let c12 = document.getElementById(`12`)
let c13 = document.getElementById(`13`)

let c21 = document.getElementById(`21`)
let c22 = document.getElementById(`22`)
let c23 = document.getElementById(`23`)

let c31 = document.getElementById(`31`)
let c32 = document.getElementById(`32`)
let c33 = document.getElementById(`33`)

function winStatus(){

    //horizontal wins
    if(c11.innerText == `X` && c12.innerText == `X` && c13.innerText == `X` ||
       c11.innerText == `O` && c12.innerText == `O` && c13.innerText == `O`){
            
            c11.style.color = `#be96c2`
            c11.style.backgroundColor = `#2e2c2a`
            c12.style.color = `#be96c2`
            c12.style.backgroundColor = `#2e2c2a`
            c13.style.color = `#be96c2` 
            c13.style.backgroundColor = `#2e2c2a`

            if(c11.innerText == `X`){
                return player1
            } else {
                return player2
            }
       }
       else if(c21.innerText == `X` && c22.innerText == `X` && c23.innerText == `X` ||
               c21.innerText == `O` && c22.innerText == `O` && c23.innerText == `O`){
                    
                c21.style.color = `#be96c2`
                c21.style.backgroundColor = `#2e2c2a`
                c22.style.color = `#be96c2`
                c22.style.backgroundColor = `#2e2c2a`
                c23.style.color = `#be96c2` 
                c23.style.backgroundColor = `#2e2c2a`

                    if(c21.innerText == `X`){
                        return player1
                    } else {
                        return player2
                    }
               }
        else if(c31.innerText == `X` && c32.innerText == `X` && c33.innerText == `X` ||
                c31.innerText == `O` && c32.innerText == `O` && c33.innerText == `O`){
                    
                    c31.style.color = `#be96c2`
                    c31.style.backgroundColor = `#2e2c2a`
                    c32.style.color = `#be96c2`
                    c32.style.backgroundColor = `#2e2c2a`
                    c33.style.color = `#be96c2` 
                    c33.style.backgroundColor = `#2e2c2a`
                    
                    if(c31.innerText == `X`){
                        return player1
                    } else {
                        return player2
                    }
                }
        
        //vertical wins

        else if(c11.innerText == `X` && c21.innerText == `X` && c31.innerText == `X` ||
                c11.innerText == `O` && c21.innerText == `O` && c31.innerText == `O`){
                    
                    c11.style.color = `#be96c2`
                    c11.style.backgroundColor = `#2e2c2a`
                    c21.style.color = `#be96c2`
                    c21.style.backgroundColor = `#2e2c2a`
                    c31.style.color = `#be96c2` 
                    c31.style.backgroundColor = `#2e2c2a`
                    
                    if(c11.innerText == `X`){
                        return player1
                    } else {
                        return player2
                    }
                }
        else if(c12.innerText == `X` && c22.innerText == `X` && c32.innerText == `X` ||
                c12.innerText == `O` && c22.innerText == `O` && c32.innerText == `O`){
                    
                    c12.style.color = `#be96c2`
                    c12.style.backgroundColor = `#2e2c2a`
                    c22.style.color = `#be96c2`
                    c22.style.backgroundColor = `#2e2c2a`
                    c32.style.color = `#be96c2` 
                    c32.style.backgroundColor = `#2e2c2a`
                    
                    if(c12.innerText == `X`){
                        return player1
                    } else {
                        return player2
                    }
                }
        else if(c13.innerText == `X` && c23.innerText == `X` && c33.innerText == `X` ||
                c13.innerText == `O` && c23.innerText == `O` && c33.innerText == `O`){
                    
                    c13.style.color = `#be96c2`
                    c13.style.backgroundColor = `#2e2c2a`
                    c23.style.color = `#be96c2`
                    c23.style.backgroundColor = `#2e2c2a`
                    c33.style.color = `#be96c2` 
                    c33.style.backgroundColor = `#2e2c2a`
                    
                    if(c13.innerText == `X`){
                        return player1
                    } else {
                        return player2
                    }
                }

        //diagonal wins

        else if(c11.innerText == `X` && c22.innerText == `X` && c33.innerText == `X` ||
                c11.innerText == `O` && c22.innerText == `O` && c33.innerText == `O`){
                    
                    c11.style.color = `#be96c2`
                    c11.style.backgroundColor = `#2e2c2a`
                    c22.style.color = `#be96c2`
                    c22.style.backgroundColor = `#2e2c2a`
                    c33.style.color = `#be96c2` 
                    c33.style.backgroundColor = `#2e2c2a`
                    
                    if(c11.innerText == `X`){
                        return player1
                    } else {
                        return player2
                    }
                }
        else if(c13.innerText == `X` && c22.innerText == `X` && c31.innerText == `X` ||
                c13.innerText == `O` && c22.innerText == `O` && c31.innerText == `O`){
                    
                    c13.style.color = `#be96c2`
                    c13.style.backgroundColor = `#2e2c2a`
                    c22.style.color = `#be96c2`
                    c22.style.backgroundColor = `#2e2c2a`
                    c31.style.color = `#be96c2` 
                    c31.style.backgroundColor = `#2e2c2a`
                    
                    if(c13.innerText == `X`){
                        return player1
                    } else {
                        return player2
                    }
                }
        
        let places = document.querySelectorAll(`.place`)

        for(let i = 0; i < places.length; i++){
            if(places[i].value == `OFF`){
                return null
            } 
        }

        return `tie`
 
}

document.getElementById(`restart`).addEventListener(`click`, function(){
    document.querySelectorAll(`.place`).forEach(place => {
        turn = 1
        scoreboard()
        place.value = `OFF`
        place.innerText = ``
        place.style.backgroundColor = `#8e72ab`
        place.style.color = `#2e2c2a`
    })
})

document.getElementById(`menu`).addEventListener(`click`, function(){
    document.getElementById(`startPage`).style.display = `flex`
    document.getElementById(`game`).style.display = `none`
    document.getElementById(`player1`).value = ``
    document.getElementById(`player2`).value = ``
    turn = 1
    player1.name = ``
    player2.name = ``
    player1.points = 0
    player2.points = 0
    document.querySelectorAll(`.place`).forEach(place => {
        place.innerText = ``
        place.value = `OFF`
        place.style.backgroundColor = `#8e72ab`
        place.style.color = `#2e2c2a`
    })
    document.getElementById(`scoreboard`).innerHTML = ``
})