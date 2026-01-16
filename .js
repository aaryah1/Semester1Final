$(document).ready(function () {

    $("#submitBtn").click(function () {

        // Clear previous output
        $("#output").empty();
        $("#characterDisplay").empty();

        // Store user input in variables
        let era = $("#eraInput").val().trim();
        let adjective = $("#adjectiveInput").val().trim().toLowerCase();

        // Operator + conditional check
        if (era !== "1980s") {
            $("#output").append("<p>Incorrect era. The correct answer is the <strong>1980s</strong>.</p>");
        } else {
            $("#output").append("<p>Correct! Stranger Things takes place in the 1980s.</p>");
        }

        // Variables for character matching
        let character = "";
        let image = "";

        if (adjective === "ambitious") {
            character = "Nancy";
            image = "nancy.jpg";
        } else if (adjective === "observant") {
            character = "Jonathan";
            image = "jonathan.jpg";
        } else if (adjective === "loyal") {
            character = "Mike";
            image = "mike.jpg";
        } else if (adjective === "rational") {
            character = "Lucas";
            image = "lucas.jpg";
        } else if (adjective === "intelligent") {
            character = "Dustin";
            image = "dustin.jpg";
        } else if (adjective === "strong") {
            character = "Eleven";
            image = "eleven.jpg";
        } else if (adjective === "tough") {
            character = "Max";
            image = "max.jpg";
        } else {
            $("#output").append("<p>Please enter a valid adjective from the list.</p>");
            return;
        }

        // Append result text
        $("#output").append("<p>You match with <strong>" + character + "</strong>!</p>");

        // Append image to rectangle
        $("#characterDisplay").append(
            "<img src='images/" + image + "' alt='" + character + "'>"
        );
    });

});

