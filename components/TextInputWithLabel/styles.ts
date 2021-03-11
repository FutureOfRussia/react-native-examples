import { Platform, StyleSheet } from 'react-native'

import { shadow } from '../../helpers/Utilities'
import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    height: px(60),
    justifyContent: 'flex-end',
    marginVertical: px(12.5),
  },
  labelBlock: {
    position: 'absolute',
    height: px(20),
    paddingHorizontal: px(2.5),
    borderRadius: px(2),
    backgroundColor: Colors.ACTIVE,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
    left: px(10),
    top: 0,
    ...shadow({ shadowOpacity: 0.3, elevation: 2 }),
  },
  label: {
    fontSize: px(12),
    fontWeight: '600',
    color: Colors.WHITE,
  },
  content: {
    flexDirection: 'row',
    width: '100%',
    height: px(50),
    backgroundColor: Colors.WHITE,
    borderRadius: px(5),
    borderWidth: px(1),
    ...Platform.select({ ios: shadow({ shadowOpacity: 0.1 }) }),
  },
  input: {
    flex: 1,
    paddingHorizontal: px(16),
    borderRadius: px(5),
    overflow: 'hidden',
    fontSize: px(14),
    color: Colors.BLACK,
  },
  btnBlock: {
    paddingHorizontal: px(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    paddingHorizontal: px(4),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
