// script.js - frontend that fetches songs from the backend API

document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Call the backend API
    const response = await fetch('http://localhost:3000/api/songs');

    // Convert the response to JSON
    const songs = await response.json();

    // Build list items from the songs
    let html = '';
    for (const song of songs) {
      html += `<li>${song.title} - ${song.artist}</li>`;
    }

    // Insert them into the page under the existing list
    const addedSongsDiv = document.querySelector('#added-songs');
    addedSongsDiv.innerHTML = `<ul>${html}</ul>`;
  } catch (err) {
    console.error('Error fetching songs:', err);
  }
});
