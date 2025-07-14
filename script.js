const idInput = document.getElementById('username');
const pwInput = document.getElementById('password');
const loginBtn = document.getElementById('login-button');

function updateButtonState() {
  const isFilled = idInput.value.trim() !== '' && pwInput.value.trim() !== '';
  loginBtn.disabled = !isFilled;

  if (isFilled) {
    loginBtn.classList.add('enabled');
  } else {
    loginBtn.classList.remove('enabled');
  }
}

idInput.addEventListener('input', updateButtonState);
pwInput.addEventListener('input', updateButtonState);

function handleLogin() {
  const id = idInput.value.trim();
  const pw = pwInput.value.trim();

  if (id !== '' && pw !== '') {
    // 로그인 시도 → URL에 정보 남기지 않고 이동
    location.href = 'haha.html';
  } else {
    alert('아이디와 비밀번호를 입력하세요.');
  }
}
