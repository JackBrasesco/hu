var input = $("#new-item-input")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    console.log("hello")
    var valueToSave = input.val();
    addListItem(valueToSave);
  }
})

onNewListItem("jacksList", function(value) {
  $("#list-display").append("<div>" + value + "</div>")
}) 