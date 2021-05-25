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

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};
const {width, height} = Dimensions.get('screen');

const LinkBankAccount: React.FC<Props> = ({navigation}) => {
  const [state, onChangeText] = React.useState({
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
         <TouchableOpacity onPress={() => navigation.navigate('ResidentPortal')}>
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
              // height: height / 2 - 150,
              // marginTop: 20,
              backgroundColor: '#e5e5e5',
              height: 80,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // alignSelf: 'center',
                // marginTop: 23,
                // height: height / 4,
              }}>
              <Text
                style={{
                  fontSize: 27,
                  fontWeight: 'bold',
                  marginTop: 25,
                }}>
                Link a Bank Account
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
            <View
              style={{
                marginTop: 15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 23, fontWeight: 'bold'}}>
                John Doe - 12A / 321
              </Text>
              <Text style={styles.email}>john@website.com</Text>
            </View>

            <View style={{padding: 10}}>
              <View
                style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                <View style={{width: '50%', padding: 10}}>
                  <Text style={styles.createPass}>Owner:</Text>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      value={state.confirmPassword}
                    />
                  </View>
                </View>
                <View style={{width: '50%', padding: 10}}>
                  <Text style={styles.createPass}>CVC:</Text>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      value={state.confirmPassword}
                      keyboardType="numeric"
                    />
                  </View>
                </View>
              </View>
              <View style={{padding: 10}}>
                <View style={{marginTop: -10}}>
                  <Text style={styles.createPass}>Card Number:</Text>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      value={state.confirmPassword}
                      secureTextEntry={true}
                    />

                    <View>
                      <Text style={styles.eyeDot} />
                      <Image
                        style={styles.showPass}
                        source={require('../../../assets/Vector.png')}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.accountTop}>
                  <Text style={styles.cardNum}>Expiration Date:</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}>
                    <View style={styles.yearView}>
                      <Text style={styles.input}>January</Text>

                      <View>
                        <Image
                          style={styles.more}
                          source={require('../../../assets/more.png')}
                        />
                      </View>
                    </View>
                    <View style={styles.dateView}>
                      <Text style={styles.input}>2030</Text>

                      <View>
                        <Image
                          style={styles.more}
                          source={require('../../../assets/more.png')}
                        />
                      </View>
                    </View>
                    <View style={{top: 13}}>
                      <Image
                        source={require('../../../assets/expiry-images.png')}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.accountTop}>
                  <Text style={styles.cardNum}>Account Type</Text>

                  <View style={styles.accountView}>
                    <Text style={styles.input}>Select type</Text>

                    <View>
                      <Image
                        style={styles.more}
                        source={require('../../../assets/more.png')}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.accountTop}>
                  <Text style={styles.cardNum}>Routing Number:</Text>

                  <View style={styles.accountView}>
                  <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      value={state.confirmPassword}
                      keyboardType="numeric"

                    />
                    <View
                    style={{
                      backgroundColor: '#2E1070',
                      // padding: 5,
                      borderRadius: 20,
                      height: 20,
                      width: 20,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center', 
                      alignItems: 'center',
                    }}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 13}}>i</Text>
                  </View>
                  </View>
                </View>

                <View style={styles.accountTop}>
                  <Text style={styles.cardNum}>Account Number:</Text>

                  <View style={styles.accountView}>
                  <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      value={state.confirmPassword}
                      keyboardType="numeric"
                    />
                    <View
                    style={{
                      backgroundColor: '#2E1070',
                      // padding: 5,
                      borderRadius: 20,
                      height: 20,
                      width: 20,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center', 
                      alignItems: 'center',
                    }}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 13}}>i</Text>
                  </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

        <TouchableOpacity onPress={() => navigation.navigate('PayLease')}>
          <View style={styles.bottomButton}>
        <View style={styles.btnView}>
            <Text style={styles.btnText}>LINK </Text>
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
    fontSize: 12,
    color: '#131313',
  },
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
    width: '100%',
    flex: 1,
    color: '#131313',
    fontSize: 12,
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
    padding: 8,
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

export default LinkBankAccount;
