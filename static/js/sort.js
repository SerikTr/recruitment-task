

//--> Function for clear input field and selected radio buttons <--//
function clearSelection() {
  const radioBtn = document.querySelectorAll('input[type="radio"]')
  radioBtn.forEach(btn => {
    if(btn.checked  || searchBar.value > 0){
      btn.checked = false
      searchBar.value = ''

    }
  })
}
