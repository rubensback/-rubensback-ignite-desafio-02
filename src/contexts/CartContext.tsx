import { createContext, ReactNode, useCallback, useReducer } from 'react'
import {
  addNewCoffeeAction,
  increaseCurrentCoffeeAction,
} from '../reducers/cart/actions'
import { cartReducer, Coffee } from '../reducers/cart/reducer'

interface CartContextType {
  coffees: Coffee[]
  addCoffeeToCart: (data: Coffee) => void
  increaseCurrentCoffee: (id: number, qty: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [coffeesState, dispatch] = useReducer(cartReducer, {
    coffees: [],
  })

  const { coffees } = coffeesState

  const increaseCurrentCoffee = useCallback((id: number, qty: number) => {
    dispatch(increaseCurrentCoffeeAction(id, qty))
  }, [])

  const addCoffeeToCart = useCallback(
    (newCoffee: Coffee) => {
      const coffeAlreadyAdded = coffees.find(({ id }) => id === newCoffee.id)
      if (coffeAlreadyAdded) increaseCurrentCoffee(newCoffee.id, newCoffee.qty)
      else dispatch(addNewCoffeeAction(newCoffee))
    },
    [coffees, increaseCurrentCoffee],
  )

  console.log('coffees', coffees)

  return (
    <CartContext.Provider
      value={{
        coffees,
        addCoffeeToCart,
        increaseCurrentCoffee,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
