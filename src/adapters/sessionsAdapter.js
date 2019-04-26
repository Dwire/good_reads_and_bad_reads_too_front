const SESSION_BASE_URL = 'http://localhost:3000/api/v1/'

const sessionsAdapter = {
  login: (user) => fetch(SESSION_BASE_URL + 'login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
          body: JSON.stringify(user)
        })
        .then(res => res.json()),
  reauth: (token) => fetch(SESSION_BASE_URL + 'reauth', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': token},
          })
          .then(res => res.json()),
  // show: (id) => fetch().then(res => res.json())
}

export default sessionsAdapter
