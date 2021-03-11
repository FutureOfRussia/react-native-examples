import { StyleSheet } from 'react-native'

import { px, width } from '../../helpers/Dimensions'

export default StyleSheet.create({
  container: {
    paddingBottom: px(50),
  },
  item: {
    flexDirection: 'row',
    paddingHorizontal: px(15),
    height: px(50),
    alignItems: 'center',
  },
  itemLabel: {
    flex: 1,
    fontSize: px(16),
    marginHorizontal: px(15),
  },
  itemSeparator: {
    height: px(1),
    width: width(100),
    position: 'absolute',
    top: -px(1),
  },
})
