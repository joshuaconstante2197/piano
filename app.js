
document.addEventListener('DOMContentLoaded', () => {
  let keys=  [81,65,83,68,70,71,72,74,75,76,186,222,221,220]
  let blacks2=[87,69,85,73]
  let blacks3=[82,84,89,79,80,219]
  
  document.addEventListener('keydown', keyToNote)
  document.addEventListener('keyup',pressed)
  var key = document.querySelectorAll("#container .keys")
  var black2s = document.querySelectorAll("#container .black2s")
  var black3s = document.querySelectorAll("#container .black3s")
  
  var whiteNotes= [
    new Audio('libs/notes/a3.mp3'),
    new Audio('libs/notes/b3.mp3'),
    new Audio('libs/notes/c3.mp3'),
    new Audio('libs/notes/d3.mp3'),
    new Audio('libs/notes/e3.mp3'),
    new Audio('libs/notes/f3.mp3'),
    new Audio('libs/notes/g3.mp3'),
    new Audio('libs/notes/a4.mp3'),
    new Audio('libs/notes/b4.mp3'),
    new Audio('libs/notes/c4.mp3'),
    new Audio('libs/notes/d4.mp3'),
    new Audio('libs/notes/e4.mp3'),
    new Audio('libs/notes/f4.mp3'),
    new Audio('libs/notes/g4.mp3')
  ]
  var blacks2Notes = [
    new Audio('libs/notes/a-3.mp3'),
    new Audio('libs/notes/b-3.mp3'),
    new Audio('libs/notes/a-4.mp3'),
    new Audio('libs/notes/b-4.mp3')
  ]
  var blacks3Notes = [
    new Audio('libs/notes/c-3.mp3'),
    new Audio('libs/notes/d-3.mp3'),
    new Audio('libs/notes/e-3.mp3'),
    new Audio('libs/notes/f-3.mp3'),
    new Audio('libs/notes/g-3.mp3'),
    new Audio('libs/notes/c-4.mp3'),
    new Audio('libs/notes/d-4.mp3'),
    new Audio('libs/notes/e-4.mp3'),
    new Audio('libs/notes/f-4.mp3'),
    new Audio('libs/notes/g-4.mp3')
  ]
  
  function keyToNote(e){
    for(i=0;i<=keys.length;i++){
      if(e.keyCode === keys[i]){
        key[i].classList.add("pressed")
        whiteNotes[i].play()
      }else if(e.keyCode === blacks2[i]){
        black2s[i].style.backgroundColor="grey"
        blacks2Notes[i].play()
      }else if(e.keyCode === blacks3[i]){
        black3s[i].style.backgroundColor="grey";
        blacks3Notes[i].play()
        
      }
    }
  }
  function pressed(e){
    for(i=0;i<=keys.length;i++){
      if(e.keyCode === keys[i]){
        key[i].classList.remove("pressed")
      }else if(e.keyCode === blacks2[i]){
        black2s[i].style.backgroundColor="black";
      }else if(e.keyCode === blacks3[i]){
        black3s[i].style.backgroundColor="black";
      }
    }
  }
  
  
})