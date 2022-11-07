import { createContext, ReactNode, useCallback, useState } from 'react'
import { checkoutFormData } from '../pages/Checkout'

type Address = checkoutFormData

interface AddressContextType {
  address: Address
  saveAddress: (address: Address) => void
}

export const AddressContext = createContext({} as AddressContextType)

interface AddressContextProviderProps {
  children: ReactNode
}

export const AddressContextProvider = ({
  children,
}: AddressContextProviderProps) => {
  const [address, setAddress] = useState<Address>(() => {
    const localAddress = localStorage.getItem('@coffee-delivery:address-1.0.0')
    return localAddress ? JSON.parse(localAddress) : {}
  })

  const saveAddress = useCallback((address: Address) => {
    localStorage.setItem(
      '@coffee-delivery:address-1.0.0',
      JSON.stringify(address),
    )
    setAddress(address)
  }, [])

  return (
    <AddressContext.Provider
      value={{
        address,
        saveAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  )
}
