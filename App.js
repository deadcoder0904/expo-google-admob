import { AdMobBanner, AdMobInterstitial, AdMobRewarded, PublisherBanner } from "expo";
import React, { Component } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

const ADUNITID = `ca-app-pub-1425926517331745~6816357585`;
const BANNER_ID = `ca-app-pub-1425926517331745/4139536433`;
const INTERSTITIAL_ID = `ca-app-pub-1425926517331745/1141181467`;
const REWARDED_ID = `ca-app-pub-1425926517331745/3923257478`;

AdMobInterstitial.setAdUnitID(INTERSTITIAL_ID);
AdMobInterstitial.setTestDeviceID("EMULATOR");
AdMobRewarded.setAdUnitID(REWARDED_ID);
AdMobRewarded.setTestDeviceID("EMULATOR");
console.disableYellowBox = true;

class App extends Component {
  _openInterstitial = async () => {
    await AdMobInterstitial.requestAdAsync();
    await AdMobInterstitial.showAdAsync();
  };

  _openRewarded = async () => {
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>GOOGLE ADMOB DEMO</Text>
          <Text style={styles.text}>
            Set Ad Unit Id, Interstitial Id & Rewarded Id only on the top level
            component once.
          </Text>
          <Text style={styles.title}>BANNER AD</Text>
          <AdMobBanner
            bannerSize="fullBanner"
            adUnitID={BANNER_ID}
            didFailToReceiveAdWithError={this.bannerError}
          />

          <Text style={styles.title}>PUBLISHER BANNER</Text>
          <PublisherBanner
            bannerSize="banner"
            adUnitID={BANNER_ID}
            onDidFailToReceiveAdWithError={this.bannerError}
            onAdMobDispatchAppEvent={this.adMobEvent}
          />
          <View style={styles.btn}>
            <Text style={styles.title}>INTERSTITIAL AD</Text>
            <Button
              title="OPEN"
              color="steelblue"
              onPress={this._openInterstitial}
            />
          </View>
          <View style={styles.btn}>
            <Text style={styles.title}>REWARDED AD</Text>
            <Button title="OPEN" color="green" onPress={this._openRewarded} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 30
  },
  btn: {
    margin: 7
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    color: "#000",
    backgroundColor: "#eee333",
    padding: 10,
    margin: 10
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    color: "#333"
  }
});

export default App;
