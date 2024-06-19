function calculateYearsToSave() {
    var monthlyIncome = parseFloat(document.getElementById("monthlyIncome").value);

    if (isNaN(monthlyIncome) || monthlyIncome <= 0) {
        alert("Please enter a valid monthly income.");
        return;
    }

    // Array of locations and their annual rents
    var locations = [
        { name: "Ikeja", rent: 1000000 },
        { name: "Lekki", rent: 2200000 },
        { name: "Yaba", rent: 1200000 },
        { name: "Surulere", rent: 1300000 },
        { name: "Victoria Island", rent: 4000000 },
        { name: "Apapa", rent: 1350000 },
        { name: "Ajegunle", rent: 600000 },
        { name: "Agege", rent: 500000 },
        { name: "Ikoyi", rent: 10000000 }
        // Add more locations as needed
    ];

    // Calculate years to save for each location
    locations.forEach(function(location) {
        var annualRent = location.rent;
        var monthsToSaveForRent = annualRent / monthlyIncome;
        var yearsToSaveForRent = Math.ceil(monthsToSaveForRent / 12);
        location.yearsToSave = yearsToSaveForRent; // Store years to save in location object
    });

    // Sort locations array based on yearsToSave in ascending order
    locations.sort(function(a, b) {
        return a.yearsToSave - b.yearsToSave;
    });

    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results

    // Create the introductory text
    var introText = document.createElement("p");
    introText.innerHTML = "In Tinubu's economy, here's how many years you'll need to save up your annual rent for a one bedroom:";
    resultsContainer.appendChild(introText);

    // Loop through sorted locations to display results
    locations.forEach(function(location) {
        // Create an element for each location's result
        var locationResult = document.createElement("div");
        locationResult.classList.add("location-result");

        var locationName = document.createElement("h3");
        locationName.textContent = location.name;
        locationName.classList.add("location-name");
        locationResult.appendChild(locationName);

        var yearsText = document.createElement("p");
        yearsText.textContent = location.yearsToSave + " years";
        locationResult.appendChild(yearsText);

        resultsContainer.appendChild(locationResult);
    });

    // Display the recommendation for the best location (first in sorted array)
    var bestLocation = locations[0].name;
    var minYearsToSave = locations[0].yearsToSave;

    var recommendationHeader = document.createElement("h2");
    recommendationHeader.innerHTML = "Recommendation";

    var recommendationText = document.createElement("p");
    recommendationText.innerHTML = "The most ideal place to save towards is <strong>" + bestLocation + "</strong>, which will take approximately <strong>" + minYearsToSave + " years</strong>.";

    resultsContainer.appendChild(document.createElement("hr")); // Separator
    resultsContainer.appendChild(recommendationHeader);
    resultsContainer.appendChild(recommendationText);

    // Scroll to the top of the results container
    resultsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
}
