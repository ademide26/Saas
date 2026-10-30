import { reactive } from 'vue'

export const cartStore = reactive({
  items: []
})

export function addTocart(product) {
  const existingItem = cartStore.items.find(item => item.id === product.id)

  if (existingItem) {
    existingItem.quantity++
    existingItem.checked = true
  } else {
    cartStore.items.push({ ...product, quantity: 1, checked: true })
  }

  saveCart()
}

export function increaseQty(id) {
  const item = cartStore.items.find(item => item.id === id)
  if (item) item.quantity++
  saveCart()
}

export function decreaseQty(id) {
  const item = cartStore.items.find(item => item.id === id)
  if (item && item.quantity > 1) item.quantity--
  saveCart()
}

export function removeItem(id) {
  cartStore.items = cartStore.items.filter(item => item.id !== id)
  saveCart()
}

export function isInCart(id) {
  return cartStore.items.some(item => item.id === id)
}

export function toggleItem(id) {
  const item = cartStore.items.find(item => item.id === id)
  if (item) item.checked = !item.checked
  saveCart()
}

export function setAllChecked(value) {
  cartStore.items.forEach(item => {
    item.checked = value
  })
  saveCart()
}

export function removeCheckedItems() {
  cartStore.items = cartStore.items.filter(item => !item.checked)
  saveCart()
}
export function cartitemCount() {
  return cartStore.items.reduce((total, item) => total + item.quantity, 0)
}

export function cartTotal() {
  return cartStore.items.reduce((total, item) => total + item.price * item.quantity, 0)
}
export function selectedCount() {
  return cartStore.items
    .filter(item => item.checked)
    .reduce((total, item) => total + item.quantity, 0)
}

export function selectedTotal() {
  return cartStore.items
    .filter(item => item.checked)
    .reduce((total, item) => total + item.price * item.quantity, 0)
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cartStore.items))
}

function loadCart() {
  const saved = localStorage.getItem('cart')
  if (saved) {
    cartStore.items = JSON.parse(saved).map(item => ({
      ...item,
      checked: item.checked ?? true
    }))
  }
}

loadCart()
