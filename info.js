
/*
 * This will clear the current entry in the textbox
 */
function hideEntry() {
	$("#numAns").empty();
}
/*
 * This will insert a new entry into the to do list table 
 */
function getAnswer() {
	let val = $("#entry").val();
	$("#resultList tr:last").after("<tr><td><input type='checkbox'></td><td>" + val + "</td></tr>");
}
/*
 * This will clear the list of things to do 
 */
function clearList() {
	$("#resultList").empty();
	$("#resultList").append("<tr><th>Done?</th><th>Items To Do</th></tr>");
}
/*
 * This will delete items that are checked off in the to do list
 */
function deleteItem() {
	let items = $("#resultList").find('input:checked');
	items.closest('tr').remove();
}
/*
 * This will move items from to do over to done.
 */
function moveDone() {
	let items = $("#resultList").find('input:checked');
	$("#doneList").append(items.closest('tr'));
}
/*
 * This will delete items in the done list.
 */ 
function deleteDone() {
	let items = $("#doneList").find('input:checked');
	items.closest('tr').remove();
}