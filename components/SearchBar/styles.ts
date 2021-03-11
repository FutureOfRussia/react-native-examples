import { Platform, StyleSheet } from 'react-native'

import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'
import { shadow } from '../../helpers/Utilities'

export default StyleSheet.create({
  container: {
    marginVertical: px(15),
    backgroundColor: Colors.WHITE,
    width: '100%',
    height: px(40),
    borderRadius: px(20),
    borderWidth: px(1),
    borderColor: Colors.black(0.15),
    ...Platform.select({ ios: shadow({ shadowOpacity: 0.1 }) }),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: px(15),
  },
  input: {
    flex: 1,
    marginHorizontal: px(7.5),
  },
})
