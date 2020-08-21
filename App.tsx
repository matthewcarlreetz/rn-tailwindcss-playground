import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { t } from 'react-native-tailwindcss';

const App = () => (
  <SafeAreaView style={[t.hFull]}>
    <View style={[t.pT12, t.itemsCenter]}>
      <View style={[t.bgBlue200, t.p5, t.roundedFull]}>
        <Text style={[t.textBlue800, t.fontSemibold]}>Hello Tailwind</Text>
      </View>
    </View>
  </SafeAreaView>
);

export default App;
