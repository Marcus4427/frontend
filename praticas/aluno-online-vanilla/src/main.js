import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  function clearEmailError() {
    emailError.classList.remove('show');
    emailError.textContent = '';
  }

  function clearPasswordError() {
    passwordError.classList.remove('show');
    passwordError.textContent = '';
  }

  emailInput.addEventListener('input', clearEmailError);
  passwordInput.addEventListener('input', clearPasswordError);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    let hasError = false;

    if (!email) {
      emailError.textContent = 'O campo de email é obrigatório.';
      emailError.classList.add('show');
      hasError = true;
    }

    if (!password) {
      passwordError.textContent = 'O campo de senha é obrigatório.';
      passwordError.classList.add('show');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    window.location.href = './index.html';
  });
});
