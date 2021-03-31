window.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('searchBar')


//--> Function for search channel <--//
  function searchChannel() {
    searchBar.addEventListener('input', (e) => {
      const searchString = e.target.value.toUpperCase().trim()
      const channelsContainer = document.querySelector('.wrapper__content')
      const channels = channelsContainer.getElementsByClassName('inner__content')
      const suggestion = document.querySelector('.suggestions')
      const array = []
      for (let i = 0; i < channels.length; i++) {
        let title = channels[i].querySelector('.title__content')
        if (title.innerText.toUpperCase().indexOf(searchString) > -1) {
          channels[i].style.display = ""
          let str = title.innerText
          title.innerHTML = insertMark(str, title.innerText.toUpperCase().indexOf(searchString), searchString.length)
          if (searchString.length > 0) {
            array.push(title.innerText)
          }
        } else {
          channels[i].style.display = "none"
        }
      }
      let html = array.map(title =>
        `<div class="suggestion__item">${title}</div>`
      ).join('')
      suggestion.innerHTML = html
    })
  }

  searchChannel()

//--> Function for color the search element <--//
  function insertMark(string, pos, len) {
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len)
  }
})
















