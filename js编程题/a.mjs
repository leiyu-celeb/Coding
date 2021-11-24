import { count } from './b.mjs'
export const square = (num) => num * num
try {
  setTimeout(() => {
    console.log(count)
    console.log(count++)
  }, 500)
  console.log(count)
} catch (error) {
  console.log(error)
}