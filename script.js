const noBtn = document.getElementById('noBtn');
const siBtn = document.getElementById('siBtn');

// Aquí agregamos el evento 'mouseover' (cuando el mouse pasa por encima)
noBtn.addEventListener('mouseover', function () {
    // 1. Calculamos números aleatorios de 0 a 100
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    
    // 2. Aplicamos esos números a la posición del botón
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    
    // 3. Esto asegura que el botón no se salga de la pantalla
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});

siBtn.addEventListener('click', function () {
    alert('¡Sabía que me perdonarías! ❤️ Gracias.');
});