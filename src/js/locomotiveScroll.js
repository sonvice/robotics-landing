
export const initializeLocomotiveScroll = () => {

  // Función para animar únicamente el número
  const animateNumber = (element, progress) => {
    const finalValue = parseInt(element.getAttribute('data-final-value'), 10);
    const currentValue = Math.floor(progress * finalValue);

    // Actualiza solo el valor del número
    element.textContent = currentValue.toLocaleString();
  };

  // Escuchar el evento personalizado de progreso
  window.addEventListener('progressEvent', (e) => {
    const { target, progress } = e.detail;
    if (target && target.hasAttribute('data-final-value')) {
      animateNumber(target, progress);
    }
  });
};
