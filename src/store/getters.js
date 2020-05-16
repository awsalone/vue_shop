/*
包含多个基于state的get计算属性

*/
export default {
  totalCount (state) {
    return state.cartFoods.reduce((pre, food) => pre + food.count, 0)
  },
  totalPrice (state) {
    return state.cartFoods.reduce((pre, food) => pre + food.count * food.price, 0)
  },
  positiveType (state) {
    return state.ratings.reduce((pre, rate) => pre + (rate.rateType === 0 ? 1 : 0), 0)
  }
}
