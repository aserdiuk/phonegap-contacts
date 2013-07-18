/*		This file provides Basic form validation
 * 
 * 
 * 
 * */
function getNextElement(elem) {
	    var nextElem = elem.nextElementSibling;
	    if (nextElem === undefined) {
	        nextElem = elem.nextSibling;
	        while (nextElem && nextElem.nodeType != 1) {
	            nextElem = nextElem.nextSibling;
	        }
	    }
	    return nextElem;
	}
	
	function checkValue(curElem) {
		
	    if (curElem.value.length <= 3) {
	        curElem.setAttribute("class","error");
	
	    } else {
	        curElem.removeAttribute("class");
	        curElem.setAttribute("class","ok");
	    }
	    if (curElem.id == 'email' && !(/^\w+[-_\.]*\w+@\w+-?\w+\.[a-z]{2,4}$/.test(curElem.value))) curElem.setAttribute("class","error");
	}
	
	function checkForm(curElem) {
	    for (var elem in curElem.children) {
	        if (curElem.children[elem].type == 'text' && curElem.children[elem].value.length < 3) {
	            alert("Check data");
	            return false;
	        }
	        
	        if (curElem.children[elem].type == 'tel' && curElem.children[elem].value.length < 8) {
	            alert("Check data");
	            return false;
	        }
	        
	        if (curElem.children[elem].id == 'email' && !(/^\w+[-_\.]*\w+@\w+-?\w+\.[a-z]{2,4}$/.test(curElem.children[elem].value)))return false;
	    }
	
	}