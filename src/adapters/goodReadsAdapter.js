// const grApiKey = process.env.REACT_APP_GOOD_READS_API_KEY
// const GOOD_READS_URL = `https://www.goodreads.com/search/index.xml?key=${grApiKey}&q=`

const SEARCH_BASE_URL = 'http://localhost:3000/api/v1/book_search'

const goodReadsAdapter = {
  search: (term, token) => fetch(SEARCH_BASE_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': token},
    body: JSON.stringify({search_term: term})
  })
    .then(res => res.json())
  // show: (id) => fetch().then(res => res.json())
}

export default goodReadsAdapter
