import { useState } from 'react'

export const useDetails = () => {
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false)

  const openDetail = () => {
    if (isOpenDetail) return
    setIsOpenDetail(true)
  }

  const closeDetail = () => {
    setIsOpenDetail(false)
  }

  return {
    isOpenDetail,
    openDetail,
    closeDetail
  }
}
