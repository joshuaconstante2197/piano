document.addEventListener('DOMContentLoaded', () => {
  let keys=[65,83,68,70,71,72,74,75,76,186]
  function keyToNote(e){
    
    keys.forEach(index => {
      // console.log(index)
      // console.log(e.keyCode)
      if(e.keyCode === index){
        console.log(e.keyCode)
      }
    })
  }
    document.addEventListener('keydown', keyToNote)
  
})