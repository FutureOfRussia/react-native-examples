import { StyleSheet } from 'react-native'

import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'
import { shadow } from '../../helpers/Utilities'

export default StyleSheet.create({
  container: {
    paddingBottom: px(50),
  },
  imageContainer: {
    width: '100%',
    padding: px(20),
    backgroundColor: Colors.TRANSPARENT,
  },
  image: {
    width: '100%',
    height: px(280),
    marginBottom: px(20),
    backgroundColor: Colors.TRANSPARENT,
    ...shadow(),
  },
  btn: {
    height: px(50),
    width: '100%',
    borderRadius: px(25),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.ACTIVE,
    ...shadow(),
  },
  btnText: {
    fontSize: px(16),
    color: Colors.WHITE,
  },
})
