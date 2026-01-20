$(document).ready(function () {

    $("#submitBtn").click(function () {

        // Clear previous output and image
        $("#output").empty();
        $("#characterDisplay").empty();

        // Store and normalize user input
        let era = $("#eraInput").val().trim().toLowerCase();
        let adjective = $("#adjectiveInput").val().trim().toLowerCase();

        // Check era answer (case-insensitive)
        if (era !== "1980s") {
            $("#output").append(
                "<p>Incorrect era. The correct answer is the <strong>1980s</strong>.</p>"
            );
            return; // STOP if era is wrong
        }

        $("#output").append(
            "<p>Correct! Stranger Things takes place in the 1980s.</p>"
        );

        // Character matching
        let character = "";
        let image = "";

        if (adjective === "ambitious") {
            character = "Nancy";
            image = "Nancy.png";
        } else if (adjective === "observant") {
            character = "Jonathan";
            image = "Jonathan.png";
        } else if (adjective === "loyal") {
            character = "Mike";
            image = "Mike.png";
        } else if (adjective === "rational") {
            character = "Lucas";
            image = "Lucas.png";
        } else if (adjective === "intelligent") {
            character = "Dustin";
            image = "Dustin.png";
        } else if (adjective === "strong") {
            character = "Eleven";
            image = "Eleven.png";
        } else if (adjective === "tough") {
            character = "Max";
            image = "Max.png";
        } else {
            $("#output").append(
                "<p>Please enter a valid adjective from the list.</p>"
            );
            return;
        }

        // Display result text
        $("#output").append(
            "<p>You match with <strong>" + character + "</strong>!</p>"
        );

        // Display image inside the red box
        $("#characterDisplay").append(
            "<img src='images/" + image + "' alt='" + character + "'>"
        );
    });

});
