import { URLS } from "../utils/constants"

export async function fetchUsers() {
  return (await fetch(URLS.users)).json()
}
