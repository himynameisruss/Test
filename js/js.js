function testAlert(){
	alert('Testing this alert bitch');
}

function checkForPokemon(){
	if (!(document.getElementById('ValueCheck').value == "pokemon")){
		alert('WRONG');
	} else {
		alert('CORRECT');
	}
}

function openNav() {
    document.getElementById("SideNav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("SideNav").style.width = "0";
}

function checkBoxes(){
	var div = document.getElementById("CheckBoxes");
	var checkboxes = div.getElementsByTagName("input");
	for (var i = 0; i < checkboxes.length; i++){
		var cb = checkboxes[0];
		cb.checked = !cb.checked;
	}
}