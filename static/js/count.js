window.addEventListener('DOMContentLoaded', () => {
  function updateVisitCount() {

    fetch('https://api.countapi.xyz/update/florin-pop-test/test-site/?amount=1')
      .then(res => res.json())
      .then(res => saveData(res.value))


    function saveData(count) {
      let formatter = new Intl.DateTimeFormat('pl', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
      let date = formatter.format(new Date())

      localStorage.setItem('number_of_visits_per_page', count)
      if (localStorage.getItem('actual_visit') === null) {
        localStorage.setItem('actual_visit', date.toString())
      }
      if (localStorage.getItem('actual_visit') !== date.toString()) {
        localStorage.setItem('last_visit', localStorage.getItem('actual_visit'))
        localStorage.setItem('actual_visit', date.toString())
      }
    }
  }

  updateVisitCount()
})
