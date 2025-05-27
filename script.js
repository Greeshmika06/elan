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
