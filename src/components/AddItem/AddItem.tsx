import { SafeAreaView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants/Colors';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../constants/ScreenNames';

const { height, width } = Dimensions.get('window')
type NavigationProp = {
  navigate: (screen: string) => void;
};

const AddItem = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.addIcon}
        onPress={() =>
          navigation.navigate(SCREENS.NOTESDETAILSCREEN, {
            id: null,
            title: '',
            value: '',
          })
        }>
        <Feather name="file-plus" size={30} color={COLORS.WHITE} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  addIcon: {
    width: width / 7,
    height: height / 15,
    backgroundColor: COLORS.PRIMARY,
    elevation: 7,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 650,
    marginLeft: 310,
    position: 'absolute',
    zIndex: 100,

  },
});
