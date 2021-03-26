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

fetchData('GET', requestUrl)
    .then(result => {
        const html = result.map((channel) => {
            console.log(channel.thumbnails.default.url)

            return ` <div class="inner__content"><a href="${channel.customUrl}" target="_blank">
                        <img class="channel__logo" src="${channel.thumbnails.medium.url}" alt="${channel.title + ' logo'}"></a>
                        <h3>${channel.title}</h3>
                        <ul class="channel__description">
                            <li>
                                <span class="heading__description">Subscribes:</span><br>
                                <span>${channel.statistics.subscriberCount}</span>
                            </li>
                            <li>
                                <span class="heading__description">Videos:</span><br>
                                <span>${channel.statistics.videoCount}</span>
                            </li>
                            <li>
                                <span class="heading__description">Views:</span><br>
                                <span>${channel.statistics.viewCount}</span>
                            </li>
                        </ul></div>
                    `
        }).join('')
        channels.innerHTML = `
        <div class="wrapper__content">${html}</div>
        `
    })
    .catch( e => console.error('Critical failure: ' + e.message))

