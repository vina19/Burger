// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    let id = $(this).data("id");

    let newDevouredState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    let newBurger = {
      burger_name: $("#burger-name").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Inserted new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-btn").on("click", function(event) {

    let id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function() {
      console.log("This cat was successfully deleted", id);
      location.reload();
    });
  });
});