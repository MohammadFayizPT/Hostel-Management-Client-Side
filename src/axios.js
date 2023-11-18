import axios from "axios";
import backendURL from './Constants/constants'

// Create an instance of axios with custom configurations
const instance = axios.create({
  baseURL: backendURL, // Set a base URL for all requests
  timeout: 5000, // Set a timeout (in milliseconds) for requests
  headers: {
    //'Authorization': 'Bearer YOUR_API_KEY_OR_TOKEN_HERE',
    'Content-Type': 'application/json', // Example of setting default headers
    // Other default headers if needed
  }
});

export default instance; // Export the configured instance to use across your app
