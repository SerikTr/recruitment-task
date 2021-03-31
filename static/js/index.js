window.addEventListener('DOMContentLoaded', () => {

  const requestUrl = 'channels.json'
  const channels = document.getElementById('channels')


  function fetchData(method, url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method, url)
      xhr.responseType = 'json'
      xhr.onload = () => {
        if (xhr.status >= 400) {
          reject(xhr.response)
        } else {
          resolve(xhr.response)
        }
      }
      xhr.onerror = () => {
        reject(xhr.response)
      }
      xhr.send()
    })
  }

  // Get data and show cards in HTML
  fetchData('GET', requestUrl)
    .then(results => showCardsChannels(results))
    .catch(e => console.error('Critical failure: ' + e.message))

  function showCardsChannels(results) {

    //--> Local  variable with data <--//
    let localData = JSON.parse(JSON.stringify(results))

    //--> Revers <--//
    document.getElementById('button-reverse').addEventListener('click', () => {
      renderingCards(results.reverse())
    })
    //--> Main method <--//
    renderingCards(results)


    //--> Radio buttons <--//
    addEventListener('change', (e) => {
      if (e.target.value === 'sort-title') {
        results.sort((a, b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
          return 1
        })
        renderingCards(results)
      }
      if (e.target.value === 'sort-subscribers') {
        results.sort((a, b) => {
          return removeSigns(a.statistics.subscriberCount, b.statistics.subscriberCount)
        })
        renderingCards(results)
      }
      if (e.target.value === 'sort-videos') {
        results.sort((a, b) => {
          return removeSigns(a.statistics.videoCount, b.statistics.videoCount)
        })
        renderingCards(results)
      }
      if (e.target.value === 'sort-views') {
        results.sort((a, b) => {
          return removeSigns(a.statistics.viewCount, b.statistics.viewCount)
        })
        renderingCards(results)
      }
    })

    //--> Clear radio button and search field <--//
    document.getElementById('button-clear').addEventListener('click', (e) => {
      const radioBtn = document.querySelectorAll('input[type="radio"]')
      const suggestion = document.querySelector('.suggestions')
      if (e.target.innerText === 'CLEAR' || searchBar.value > 0) {
        radioBtn.forEach(btn => {
          if (btn.checked) {
            btn.checked = false
          }
        })
        searchBar.value = ''
        suggestion.innerHTML = ''
      }
      renderingCards(localData)
    })
  }

//--> Render page   <--//
  function renderingCards(results) {
    const html = results.map((channel) => {
      return `<div class="inner__content"><a href="${channel.customUrl} + ${utm}" target="_blank">
              <img class="channel__logo" src="${channel.thumbnails.medium.url}" alt="${channel.title + ' logo'}"></a>
              <h3 class="title__content">${channel.title}</h3>
              <ul class="channel__description">
                  <li>
                      <span class="heading__description">Subscribes:</span><br>
                      <span>${numberWithCommas(channel.statistics.subscriberCount)}</span>
                  </li>
                  <li>
                      <span class="heading__description">Videos:</span><br>
                      <span>${numberWithCommas(channel.statistics.videoCount)}</span>
                  </li>
                  <li>
                      <span class="heading__description">Views:</span><br>
                      <span>${numberWithCommas(channel.statistics.viewCount)}</span>
                  </li>
              </ul>
            </div>`
    }).join('')
    channels.innerHTML = `<div class="wrapper__content">${html}</div>`

  }


  function numberWithCommas(x) {
    x = x.replace(/[\s.,%]/g, '')
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  function removeSigns(a, b) {
    return a.replace(/[\s.,%]/g, '') - b.replace(/[\s.,%]/g, '')
  }


})





