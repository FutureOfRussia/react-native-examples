import { Platform, StyleSheet } from 'react-native'

import { px, width } from '../../helpers/Dimensions'
import { shadow } from '../../helpers/Utilities'
import { Colors } from '../../constants'

export const RADIUS = width(45)
export const DIAMETER = RADIUS * 2

export default StyleSheet.create({
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: DIAMETER,
    height: DIAMETER,
    borderRadius: RADIUS,
    backgroundColor: Colors.ACTIVE,
  },
  rouletteBlock: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RADIUS,
    ...Platform.select({ ios: { ...shadow() } }),
  },
  indicator: {
    right: 0,
    zIndex: 100,
    position: 'absolute',
    borderWidth: px(20),
    borderRightWidth: px(45),
    borderRightColor: Colors.BLACK,
    borderTopColor: Colors.TRANSPARENT,
    borderLeftColor: Colors.TRANSPARENT,
    borderBottomColor: Colors.TRANSPARENT,
    ...Platform.select({ ios: { ...shadow() } }),
  },
  uiBlock: {
    zIndex: 50,
    position: 'absolute',
    ...Platform.select({ ios: { ...shadow() } }),
  },
  costsBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: px(5),
  },
  cost: {
    height: px(30),
    minWidth: px(40),
    marginHorizontal: px(5),
    borderRadius: px(15),
    backgroundColor: Colors.ACTIVE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  costText: {
    fontSize: px(14),
    color: Colors.WHITE,
    textAlign: 'center',
  },
  text: {
    fontSize: px(12),
    fontWeight: 'bold',
    color: Colors.WHITE,
    textAlign: 'center',
  },
  button: {
    borderRadius: px(25),
    marginTop: px(15),
    width: px(200),
    height: px(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.ACTIVE,
  },
  buttonText: {
    fontSize: px(16),
    color: Colors.WHITE,
    textAlign: 'center',
  },
})
