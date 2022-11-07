import { createContext, ReactNode, useCallback, useReducer } from 'react'
import {
  addNewCoffeeAction,
  decreaseCurrentCoffeeAction,
  increaseCurrentCoffeeAction,
  removeCoffeeAction,
} from '../reducers/cart/actions'
import { cartReducer, Coffee } from '../reducers/cart/reducer'

interface CartContextType {
  coffees: Coffee[]
  addCoffeeToCart: (data: Coffee) => void
  increaseCurrentCoffee: (id: number, qty: number) => void
  decreaseCurrentCoffee: (id: number, qty: number) => void
  removeCoffee: (id: number) => void
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

  const decreaseCurrentCoffee = useCallback((id: number, qty: number) => {
    dispatch(decreaseCurrentCoffeeAction(id, qty))
  }, [])

  const addCoffeeToCart = useCallback(
    (newCoffee: Coffee) => {
      const coffeAlreadyAdded = coffees.find(({ id }) => id === newCoffee.id)
      if (coffeAlreadyAdded) increaseCurrentCoffee(newCoffee.id, newCoffee.qty)
      else dispatch(addNewCoffeeAction(newCoffee))
    },
    [coffees, increaseCurrentCoffee],
  )

  const removeCoffee = useCallback(
    (coffeeId: number) => dispatch(removeCoffeeAction(coffeeId)),
    [],
  )

  return (
    <CartContext.Provider
      value={{
        coffees,
        addCoffeeToCart,
        increaseCurrentCoffee,
        removeCoffee,
        decreaseCurrentCoffee,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
