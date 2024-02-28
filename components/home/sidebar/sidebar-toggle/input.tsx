"use client"
import { setCookie } from "@/actions/set-cookie"
import React, { useState } from "react"

interface Props {
  checked: string
}

const useInput = (checked: string) => {
  const cleanChecked = checked == "true" ? false : true
  const [isChecked, setIsChecked] = useState<boolean>(cleanChecked)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setIsChecked(!isChecked)
    console.log("mudou")

    setCookie({
      name: "sidebar-open",
      value: `${isChecked}`,
    })
  }

  return { isChecked, handleChange }
}

export default function Input({ checked }: Props) {
  const { isChecked, handleChange } = useInput(checked)

  return (
    <input
      type="checkbox"
      id="aside-toggle"
      className="peer hidden"
      checked={!isChecked}
      onChange={handleChange}
    />
  )
}
