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


function showCardsChannels(results) {
  const html = results.map((channel) => {
    return `<div class="inner__content"><a href="${channel.customUrl}" target="_blank">
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