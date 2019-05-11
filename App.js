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
console.disableYellowBox = true

AdMobInterstitial.setAdUnitID(INTERSTITIAL_ID)
AdMobInterstitial.setTestDeviceID('EMULATOR')
AdMobRewarded.setAdUnitID(REWARDED_ID)
AdMobRewarded.setTestDeviceID('EMULATOR')

class App extends Component {
  state = {
    disableInterstitialBtn: false,
    disableRewardedBtn: false,
  }

  _openInterstitial = async () => {
    try {
      this.setState({ disableInterstitialBtn: true })
      await AdMobInterstitial.requestAdAsync()
      await AdMobInterstitial.showAdAsync()
    } catch (error) {
      console.error(error)
    } finally {
      this.setState({ disableInterstitialBtn: false })
    }
  }

  _openRewarded = async () => {
    try {
      this.setState({ disableRewardedBtn: true })
      await AdMobRewarded.requestAdAsync()
      await AdMobRewarded.showAdAsync()
    } catch (error) {
      console.error(error)
    } finally {
      this.setState({ disableRewardedBtn: false })
    }
  }

  render() {
    const { disableInterstitialBtn, disableRewardedBtn } = this.state
    return (
      <SafeAreaView style={{ margin: 20 }}>
        <Text h2>GOOGLE ADMOB DEMO</Text>
        <Text>
          Set Ad Unit Id, Interstitial Id & Rewarded Id only on the top level
          component once.
        </Text>
        <Text h4>Banner Ad</Text>
        <AdMobBanner bannerSize="mediumRectangle" adUnitID={BANNER_ID} />
        <Text h4>Publisher Banner</Text>
        <PublisherBanner bannerSize="banner" adUnitID={BANNER_ID} />
        <Text h4>Interstitial Ad</Text>
        <Button
          title="Open"
          type="outline"
          disabled={disableInterstitialBtn}
          onPress={this._openInterstitial}
        />
        <Text h4>Rewarded Ad</Text>
        <Button
          title="Open"
          type="outline"
          disabled={disableRewardedBtn}
          onPress={this._openRewarded}
        />
      </SafeAreaView>
    )
  }
}

export default App
