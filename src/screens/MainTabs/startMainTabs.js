import { Navigation } from 'react-native-navigation'

import Icon from '../../../node_modules/react-native-vector-icons/Ionicons'

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", size = 30),
    Icon.getImageSource("md-share", size = 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-places.FindPlaceScreen",
          label : "Find Place",
          title : "Find Place",
          icon  : sources[0]
        },
        {
          screen: "awesome-places.SharePlaceScreen",
          label : "Share Place",
          title : "Share Place",
          icon  : sources[1]
        }
      ]
    })
  })

}

export default startTabs
