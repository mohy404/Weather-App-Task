// Import the Axios library for making HTTP requests
import axios from "axios";

// Import the API key from your constants
import { apiKey } from "../constants";

// Define the endpoint URL for fetching weather forecasts
const forecastEndpoint = params => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;

// Define the endpoint URL for fetching locations
const locationsEndpoint = params => `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

// Function to make an API call using Axios
const apiCall = async (endpoint) => {
  const options = {
    method: 'GET',
    url: endpoint,
  };

  try {
    // Send an HTTP GET request to the specified endpoint
    const response = await axios.request(options);

    // Return the response data
    return response.data;
  } catch (error) {
    console.log('error: ', error);

    // If there's an error, return an empty object
    return {};
  }
}

// Function to fetch weather forecast data
export const fetchWeatherForecast = params => {
  // Generate the forecast URL based on the provided parameters
  let forecastUrl = forecastEndpoint(params);

  // Call the generic apiCall function to fetch data
  return apiCall(forecastUrl);
}

// Function to fetch locations data
export const fetchLocations = params => {
  // Generate the locations URL based on the provided parameters
  let locationsUrl = locationsEndpoint(params);

  // Call the generic apiCall function to fetch data
  return apiCall(locationsUrl);
}
