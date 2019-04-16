const BASE_URL = 'http://localhost:3000/api/v1/users'

const userAdapter = {
  // index: () => fetch(BASE_URL).then(res => res.json()),
  create: (user) => fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(res => res.json()),

  // show: (id) => fetch().then(res => res.json())
}

export default userAdapter
