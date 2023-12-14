document.addEventListener("DOMContentLoaded", function() {
    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to set a random color to the specified element
    function setRandomColor(element) {
        element.style.color = getRandomColor();
    }

    // Get the h2 elements
    var h2Elements = document.querySelectorAll("h2");

    // Get the links
    var linkElements = document.querySelectorAll("a");

    // Set an interval to change colors every 1000 milliseconds (1 second)
    setInterval(function() {
        // Loop through each h2 element and set a random color
        h2Elements.forEach(function(h2) {
            setRandomColor(h2);
        });

        // Loop through each link element and set a random color
        linkElements.forEach(function(link) {
            setRandomColor(link);
        });
    }, 1000); // Change color every 1000 milliseconds
});