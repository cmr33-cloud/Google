const googlesearch = document.getElementById('googlesearch')

googlesearch.addEventListener('click',search)

function search(e) {
  e.preventDefault()
  fetch('http://localhost:3000/results')
    .then(resp => resp.text())
    .then(resp => document.getElementById('googlesearch').innerHTML = resp)
    

} 