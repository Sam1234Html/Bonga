const sessionType = document.getElementById('sessionType');
const locationContainer = document.getElementById('locationContainer');
const bookingForm = document.getElementById('bookingForm');
const bookingSuccess = document.getElementById('bookingSuccess');

sessionType.addEventListener('change', () => {
  if (sessionType.value === 'physical') {
    locationContainer.style.display = 'block';
  } else {
    locationContainer.style.display = 'none';
  }
});

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  bookingSuccess.innerHTML = `
    Booking successful!<br><br>
    Google Meet Link: <a href="https://meet.google.com" target="_blank">Join Meeting</a><br>
    Calendar and email notifications will be sent automatically when backend is connected.
  `;

  bookingForm.reset();
  locationContainer.style.display = 'none';

  window.location.hash = 'booking';
});
