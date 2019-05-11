import {
  AdMobBanner,
  AdMobInterstitial,
  AdMobRewarded,
  PublisherBanner,
} from 'expo'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { Button, Text } from 'react-native-elements'

const ADUNITID = `ca-app-pub-1425926517331745~6816357585`
const BANNER_ID = `ca-app-pub-1425926517331745/4139536433`
const INTERSTITIAL_ID = `ca-app-pub-1425926517331745/1141181467`
const REWARDED_ID = `ca-app-pub-1425926517331745/3923257478`

AdMobInterstitial.setAdUnitID(INTERSTITIAL_ID)
AdMobInterstitial.setTestDeviceID('EMULATOR')
AdMobRewarded.setAdUnitID(REWARDED_ID)
AdMobRewarded.setTestDeviceID('EMULATOR')

class App extends Component {
  _openInterstitial = async () => {
    await AdMobInterstitial.requestAdAsync()
    await AdMobInterstitial.showAdAsync()
  }

  _openRewarded = async () => {
    await AdMobRewarded.requestAdAsync()
    await AdMobRewarded.showAdAsync()
  }

  render() {
    return (
      <SafeAreaView style={{ margin: 20 }}>
        <Text h2>GOOGLE ADMOB DEMO</Text>
        <Text>
          Set Ad Unit Id, Interstitial Id & Rewarded Id only on the top level
          component once.
        </Text>
        <Text h4>Banner Ad</Text>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID={BANNER_ID}
          didFailToReceiveAdWithError={this.bannerError}
        />
        <Text h4>Publisher Banner</Text>
        <PublisherBanner
          bannerSize="banner"
          adUnitID={BANNER_ID}
          onDidFailToReceiveAdWithError={this.bannerError}
          onAdMobDispatchAppEvent={this.adMobEvent}
        />
        <Text h4>Interstitial Ad</Text>
        <Button title="Open" type="outline" onPress={this._openInterstitial} />
        <Text h4>Rewarded Ad</Text>
        <Button title="Open" type="outline" onPress={this._openRewarded} />
      </SafeAreaView>
    )
  }
}

export default App
