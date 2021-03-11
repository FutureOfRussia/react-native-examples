import { StyleSheet } from 'react-native'

import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.black(0.1),
    overflow: 'hidden',
  },
  placeholder: {
    flex: 1,
    backgroundColor: Colors.black(0.1),
  },
})
