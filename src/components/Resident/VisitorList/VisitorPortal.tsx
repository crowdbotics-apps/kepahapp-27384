import React from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};
const {width, height} = Dimensions.get('screen');

const ResidentPortal: React.FC<Props> = ({navigation}) => {
  const [state, onChangeText] = React.useState({
    password: '',
    confirmPassword: '',
  });
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <View style={styles.main}>
        {/* <ScrollView style={{height: height}}> */}
        {/* <View style={{height: height - 20}}> */}
        <View
          style={{
            backgroundColor: '#fff',
            height: 70,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          <View
            style={{
              marginTop: 20,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 12, color: '#131313'}}>
                Forest Cove Apartments
              </Text>
              <Text style={{fontSize: 12, color: '#131313'}}>
                9600 Forest Ln, Dallas, TX 75243
              </Text>
            </View>
            <View style={{right: 15, position: 'absolute'}}>
              <Image
                source={require('../../../assets/menu.png')}
                style={{width: 20}}
              />
              <Image
                source={require('../../../assets/menu.png')}
                style={{marginTop: 2, width: 20}}
              />
              <Image
                source={require('../../../assets/menu.png')}
                style={{marginTop: 2, width: 20}}
              />
            </View>
          </View>
        </View>
        {/* </View> */}
        <ScrollView style={{height: height}}>
          <View style={{height: height}}>
            <View
              style={{
                backgroundColor: '#e5e5e5',
                height: 200,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '57%',
                }}>
                <Text
                  style={{
                    fontSize: RFValue(18),
                    fontWeight: 'bold',
                  }}>
                  Visitor's Portal:
                </Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  position: 'absolute',
                  alignSelf: 'center',
                  bottom: -80,
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    padding: 20,
                    height: 180,
                    width: 180,
                    // marginTop: -10,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 100,
                    borderWidth: 3,
                    borderColor: '#2e1070',
                    top: 10
                  }}>
                  <Image
                    source={require('../../../assets/photo.png')}
                    style={{
                      height: 140,
                      width: 100,
                      position: 'absolute',
                      bottom: 0,
                    }}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#fff',
                // marginTop: 10,
                height: '100%',
                // zIndex: -1000,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                zIndex: -1000,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  height: '60%',
                }}>
                <View style={styles.inputViewMain}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: RFValue(18)}}>
                      John Doe's Visitor:
                    </Text>
                    <Text
                      style={{
                        fontSize: RFValue(23),
                        fontWeight: 'bold',
                      }}>
                      William Murphy
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
                  <View style={styles.logoTextView}>
                    <Text style={styles.logoText}>LOGO</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.navigate('ResidentPortal')}>
          <View style={styles.btnView}>
            <Text style={styles.btnText}>CONFIRM </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    backgroundColor: '#efefef',
  },

  inputViewMain: {padding: 15},
  createPass: {fontSize: RFValue(12), color: '#131313'},
  inputView: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#EAE7F1',
    width: '100%',
    alignItems: 'center',
    padding: 8,
    height: 40,
    borderRadius: 7,
    marginTop: 5,
  },
  input: {
    width: '80%',
    flex: 1,
    color: '#131313',
  },
  showPass: {width: 16, height: 10, marginRight: 10, left: 5},
  password: {fontSize: RFValue(12), color: '#131313', marginTop: 10},
  logoTextView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeDot: {
    borderWidth: 1,
    width: 1,
    height: 1,
    position: 'absolute',
    left: 12,
    top: 4,
  },
  logoText: {color: '#2E1070', fontSize: RFValue(40), fontWeight: 'bold'},
  bottomButton: {padding: 15, position: 'absolute', width: '100%', bottom: 0},
  btnView: {
    backgroundColor: '#2E1070',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnText: {color: '#fff', fontWeight: 'bold'},
});

export default ResidentPortal;
