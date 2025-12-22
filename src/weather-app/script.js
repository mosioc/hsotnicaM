// Function to fetch weather data
const getWeather = async (city) => {
  try {
    // Attempt to fetch the data
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    // ----------------------------------------------------
    // THIS SECTION PASSES TEST 23
    // We catch the error and log it to the console.
    // ----------------------------------------------------
    console.error(error);

    // We return null/undefined so showWeather knows something went wrong
    return null;
  }
};

// Function to display weather data
const showWeather = async (city) => {
  // Requirement 9: Call getWeather
  const data = await getWeather(city);

  // Requirement 10 & 24: Handle error case
  if (!data) {
    alert("Something went wrong, please try again later");
    return;
  }

  // Helper to safely get nested values or return 'N/A' (Requirement 11)
  const getValue = (val) => (val !== undefined && val !== null ? val : "N/A");

  // Update the DOM elements

  // 1. Text Elements
  document.getElementById("location").textContent = getValue(data.name);
  document.getElementById("main-temperature").textContent = getValue(
    data.main?.temp
  );
  document.getElementById("feels-like").textContent = getValue(
    data.main?.feels_like
  );
  document.getElementById("humidity").textContent = getValue(
    data.main?.humidity
  );
  document.getElementById("wind").textContent = getValue(data.wind?.speed);
  document.getElementById("wind-gust").textContent = getValue(data.wind?.gust);

  // 2. Weather Condition
  if (data.weather && data.weather.length > 0) {
    document.getElementById("weather-main").textContent = getValue(
      data.weather[0].main
    );
    document.getElementById("weather-icon").src = getValue(
      data.weather[0].icon
    );
    document.getElementById("weather-icon").alt = getValue(
      data.weather[0].description
    );
  } else {
    document.getElementById("weather-main").textContent = "N/A";
    document.getElementById("weather-icon").src = "";
  }

  // Show the display section (remove hidden class)
  document.getElementById("weather-display").classList.remove("hidden");
};

// Event Listeners
document.getElementById("get-weather-btn").addEventListener("click", () => {
  const selectElement = document.getElementById("city-select");
  const selectedCity = selectElement.value;

  // Requirement 3: Do nothing if no city selected
  if (selectedCity) {
    showWeather(selectedCity);
  }
});
