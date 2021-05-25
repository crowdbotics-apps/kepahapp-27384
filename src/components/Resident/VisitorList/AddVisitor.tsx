import React, {useState} from 'react';
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
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};
const {width, height} = Dimensions.get('screen');

const Confirm: React.FC<Props> = ({navigation}) => {
  const [state, onChangeText] = useState({
    password: '',
    confirmPassword: '',
  });
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
    <View style={styles.main}>
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
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('VisitorList')}>
          <View>
            <Image
              source={require('../../../assets/back.png')}
              style={{marginTop: 2, height: 20, width: 10}}
            />
          </View>
          </TouchableOpacity>
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
          <View>
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
      <ScrollView style={{height: height}}>
        <View style={{height: height}}>
          <View
            style={{
              backgroundColor: '#e5e5e5',
              height: 230,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                marginTop: 20,
              }}>
              <Text
                style={{
                  fontSize: RFValue(18),
                  fontWeight: 'bold',
                }}>
                John Doe - 12A / 321
              </Text>
              <Text
                style={{
                  fontSize: RFValue(15),
                  marginTop: 5,
                }}>
                Add Visitor
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#fff',
              // marginTop: 10,
              height: height,
              // zIndex: -1000,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              zIndex: -1000,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 20,
              },
              shadowOpacity: 0.39,
              shadowRadius: 8.3,

              elevation: 320,
            }}>
            <View style={{padding: 10, marginTop: 10}}>
              <View style={{padding: 10}}>
                <View style={styles.accountTop}>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Text style={styles.star}>*</Text>
                    <Text style={styles.cardNum}>Full Name:</Text>
                  </View>
                  <View style={styles.accountView}>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      value={state.confirmPassword}
                    />
                  </View>
                </View>

                <View style={styles.accountTop}>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Text style={styles.star}>*</Text>
                    <Text style={styles.cardNum}>Email:</Text>
                  </View>
                  <View style={styles.accountView}>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      value={state.confirmPassword}
                      keyboardType="email-address"
                    />
                  </View>
                </View>

                <View style={styles.accountTop}>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Text style={styles.star}>*</Text>
                    <Text style={styles.cardNum}>Phone Number:</Text>
                  </View>
                  <View style={styles.accountView}>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      value={state.confirmPassword}
                    />
                  </View>
                </View>

                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                  <View
                    style={{
                      borderWidth: 1,
                      borderRadius: 2,
                      width: 12,
                      height: 12,
                    }}
                  />
                  <Text style={{left: 10}}>Make an Emergency Contact</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

          <TouchableOpacity onPress={() => navigation.navigate('AddVisitorLogo')}>
      <View style={styles.bottomButton}>
        <View style={styles.btnView}>
            <Text style={styles.btnText}>SUBMIT </Text>
        </View>
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
  email: {fontSize: 18, marginTop: 5},

  createPass: {fontSize: 12, color: '#131313'},
  cardNum: {
    fontSize: RFValue(12),
    color: '#131313',
  },
  star: {
    fontSize: RFValue(12),
    color: '#ff0000',
  },
  amount: {
    fontSize: RFValue(12),
    color: '#131313',
    left: 10,
  },

  input: {
    width: '100%',
    flex: 1,
    color: '#131313',
    fontSize: RFValue(12),
    left: 10,
    // padding: 10
  },
  showPass: {width: 16, height: 10, marginRight: 10, left: 5},
  password: {fontSize: 12, color: '#131313', marginTop: 10},
  eyeDot: {
    borderWidth: 1,
    width: 1,
    height: 1,
    position: 'absolute',
    left: 12,
    top: 4,
  },
  dateView: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#EAE7F1',
    width: '25%',
    alignItems: 'center',
    padding: 8,
    height: 40,
    borderRadius: 7,
    marginTop: 5,
    justifyContent: 'center',
  },
  yearView: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#EAE7F1',
    width: '35%',
    alignItems: 'center',
    padding: 8,
    height: 40,
    borderRadius: 7,
    marginTop: 5,
  },
  accountView: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#EAE7F1',
    width: '100%',
    alignItems: 'center',
    paddingRight: 20,
    height: 40,
    borderRadius: 7,
    marginTop: 5,
  },
  more: {
    width: 10,
    height: 7,
    marginRight: 10,
    left: 5,
  },
  accountTop: {
    marginTop: 10,
  },
  bottomButton: {padding: 15, position: 'absolute', bottom: 0, width: '100%'},
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

export default Confirm;
