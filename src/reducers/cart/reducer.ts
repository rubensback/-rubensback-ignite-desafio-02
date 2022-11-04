import { ActionsProps, ActionTypes } from './actions'

export interface Coffee {
  id: number
  imagePath: string
  types: string[]
  name: string
  description: string
  price: number
  qty: number
}

interface CartState {
  coffees: Coffee[]
}

export const cartReducer = (state: CartState, action: ActionsProps) => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE:
      return { ...state, coffees: [...state.coffees, action.payload.newCoffee] }

    case ActionTypes.INCREASE_CURRENT_COFFEE: {
      const currentCoffeeIndex = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.id,
      )
      const newList = [...state.coffees]
      newList[currentCoffeeIndex] = {
        ...newList[currentCoffeeIndex],
        qty: newList[currentCoffeeIndex].qty + action.payload.increaseQty,
      }
      return { ...state, coffees: newList }
    }

    default:
      return state
  }
}
