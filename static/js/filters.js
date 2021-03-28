const searchBar = document.getElementById('searchBar')


//--> Function for search channel <--//
async function searchChannel() {
  searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toUpperCase()
    const channelsContainer = document.querySelector('.wrapper__content')
    const channels = channelsContainer.getElementsByClassName('inner__content')
    for (let i = 0; i < channels.length; i++) {
      let title = channels[i].querySelector('.title__content')
      if (title.innerText.toUpperCase().indexOf(searchString) > -1) {
        channels[i].style.display = ""
        let str = title.innerText
        title.innerHTML = insertMark(str, title.innerText.toUpperCase().indexOf(searchString), searchString.length)
      } else {
        channels[i].style.display = "none"
      }
    }
  })
}

//--> Function for color the search element <--//
function insertMark(string, pos, len) {
  return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len)
}











