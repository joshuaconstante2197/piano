
document.addEventListener('DOMContentLoaded', () => {
  let keys=  [65,83,68,70,71,72,74,75,76,186,222]
  let blacks=[81,87,69,82,84,89,85,73,79,80,219,221]
  let notes=[0,2,3,4,5,6,7,8,9]
  document.addEventListener('keydown', keyToNote)
  document.addEventListener('keyup',pressed)
  var key = document.querySelectorAll("#container .keys")
  var black = document.querySelectorAll("#container .black2s")

  function keyToNote(e){
    for(i=0;i<=keys.length;i++){
      console.log(e.keyCode)
      if(e.keyCode === keys[i]){
        key[i+7].classList.add("pressed")
      }else if(e.keyCode === blacks[i]){
        black[i+5].classList.add("pressed")
      }
    }
  }
  function pressed(e){
    for(i=0;i<=keys.length;i++){
      if(e.keyCode === keys[i]){
        key[i+7].classList.remove("pressed")
      }else if(e.keyCode === blacks[i]){
        black[i+5].classList.remove("pressed")
      }
    }
  }
  
  
})