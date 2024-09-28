// Event details
const eventDetails = {
  date: "Noviembre 17, 2024",
  place: "Jano's Eventos - Gral. Güemes 897, B1873 Crucecita, Provincia de Buenos Aires",
  dressCode: "Elegante",
  mapPosition: [-34.6744207, -58.370122]
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
const closeMessageBtn = document.getElementById('closeMessageBtn');
const songForm = document.getElementById('songForm');

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
closeMessageBtn.addEventListener('click', () => {
  messageModal.classList.add('hidden');
});

// Handle form submissions
songForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const songInput = document.getElementById('songInput').value;
  console.log('Song added:', songInput);
  songModal.classList.add('hidden');
});

// Initialize image carousel
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

// Change image every 3 seconds
setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}, 3000);

// Show the first image initially
showImage(currentImageIndex);
