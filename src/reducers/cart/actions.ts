import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  INCREASE_CURRENT_COFFEE = 'INCREASE_CURRENT_COFFEE',
}

interface addNewCoffeeActionProps {
  type: ActionTypes.ADD_NEW_COFFEE
  payload: { newCoffee: Coffee }
}

interface increaseCurrentCoffeeActionProps {
  type: ActionTypes.INCREASE_CURRENT_COFFEE
  payload: { id: number; increaseQty: number }
}

export type ActionsProps =
  | addNewCoffeeActionProps
  | increaseCurrentCoffeeActionProps

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
