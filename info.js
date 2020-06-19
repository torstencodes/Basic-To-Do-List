
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
	let priorityVal = $("#priorityValue").val();
	let dueDate = $("#dueDate").val();
	$("#resultList tr:last").after("<tr><td><input type='checkbox'></td><td style='word-break:break-word'>" + val 
									+ "</td><td>" + priorityVal + "</td><td>" + dueDate + "</td></tr>");
}
/*
 * This will clear the list of things to do 
 */
function clearList() {
	$("#resultList").empty();
	$("#resultList").append("<tr><th>Select</th><th>Items To Do</th>" +
							"<th>Priority</th><th>Due Date</th></tr>");
}

function clearProgress() {
	$("#inProgress").empty();
	$("#inProgress").append("<tr><th>Select</th><th>Items In Progress</th>" +
							"<th>Priority</th><th>Due Date</th></tr>");
}

function clearDone() {
	$("#doneList").empty();
	$("#doneList").append("<tr><th>Select</th><th>Finished Items</th>" +
							"<th>Priority</th><th>Due Date</th></tr>");
}
/*
 * This will delete items that are checked off in the to do list
 */
function deleteItem() {
	let items = $("#resultList").find('input:checked');
	items.closest('tr').remove();
}
/*
 * This will move items over to in progress
 */
function moveInProgress() {
	let items = $("#resultList").find('input:checked');
	$("#inProgress").append(items.closest('tr'));
}
/*
 * This will move items over to in progress
 */
function moveInProgressDone() {
	let items = $("#doneList").find('input:checked');
	$("#inProgress").append(items.closest('tr'));
}
/*
 * This will move items over to done.
 */
function moveDone() {
	let items = $("#inProgress").find('input:checked');
	$("#doneList").append(items.closest('tr'));
}
/*
 * This will delete items in the done list.
 */ 
function deleteDone() {
	let items = $("#doneList").find('input:checked');
	items.closest('tr').remove();
}
function deleteProgress() {
	let items = $("#inProgress").find('input:checked');
	items.closest('tr').remove();
}
/*
 * This will move items from in progress back to the backlog.
 */
function moveToBacklog() {
	let items = $("#inProgress").find('input:checked');
	$("#resultList").append(items.closest('tr'));
}