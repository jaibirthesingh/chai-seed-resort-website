document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var email = document.getElementById('email').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();

    var body = 'Name: ' + firstName + ' ' + lastName + '\n' +
               'Email: ' + email + '\n\n' +
               message;

    var mailto = 'mailto:chaiseedresort@gmail.com' +
                 '?subject=' + encodeURIComponent(subject) +
                 '&body=' + encodeURIComponent(body);

    window.location.href = mailto;

    var status = document.getElementById('formStatus');
    if (status) {
      status.textContent = 'Opening your email app to send this message…';
    }
  });
});
