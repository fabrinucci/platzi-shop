import { useState } from 'react'

export const useNavbar = () => {
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false)
  const [isOpenCategories, setIsOpenCategories] = useState<boolean>(false)
  const [isOpenAccount, setIsOpenAccount] = useState<boolean>(false)

  const openDetail = () => {
    if (isOpenDetail) return
    setIsOpenDetail(true)
  }

  const closeDetail = () => {
    setIsOpenDetail(false)
  }

  const openCategories = () => {
    if (isOpenCategories) return
    setIsOpenCategories(true)
  }

  const closeCategories = () => {
    setIsOpenCategories(false)
  }

  const openAccount = () => {
    if (isOpenAccount) return
    setIsOpenAccount(true)
  }

  const closeAccount = () => {
    setIsOpenAccount(false)
  }

  return {
    isOpenDetail,
    openDetail,
    closeDetail,
    isOpenAccount,
    isOpenCategories,
    openAccount,
    openCategories,
    closeAccount,
    closeCategories
  }
}
