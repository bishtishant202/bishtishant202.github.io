document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btn-click');
    const message = document.getElementById('message');
  
    button.addEventListener('click', () => {
      message.classList.toggle('show');
    });
  });