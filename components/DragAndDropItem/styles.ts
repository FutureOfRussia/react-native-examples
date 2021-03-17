import { StyleSheet } from 'react-native'

import { shadow } from '../../helpers/Utilities'
import { Colors } from '../../constants'
import { MARGIN, SIZE } from './config'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: SIZE,
    height: SIZE,
    ...shadow(),
  },
  item: {
    margin: MARGIN,
    borderRadius: MARGIN,
    backgroundColor: Colors.WHITE,
    overflow: 'hidden',
  },
})
