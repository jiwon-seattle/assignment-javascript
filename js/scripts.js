$(document).ready(function(){

  $("form#vacation").submit(function(event) {
  event.preventDefault();
  var solo = $("select#solo").val();
  var name = $("input#name").val();
  var age = $("input#age").val();
  var dob = $("#time").val();
  var operator = $("input:radio[name=operator]:checked").val();

  if (solo === "relax") {
  $("#beach").fadeIn();
  $("#city").hide();
  $("#shop").hide();

} else if (solo === "amusement") {
  $("#city").fadeIn();
  $("#beach").hide()
  $("#shop").hide();

} else if (solo === "foodie") {
  $("shop").fadeIn();
  $("beach").hide();
  $("city").hide();
}
 $(".name").text(name);
 $(".age").text(age);
 $(".destination").text(solo);
 $(".time").text(dob);

 $("#output").alert();
});
});
