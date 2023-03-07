
const gridElements = document.querySelectorAll('.grid-element')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
let result = 0
let hitPosition
let currentTime = 10
let timerId = null
const randomElements =() =>{ 
    gridElements.forEach(element =>{
        element.classList.remove('mole')
})
    let random = gridElements[Math.floor(Math.random() *9)]
    random.classList.add('mole')
     hitPosition = random.id 
}
    gridElements.forEach(element=> element.addEventListener('click', (e)=>{
      
        if(e.target.id == hitPosition){
           result++
           score.textContent=result
           hitPosition = null
        }
    }))


function move(){
    timerId = setInterval(randomElements, 1000)
}
   
move()

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime
    
    if(currentTime== 0){
        clearInterval(countDownTimer)
        clearInterval(timerId)
    }
}

let countDownTimer = setInterval(countDown, 1000)


