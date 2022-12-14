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

    case ActionTypes.DECREASE_CURRENT_COFFEE: {
      const currentCoffeeIndex = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.id,
      )
      const newList = [...state.coffees]
      newList[currentCoffeeIndex] = {
        ...newList[currentCoffeeIndex],
        qty: newList[currentCoffeeIndex].qty - action.payload.decreaseQty,
      }
      console.log(
        'decrease',
        newList[currentCoffeeIndex],
        action.payload.decreaseQty,
      )
      return { ...state, coffees: newList }
    }

    case ActionTypes.REMOVE_COFFEE: {
      const newList = state.coffees.filter(({ id }) => id !== action.payload.id)
      return {
        ...state,
        coffees: newList,
      }
    }

    case ActionTypes.CLEAR_ALL_COFFEES:
      return { ...state, coffees: [] }

    default:
      return state
  }
}
