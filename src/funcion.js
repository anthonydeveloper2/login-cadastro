 function mostrarCadastro() {
  document.getElementById('login-box').classList.add('esconder');
  document.getElementById('cadastro-box').classList.remove('esconder');
}

function mostrarLogin() {
  document.getElementById('cadastro-box').classList.add('esconder');
  document.getElementById('login-box').classList.remove('esconder');
}

function login(event) {
  event.preventDefault();
  const usuario = document.getElementById('usuario-login').value;
  const senha = document.getElementById('senha-login').value;
  const mensagem = document.getElementById('mensagem-login');

  if (usuario === "admin" && senha === "1234") {
    mensagem.textContent = "Login bem-sucedido!";
  } else {
    mensagem.textContent = "Usuário ou senha inválidos.";
  }
}

function cadastrar(event) {
  event.preventDefault();
  const usuario = document.getElementById('usuario-cadastro').value;
  const senha = document.getElementById('senha-cadastro').value;
  const confirmar = document.getElementById('confirmar-senha').value;
  const mensagem = document.getElementById('mensagem-cadastro');

  if (senha !== confirmar) {
    mensagem.textContent = "As senhas não coincidem.";
  } else {
    mensagem.textContent = "Cadastro realizado com sucesso!";
  }
}

// Partículas de fundo
const canvas = document.getElementById('fundo');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const estrelas = [];
for (let i = 0; i < 100; i++) {
  estrelas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
  });
}

function animarFundo() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let estrela of estrelas) {
    ctx.beginPath();
    ctx.arc(estrela.x, estrela.y, estrela.r, 0, Math.PI * 2);
    ctx.fillStyle = Math.random() > 0.5 ? "#ff0000" : "#0000ff";
    ctx.fill();

    estrela.x += estrela.dx;
    estrela.y += estrela.dy;

    if (estrela.x < 0 || estrela.x > canvas.width) estrela.dx *= -1;
    if (estrela.y < 0 || estrela.y > canvas.height) estrela.dy *= -1;
  }
  requestAnimationFrame(animarFundo);
}
animarFundo();
