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
  ColorPropType,
  TextPropTypes,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import RadioButton from 'react-native-radio-button';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};
const {width, height} = Dimensions.get('screen');

const LinkBankAccount: React.FC<Props> = () => {
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
            <View>
              <Image
                source={require('../../../assets/back.png')}
                style={{marginTop: 2, height: 20, width: 10}}
              />
            </View>
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
                //   backgroundColor: '#e5e5e5',
                height: 120,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}>
                <Text
                  style={{
                    fontSize: RFValue(18),
                    fontWeight: 'bold',
                  }}>
                  Msg. Manager
                </Text>
                <Text
                  style={{
                    fontSize: RFValue(13),
                    marginTop: 5,
                    textDecorationLine: 'underline',
                    color: '#2e1070',
                    top: 20
                  }}>
                  Start New Conversation
                </Text>
              </View>
            </View>

            <View style={{padding: 20}}>
              <View
                style={{
                  backgroundColor: '#fff',
                  // marginTop: 10,
                  // zIndex: -1000,
                  borderRadius: 10,
                  zIndex: -1000,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 8.3,

                  elevation: 100,
                  padding: 15,
                  marginTop: 10
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                  <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <View>
                      <Image
                        source={require('../../../assets/profile.jpeg')}
                        style={{
                          // height: 120,
                          // width: 90,
                          // position: 'absolute',
                          // bottom: 0,
                          borderRadius: 80,
                          height: 50,
                          width: 50,
                        }}
                      />
                    </View>
                    <View style={{marginLeft: 20}}>
                      <Text style={{fontSize: RFValue(13)}}>Manager 1</Text>
                      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                        <View >
                          <Image
                            source={require('../../../assets/msg.png')}
                            style={{height: 15, width: 16}}
                          />
                          <Text style={{position: 'absolute', top: -6, left: 2, color: '#848484'}}>...</Text>
                        </View>
                        <Text style={{fontSize: RFValue(13), color: '#848484', left: 5}}>Hi, I need...</Text>
                      </View>
                    </View>
                  </View>

                  <View>
                    <Text style={{fontSize: RFValue(12), color: '#2e1070'}}>4:14PM</Text>
                  </View>
                </View>
              </View>



              <View
                style={{
                  backgroundColor: '#fff',
                  // marginTop: 10,
                  // zIndex: -1000,
                  borderRadius: 10,
                  zIndex: -1000,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 8.3,

                  elevation: 100,
                  padding: 15,
                  marginTop: 10
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                  <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <View>
                      <Image
                        source={require('../../../assets/profile.jpeg')}
                        style={{
                          // height: 120,
                          // width: 90,
                          // position: 'absolute',
                          // bottom: 0,
                          borderRadius: 80,
                          height: 50,
                          width: 50,
                        }}
                      />
                    </View>
                    <View style={{marginLeft: 20}}>
                      <Text style={{fontSize: RFValue(13)}}>Manager 2</Text>
                      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                        <View >
                          <Image
                            source={require('../../../assets/msg.png')}
                            style={{height: 15, width: 16}}
                          />
                          <Text style={{position: 'absolute', top: -6, left: 2, color: '#848484'}}>...</Text>
                        </View>
                        <Text style={{fontSize: RFValue(13), color: '#848484', left: 5}}>I was Looking...</Text>
                      </View>
                    </View>
                  </View>

                  <View>
                    <Text style={{fontSize: RFValue(12), color: '#2e1070'}}>June 27</Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  backgroundColor: '#fff',
                  // marginTop: 10,
                  // zIndex: -1000,
                  borderRadius: 10,
                  zIndex: -1000,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 8.3,

                  elevation: 100,
                  padding: 15,
                  marginTop: 10
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                  <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <View>
                      <Image
                        source={require('../../../assets/profile.jpeg')}
                        style={{
                          // height: 120,
                          // width: 90,
                          // position: 'absolute',
                          // bottom: 0,
                          borderRadius: 80,
                          height: 50,
                          width: 50,
                        }}
                      />
                    </View>
                    <View style={{marginLeft: 20}}>
                      <Text style={{fontSize: RFValue(13)}}>Manager 3</Text>
                      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                        <View >
                          <Image
                            source={require('../../../assets/msg.png')}
                            style={{height: 15, width: 16}}
                          />
                          <Text style={{position: 'absolute', top: -6, left: 2, color: '#848484'}}>...</Text>
                        </View>
                        <Text style={{fontSize: RFValue(13), color: '#848484', left: 5}}>Hi, can you...</Text>
                      </View>
                    </View>
                  </View>

                  <View>
                    <Text style={{fontSize: RFValue(12), color: '#2e1070'}}>June 27</Text>
                  </View>
                </View>
              </View>


              

            <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 80,
                  top: 15,

                  
                }}>
                <Text
                  style={{
                    fontSize: RFValue(18),
                    fontWeight: 'bold',
                  }}>
                  Maintance Superviser
                </Text>
            
              </View>


<View>
<View
                style={{
                  backgroundColor: '#fff',
                  // marginTop: 10,
                  // zIndex: -1000,
                  borderRadius: 10,
                  zIndex: -1000,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 8.3,

                  elevation: 100,
                  padding: 15,
                  marginTop: 10
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                  <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <View>
                      <Image
                        source={require('../../../assets/profile.jpeg')}
                        style={{
                          // height: 120,
                          // width: 90,
                          // position: 'absolute',
                          // bottom: 0,
                          borderRadius: 80,
                          height: 50,
                          width: 50,
                        }}
                      />
                    </View>
                    <View style={{marginLeft: 20}}>
                      <Text style={{fontSize: RFValue(13)}}>Maintenance 1</Text>
                      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                        <View >
                          <Image
                            source={require('../../../assets/msg.png')}
                            style={{height: 15, width: 16}}
                          />
                          <Text style={{position: 'absolute', top: -6, left: 2, color: '#848484'}}>...</Text>
                        </View>
                        <Text style={{fontSize: RFValue(13), color: '#848484', left: 5}}>Hi, I need...</Text>
                      </View>
                    </View>
                  </View>

                  <View>
                    <Text style={{fontSize: RFValue(12), color: '#2e1070'}}>4:14PM</Text>
                  </View>
                </View>

                <View
                    style={{
                      position: 'absolute',
                      top: -12,
                      right: -10,
                      backgroundColor: '#ff0000',
                      padding: 5,
                      borderRadius: 20,
                      height: 28,
                      width: 28,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center', 
                      alignItems: 'center',
                      borderWidth: 2,
                      borderColor: '#fff'
                    }}>
                    <Text style={{color: '#fff', top: -1, fontWeight: 'bold'}}>3</Text>
                  </View>
              </View>
</View>



<View>
<View
                style={{
                  backgroundColor: '#fff',
                  // marginTop: 10,
                  // zIndex: -1000,
                  borderRadius: 10,
                  zIndex: -1000,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 8.3,

                  elevation: 100,
                  padding: 15,
                  marginTop: 10
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                  <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <View>
                      <Image
                        source={require('../../../assets/profile.jpeg')}
                        style={{
                          // height: 120,
                          // width: 90,
                          // position: 'absolute',
                          // bottom: 0,
                          borderRadius: 80,
                          height: 50,
                          width: 50,
                        }}
                      />
                    </View>
                    <View style={{marginLeft: 20}}>
                      <Text style={{fontSize: RFValue(13)}}>Maintenance 2</Text>
                      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                        <View >
                          <Image
                            source={require('../../../assets/msg.png')}
                            style={{height: 15, width: 16}}
                          />
                          <Text style={{position: 'absolute', top: -6, left: 2, color: '#848484'}}>...</Text>
                        </View>
                        <Text style={{fontSize: RFValue(13), color: '#848484', left: 5}}>I was Looking...</Text>
                      </View>
                    </View>
                  </View>

                  <View>
                    <Text style={{fontSize: RFValue(12), color: '#2e1070'}}>June 27</Text>
                  </View>
                </View>

              </View>
</View>


            </View>








            
          </View>








          
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: height,
    width: '100%',
    backgroundColor: '#efefef',
  },
});

export default LinkBankAccount;
