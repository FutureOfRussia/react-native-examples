import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { View } from 'react-native'

import ValidatorProps, { ValidationData } from './types'

function Validator({ children, data, style = {} }: ValidatorProps, ref: React.ForwardedRef<unknown>) {
  const [valid, setValid] = useState(false)

  useImperativeHandle(ref, () => ({
    valid: () => {
      if (Object.values(getValidations(true)).every(el => el)) {
        return true
      }
      setValid(true)
      return false
    },
  }))

  const isValid = ({ type, value, additionalValue }: ValidationData, _valid: boolean) => {
    if (_valid) {
      if (type === 'support') {
        return Number(value) > 0 && Number(additionalValue) > 0 && Number(value) > Number(additionalValue)
      }
      if (type === 'email') return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
      if (type === 'password') return value.length >= 6 && value.length <= 16
      if (type === 'name') return value.length > 0
      if (type === 'confirmPassword') return value.length >= 6 && value.length <= 16 && value === additionalValue
      return undefined
    }
    return undefined
  }

  const getValidations = (_valid: boolean) => Object.fromEntries(data.map(el => [el.type, isValid(el, _valid)]))

  return <View style={style}>{children(getValidations(valid))}</View>
}

export default forwardRef((props: ValidatorProps, ref) => Validator(props, ref))
