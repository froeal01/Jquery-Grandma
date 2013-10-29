$(document).ready(function() {
    console.log( "ready!" );

  // this is my javascript thing

  $("form").on("submit", function(event){
    // console.log("Alex is awesome!");
    event.preventDefault();
    var data = $( this ).serialize();
    $.post("/grandma",data, function(response){
      $(".grandma").remove();
      $("form").append(response);
    });
  });





  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
