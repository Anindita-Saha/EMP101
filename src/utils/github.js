const GITHUB_API = 'https://api.github.com'

export async function fetchGithubProfile(username) {
  const res = await fetch(`${GITHUB_API}/users/${username}`)
  if (!res.ok) throw new Error('Failed to load GitHub profile')
  return res.json()
}

export async function fetchGithubRepos(username, count = 6) {
  const res = await fetch(
    `${GITHUB_API}/users/${username}/repos?sort=updated&per_page=${count}`
  )
  if (!res.ok) throw new Error('Failed to load GitHub repositories')
  return res.json()
}
