import { StyleSheet } from 'react-native'

import { shadow } from '../../helpers/Utilities'
import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.TRANSPARENT,
    ...shadow(),
  },
  box: {
    width: px(25),
    height: px(25),
    borderRadius: px(5),
    marginRight: px(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.ACTIVE,
  },
  label: {
    fontSize: px(15),
    fontWeight: '500',
    textAlign: 'center',
  },
})
