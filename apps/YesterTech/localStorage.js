/**
 * Auth
 */

const LOCAL_STORAGE_KEY_AUTH = 'reacttraining-workshop-auth'

export function login(user) {
  localStorage.setItem(LOCAL_STORAGE_KEY_AUTH, JSON.stringify(user))
}

export function logout() {
  localStorage.setItem(LOCAL_STORAGE_KEY_AUTH, null)
}

export function getAuthenticatedUser() {
  try {
    const localStorageUser = localStorage.getItem(LOCAL_STORAGE_KEY_AUTH)
    if (!localStorageUser) return
    return JSON.parse(localStorageUser)
  } catch (e) {
    return
  }
}

/**
 * Cart
 */

const LOCAL_STORAGE_KEY_CART = 'reacttraining-workshop-cart'

export function updateCart(cart) {
  localStorage.setItem(LOCAL_STORAGE_KEY_CART, JSON.stringify(cart))
}

export function getCart() {
  try {
    const cart = localStorage.getItem(LOCAL_STORAGE_KEY_CART)
    if (!cart) return
    return JSON.parse(cart)
  } catch (e) {
    return
  }
}

/**
 * Favorites
 */

const LOCAL_STORAGE_KEY_FAVORITES = 'reacttraining-workshop-favorites'

export function updateFavorites(favorites) {
  localStorage.setItem(LOCAL_STORAGE_KEY_FAVORITES, JSON.stringify(favorites))
}

export function getFavorites() {
  try {
    const favorites = localStorage.getItem(LOCAL_STORAGE_KEY_FAVORITES)
    if (!favorites) return []
    return JSON.parse(favorites)
  } catch (e) {
    return
  }
}
