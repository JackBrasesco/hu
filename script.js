var input = $("#new-item-input")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    addListItem("jacksList",valueToSave);
  }
})

onNewListItem("jacksList", function(value) {
  console.log("hi")
  $("#list-display").append("<div>" + value + "</div>")
}) 