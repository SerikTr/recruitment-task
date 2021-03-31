window.addEventListener('DOMContentLoaded', () => {
  const btnContrast = document.getElementById('contrast__btn')

  document.getElementById('contrast__btn').addEventListener('click', (e) => {
    document.querySelector('.wrapper').classList.toggle('change-bg__color')
    document.querySelector('.header').classList.toggle('header__contrast')
    if (btnContrast.innerText === 'CONTRAST COLOR') {
      btnContrast.innerText = 'REMOVE CONTRAST'
    } else {
      btnContrast.innerText = 'CONTRAST COLOR'
    }
  })
})
