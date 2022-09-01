import { API_KEY, BASE_URL, IMG_URL, language, } from './api.js'

function getMovie() {

  const container = document.getElementById('movie-container')
  hideMovie(container)

  axios.get(`${BASE_URL}${generateID()}?${API_KEY}&${language}`)
  .then(response => {
    poster.src = `${IMG_URL}${response.data.poster_path}`
    titleMovie.textContent = response.data.title
    resumeMovie.textContent = response.data.overview
  })
  .catch( error => {
    console.error(error)
    poster.src = "https://images.unsplash.com/photo-1599837565318-67429bde7162?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRldnxlbnwwfHwwfHw%3D&w=1000&q=80"
    titleMovie.textContent = "Ops, hoje não é dia de assistir filme. Bora codar! 🚀"
    resumeMovie.textContent = ""
  })

  visibleMovie(container)
}

function visibleMovie(container) {
  container.classList.remove('not-visible')
  container.classList.add('visible')
}

function hideMovie(container) {
  container.classList.add('not-visible')
}

function generateID() {
  const movieid = Math.floor(Math.random() * 1000 + 1);
  return movieid;
}

const btn = document.getElementById("btn");
btn.addEventListener("click", getMovie)
