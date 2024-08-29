import React from 'react'
import { tagType, thirdweb } from '../assets'
import { daysLeft } from '../utils'

const FundCard = ({owner, title, description, target, deadine, amountCollected, image, handleClick}) => {
    const remainingDays = daysLeft(deadine)
  return (
    <div>
      FundCard
    </div>
  )
}

export default FundCard
