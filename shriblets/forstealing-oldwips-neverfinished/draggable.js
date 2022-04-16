console.log("js loading successfully");

function makeDraggable(evt) {
	console.log("makeDraggable");
	
	var selectedElement=false;
	
	var svg = evt.target; /*function targets the svg*/
	/*functions to mouse events*/
	svg.addEventListener('mousedown',startDrag);
	svg.addEventListener('mousemove',drag);
	svg.addEventListener('mouseup',endDrag);
	svg.addEventListener('mouseleave',endDrag);
	
	/*side note: console.log directly inside these functions runs for /literally every mouse movement*/
	function startDrag(evt) {/*user clicks*/
		/*console.log("startDrag");*/
		if (evt.target.classList.contains('draggable')) {/*if target of click has class "draggable"*/
			selectedElement=evt.target; /*selectedElement will be click target*/
			console.log("startDrag");
		}
	}
	
	function drag(evt) {/*user drags*/
		/*console.log("drag");*/
		if (selectedElement) {
			evt.preventDefault(); /*prevents dragged elements from messing with content outside the SVG*/
			var x = parseFloat(selectedElement.getAttributeNS(null,"x"));
			selectedElement.setAttributeNS(null,"x",x+0.1); /*gets x-position of element, then adds +0.1px (moves to the right)*/
			console.log("drag");
		}
	}
	
	function endDrag(evt) {/*user unclicks OR mouse leaves the svg*/
		/*console.log("endDrag"); <-- will affect ANY mouseoff so this is staying commented-out*/
		selectedElement=null; /*resets selected element*/
	}
}