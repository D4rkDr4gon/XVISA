// Event details
const eventDetails = {
  date: "Noviembre 17, 2024",
  place: "Jano's Eventos - Gral. Güemes 897, B1873 Crucecita, Provincia de Buenos Aires",
  dressCode: "Elegante",
  mapPosition: [-33.3190937, -60.2320488]
};

// Initialize map
const map = L.map('map').setView(eventDetails.mapPosition, 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker(eventDetails.mapPosition).addTo(map).bindPopup('Party Location!').openPopup();

// Modal functionality
const songModal = document.getElementById('songModal');
const messageModal = document.getElementById('messageModal');
const songBtn = document.getElementById('songBtn');
const messageBtn = document.getElementById('messageBtn');
const cancelSongBtn = document.getElementById('cancelSongBtn');
const cancelMessageBtn = document.getElementById('cancelMessageBtn');
const songForm = document.getElementById('songForm');
const messageForm = document.getElementById('messageForm');

// Show and hide modals
songBtn.addEventListener('click', () => {
  songModal.classList.remove('hidden');
});
messageBtn.addEventListener('click', () => {
  messageModal.classList.remove('hidden');
});
cancelSongBtn.addEventListener('click', () => {
  songModal.classList.add('hidden');
});
cancelMessageBtn.addEventListener('click', () => {
  messageModal.classList.add('hidden');
});

// Handle form submissions
songForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const songInput = document.getElementById('songInput').value;
  console.log('Song added:', songInput);
  songModal.classList.add('hidden');
});

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const messageInput = document.getElementById('messageInput').value;
  console.log('Message added:', messageInput);
  messageModal.classList.add('hidden');
});
