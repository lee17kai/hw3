// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  // Store variables: name, phone number, pickup location, dropoff, & # passengers
  let passengerFirstName = ride.passengerDetails.first
  let passengerLastName = ride.passengerDetails.last
  let passengerPhoneNumber = ride.passengerDetails.phoneNumber
  let pickupAddress = ride.pickupLocation.address
  let pickupCity = ride.pickupLocation.city
  let pickupState = ride.pickupLocation.state
  let pickupZip = ride.pickupLocation.zip
  let dropoffAddress = ride.dropoffLocation.address
  let dropoffCity = ride.dropoffLocation.city
  let dropoffState = ride.dropoffLocation.state
  let dropoffZip = ride.dropoffLocation.zip
  let numPassengers = ride.numberOfPassengers

  // Display in human readable format
  console.log(`Incoming Noober Ride Request! \n
  Customer Name: ${passengerFirstName} ${passengerLastName}\n
  Phone number: ${passengerPhoneNumber}\n
  Pickup at ${pickupAddress}, ${pickupCity}, ${pickupState} ${pickupZip}\n
  Drop-off at ${dropoffAddress}, ${dropoffCity}, ${dropoffState} ${dropoffZip}`)


  // 🔥 YOUR CODE ENDS HERE 🔥
})
