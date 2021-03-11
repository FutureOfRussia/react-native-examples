import { StyleSheet } from 'react-native'

import { px, width } from '../../helpers/Dimensions'
import { shadow } from '../../helpers/Utilities'
import { Colors } from '../../constants'

export const ITEM_MARGIN = px(15)
export const ITEM_WIDTH = width(55)
export const INDICATOR_WIDTH = width(50)
export const INDICATOR_MARGIN = (ITEM_WIDTH - INDICATOR_WIDTH) / 2

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: px(24),
    color: Colors.ACTIVE,
    position: 'absolute',
    top: px(15),
    left: px(15),
  },
  carousel: {
    paddingTop: px(60),
    paddingBottom: px(30),
  },
  activeIndicator: {
    left: 0,
    bottom: px(15),
    position: 'absolute',
    width: INDICATOR_WIDTH,
    height: px(2),
    borderRadius: px(1),
    backgroundColor: Colors.ACTIVE,
    ...shadow({ shadowOpacity: 0.3, elevation: 5 }),
  },
  itemContainer: {
    ...shadow(),
  },
  item: {
    width: ITEM_WIDTH,
    height: px(170),
    marginHorizontal: ITEM_MARGIN,
    backgroundColor: Colors.WHITE,
    borderRadius: px(5),
    overflow: 'hidden',
  },
  imageContainer: {
    width: ITEM_WIDTH,
    height: px(110),
    borderTopRightRadius: px(5),
    borderTopLeftRadius: px(5),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    height: px(25),
    paddingHorizontal: px(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.ACTIVE,
    borderTopLeftRadius: px(5),
    borderBottomRightRadius: px(5),
    ...shadow({ shadowOpacity: 0.3, elevation: 1 }),
  },
  badgeText: {
    fontSize: px(12),
    color: Colors.WHITE,
  },
  text: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: px(7.5),
    paddingHorizontal: px(15),
    borderTopWidth: px(0.5),
    borderTopColor: Colors.black(0.1),
  },
  itemTitle: {
    fontSize: px(18),
    fontWeight: 'bold',
    color: Colors.ACTIVE,
  },
  description: {
    fontSize: px(13),
    color: Colors.black(0.5),
  },
})
