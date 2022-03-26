const btn = document.querySelector('[data-js=btn]')

btn.addEventListener('click', () => {
  const select = document.querySelector('[data-js=select]')
  select.value === ''
    ? alert('Selecione um nível para iniciar o jogo')
    : window.location.href = `./app.html?level=${select.value}`
})
