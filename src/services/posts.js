import { URLS } from "../utils/constants"

export async function fetchPosts() {
  return (await fetch(URLS.posts)).json()
}

export async function fetchOnePost(id) {
  return (await fetch(`${URLS.posts}/${id}`)).json()
}
