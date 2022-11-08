import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  INCREASE_CURRENT_COFFEE = 'INCREASE_CURRENT_COFFEE',
  DECREASE_CURRENT_COFFEE = 'DECREASE_CURRENT_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  CLEAR_ALL_COFFEES = 'CLEAR_ALL_COFFEES',
}

interface addNewCoffeeActionProps {
  type: ActionTypes.ADD_NEW_COFFEE
  payload: { newCoffee: Coffee }
}

interface increaseCurrentCoffeeActionProps {
  type: ActionTypes.INCREASE_CURRENT_COFFEE
  payload: { id: number; increaseQty: number }
}

interface decreaseCurrentCoffeeActionProps {
  type: ActionTypes.DECREASE_CURRENT_COFFEE
  payload: { id: number; decreaseQty: number }
}

interface removeCoffeeProps {
  type: ActionTypes.REMOVE_COFFEE
  payload: { id: number }
}

interface clearAllCoffeesProps {
  type: ActionTypes.CLEAR_ALL_COFFEES
}

export type ActionsProps =
  | addNewCoffeeActionProps
  | increaseCurrentCoffeeActionProps
  | decreaseCurrentCoffeeActionProps
  | removeCoffeeProps
  | clearAllCoffeesProps

export const addNewCoffeeAction = (
  newCoffee: Coffee,
): addNewCoffeeActionProps => ({
  type: ActionTypes.ADD_NEW_COFFEE,
  payload: {
    newCoffee,
  },
})

export const increaseCurrentCoffeeAction = (
  id: number,
  increaseQty: number,
): increaseCurrentCoffeeActionProps => ({
  type: ActionTypes.INCREASE_CURRENT_COFFEE,
  payload: {
    id,
    increaseQty,
  },
})

export const decreaseCurrentCoffeeAction = (
  id: number,
  decreaseQty: number,
): decreaseCurrentCoffeeActionProps => ({
  type: ActionTypes.DECREASE_CURRENT_COFFEE,
  payload: {
    id,
    decreaseQty,
  },
})

export const removeCoffeeAction = (id: number): removeCoffeeProps => ({
  type: ActionTypes.REMOVE_COFFEE,
  payload: { id },
})

export const clearAllCoffeesAction = (): clearAllCoffeesProps => ({
  type: ActionTypes.CLEAR_ALL_COFFEES,
})
