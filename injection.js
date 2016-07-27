var body = document.body

var pattern = /{wtf}/

var wtf = "(╯°Д°)╯︵ ┻━┻ "

var isInput = function(elm){
	return elm.nodeName === 'INPUT' || elm.nodeName === 'TEXTAREA' 
}

var isEditableDiv = function(elm) {
	return elm.nodeName==='DIV' && elm.contentEditable === 'true'
}


body.addEventListener('keyup', function(){
  var f = document.activeElement
  if (isInput(f)) {
    var content = f.value
    if(pattern.test(content)){
      f.value = content.replace(pattern, wtf)
    }
  } else if (isEditableDiv(f)) {
	var content = f.innerHTML
	if(pattern.test(content)) {
	  f.innerHTML = content.replace(pattern, wtf)
	}
  }
})