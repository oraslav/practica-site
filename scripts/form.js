// Обработка формы через Formspree
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  
  fetch('https://formspree.io/f/ваш-formspree-id', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => alert('Сообщение отправлено!'))
  .catch(error => alert('Ошибка: ' + error));
});