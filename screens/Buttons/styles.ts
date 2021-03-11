import { StyleSheet } from 'react-native'

import { shadow } from '../../helpers/Utilities'
import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    paddingBottom: px(50),
  },
  section: {
    padding: px(20),
  },
  btn: {
    width: '100%',
    height: px(60),
    backgroundColor: Colors.ACTIVE,
    borderRadius: px(32.5),
    justifyContent: 'center',
    alignItems: 'center',
    ...shadow(),
  },
  btnText: {
    fontSize: px(20),
    color: Colors.WHITE,
  },
})
