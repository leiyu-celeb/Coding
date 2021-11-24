import { square } from './a.mjs'
export let count = 1
try {
  setTimeout(() => {
    count++
    console.log(square(count))
  }, 500)
  console.log(square(count))
} catch (error) {
  console.log(error)
}