import { StyleSheet } from 'react-native'

import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'

export default StyleSheet.create({
  sectionContainer: {
    backgroundColor: Colors.TRANSPARENT,
    marginTop: px(20),
  },
  sectionLabel: {
    marginTop: px(10),
    fontSize: px(16),
    paddingHorizontal: px(15),
    textTransform: 'uppercase',
  },
  section: {
    marginTop: px(15),
    borderTopWidth: px(1),
    borderBottomWidth: px(1),
  },
})
