
const getResponse = (fetch) => fetch.then(res => res.json())

export const getUserRepositories = (user) => getResponse(fetch(`https://api.github.com/users/${user}/repos`))
export const getUserInfo = (user) => getResponse(fetch(`https://api.github.com/users/${user}`))