document.addEventListener('DOMContentLoaded', () => {
  let keys=[65,83,68,70,71,72,74,75,76,186]
  let notes=[0,2,3,4,5,6,7,8,9]
  document.addEventListener('keydown', keyToNote)
  document.addEventListener('keyup',pressed)
  var key = document.querySelectorAll("#container .keys")
  function keyToNote(e){
    for(i=0;i<=keys.length;i++){
      if(e.keyCode === keys[i]){
        key[i].classList.add("pressed")
      }
    }
  }
  function pressed(e){
    for(i=0;i<=keys.length;i++){
      if(e.keyCode === keys[i]){
        key[i].classList.remove("pressed")
      }
    }
  }

  
})