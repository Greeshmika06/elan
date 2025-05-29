const track = document.querySelector('.events-box');
  const boxes = document.querySelectorAll('.box');
  const boxWidth = 170;
  let currentIndex = 0;

  function updateTransform() {
    const offset = currentIndex * boxWidth;
    track.style.transform = `translateX(-${offset}px)`;
  }


  document.querySelector('.left').addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateTransform();
    }
  });

  document.querySelector('.right').addEventListener('click', () => {
    if (currentIndex + 3 < boxes.length) {
      currentIndex++;
      updateTransform();
    }
  });

const targetDate = new Date('2025-06-10T23:59:59').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days.toString().padStart(2, '0');//toString() converts value to a string
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');//padStart(2,'0') converts '5' to '05' 
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

  if (difference <= 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    clearInterval(timerInterval);
    return;
  }
}

updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);


