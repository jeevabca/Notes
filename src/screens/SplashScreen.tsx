import {SafeAreaView, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../constants/Colors';
import {FONT_SIZE} from '../constants/FontSize';
import {SCREENS} from '../constants/ScreenNames';

const SplashScreen: React.FC<{navigation: any}> = ({navigation}) => {
  useEffect(() => {
    setTimeout(async () => {
      navigation.replace(SCREENS.HOMESCREEN);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.PRIMARY}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: COLORS.WHITE,
            fontSize: FONT_SIZE.font_36,
            fontWeight: '700',
          }}>
          Gramonotes
        </Text>
        {/* <Image source={ require( '../../Assets/Logo/GramoMart.png')} style={{ width: '90%', height: 100,  }} resizeMode="contain" /> */}
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
