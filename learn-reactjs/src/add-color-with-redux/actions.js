export const addColorAction = ({ title, color }) => ({
  type: 'ADD-COLOR',
  id: (Math.random() + 1).toString(36).substring(7),
  title,
  color,
  rating: 0,
})
export const deleteColor = (id) => ({ type: 'DEL_COLOR', id })
export const rating = (id, rating) => ({ type: 'RATING', id, rating })
// var id = (Math.random() + 1).toString(36).substring(7)
//   console.log(id)
//   const newColors = [{ id, title, color, rating: 0 }, ...colors]
