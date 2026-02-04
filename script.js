const noBtn = document.getElementById('noBtn');
const siBtn = document.getElementById('siBtn');
    
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);

siBtn.addEventListener('click', function () {
    alert('¡Sabía que me perdonarías! ❤️ Gracias.');