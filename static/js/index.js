window.addEventListener('DOMContentLoaded', () => {

  // Get data and show cards in HTML
  fetchData('GET', requestUrl)
    .then(results => showCardsChannels(results))
    .catch(e => console.error('Critical failure: ' + e.message))

  // function for searched channel
  searchChannel()



})