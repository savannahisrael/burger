console.log("burgers.js is linked");

$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        // var newDevour = $(this).data("devour");

        // var newDevourState = {
            // devoured: newDevour, id: id
        // };
        // console.log(newDevourState);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            // data: newDevourState
        }).then(
            function() {
                // console.log("changed devour to", newDevour);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
            // devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });
    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax({
            method: "DELETE",
            url: `/api/burgers/${id}`
        }).then(function() {
            console.log(`Deleted burger with id ${id}`);
            location.reload();
        })

    //     $.ajax("/api/burgers/" + id, {
    //         type: "DELETE"
    //     }).then(
    //         function() {
    //             console.log("deleted burger", id);
    //             location.reload();
    //         }
    //     );
    });
});