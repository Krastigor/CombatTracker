$(document).ready(function(){
	$("#addPlayer").click( function () {
		var html = "<tr><td><input type=\"text\" name=\"unitName\"></td><td><input type=\"text\" name=\"armorClass\"></td><td><input type=\"text\" name=\"hitPoints\"></td><td><input type=\"text\" name=\"passivePerception\"></td><td><input type=\"text\" name=\"initiative\"></td><td><a id=\"delete\" class=\"btn\" href=\"#\" onclick=\"deleteRow(this);\">X</a></td></tr>";

		$("#players tbody").append(html);
		console.log("test");
	});
});

function deleteRow(obj) {
    $(obj).closest('tr').remove();
 }
