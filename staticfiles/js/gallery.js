// Grabbing the Spotify player and the toggle button elements
const spotifyPlayer = document.getElementById("spotify-player");
const musicButton = document.getElementById("music-button");

// Adding an event listener for the toggle button
musicButton.addEventListener("click", toggleMusic);

// Function to toggle the visibility of the Spotify player
function toggleMusic() {
  // Check if the player is hidden or not
  if (spotifyPlayer.style.display === "none" || spotifyPlayer.style.display === "") {
    spotifyPlayer.style.display = "block"; // Show the player
    musicButton.textContent = "TIGHT"; // Requested change, para astig vibes! 🤘
  } else {
    spotifyPlayer.style.display = "none"; // Hide the player
    musicButton.textContent = "SHOW"; // Requested switch for balance. 🎵
  }
}

// Optional: Add more JS features below as needed
// E.g., Pwede tayo maglagay ng smooth fade-in effect for the player.
// Pero depende sayo, pre, gusto mo ba yan? 😏
