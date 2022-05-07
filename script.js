const hora = document.querySelector('.hora');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

const diaSpan = document.querySelector('.dia');
const mesSpan = document.querySelector('.mes');
const anoSpan = document.querySelector('.ano');

function diaMesAno() {
  const data = new Date();
  const dia = data.getDate();
  const mes = data.getMonth();
  const ano = data.getFullYear();

  if (dia < 10) {
    diaSpan.innerHTML = `0${dia} / `;
  } else {
    diaSpan.innerHTML = `${dia} / `;
  }

  if (mes < 10) {
    mesSpan.innerHTML = `0${mes + 1} / `;
  } else {
    mesSpan.innerHTML = `${mes + 1} / `;
  }

  anoSpan.innerHTML = `${ano}`;
}

function atualizaHour() {
  const data = new Date();
  const horas = data.getHours();
  if (horas < 10) {
    hora.innerHTML = `0${horas}`;
  } else {
    hora.innerHTML = `${horas}`;
  }

  return horas;
}

function atualizaMin() {
  const data = new Date();
  const minutos = data.getMinutes();

  if (minutos < 10) {
    min.innerHTML = ` : 0${minutos} : `;
  } else {
    min.innerHTML = ` : ${minutos} : `;
  }

  return minutos;
}

function atualizaSec() {
  const data = new Date();
  const segundos = data.getSeconds();

  if (segundos < 10) {
    sec.innerHTML = `0${segundos}`;
  } else {
    sec.innerHTML = `${segundos}`;
  }

  return segundos;
}

function atualizaRelogio() {
  const segundoAtualizado = atualizaSec();
  const minutoAtualizado = atualizaMin();
  const horaAtualizado = atualizaHour();
  if (segundoAtualizado > 59) {
    min.innerHTML = minutoAtualizado + 1;
    if (minutoAtualizado > 59) {
      hora.innerHTML = horaAtualizado + 1;
    }
  }
}

atualizaHour();
atualizaMin();
atualizaSec();
diaMesAno();
setInterval(atualizaRelogio, 1000);
