const alternatives = [
  {text:"", images:"images/cat-01.gif"},
  {text:"You're joking.", images:"images/cat-02.gif"},
  {text:"Try again, baby <3", images:"images/cat-03.gif"},
  {text:"Please press yes.", images:"images/cat-04.gif"},
  {text:"Final attempt, baby.", images:"images/cat-05.gif"},
]
const ohyes = {text:"I knew you would accept. Enjoy the gift card, baby! Keep grinding on Honkai!<br><br>Card number: 239W KPMD 8D6N TSCE<br><br>It's a Play Store gift card, so you can redeem it on the Play Store app under Payments & Subscriptions.", images:"images/cat-yes.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Yes"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'No'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})