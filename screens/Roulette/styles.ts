import { StyleSheet } from 'react-native'

import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prizeBlock: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: px(25),
  },
  prizeText: {
    fontSize: px(24),
    color: Colors.BLACK,
  },
})
