import React, {useState, useEffect} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ScrollView,
  SafeAreaViewBase,
} from 'react-native';

import axios from 'axios';
import pathUrl from '../../../config/path';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};
const {width, height} = Dimensions.get('screen');

const ResidentPortal: React.FC<Props> = ({navigation}) => {
  const [username, setUsername] = useState('');

  const [token, setToken] = useState('');

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        setToken(value);
        getUserDetails(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const getUserDetails = token => {
    axios
      .get(`${pathUrl}/rest-auth/user/`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then(response => {
        let d = response.data;
        console.log('---', d);
        setUsername(d.username);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

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
            <TouchableOpacity onPress={() => navigation.navigate('Resident')}>
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
        <ScrollView>
          <View style={{height: height}}>
            <View
              style={{
                // height: height / 2 - 150,
                // marginTop: 20,
                backgroundColor: '#e5e5e5',
                height: 230,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // alignSelf: 'center',
                  marginTop: 23,
                  // height: height / 4,
                }}>
                <Image
                  source={require('../../../assets/bg-logo.png')}
                  style={{height: 60, width: 130}}
                />

                <Text
                  style={{
                    fontSize: 27,
                    fontWeight: 'bold',
                    color: '#2E1070',
                    marginTop: 25,
                  }}>
                  Resident Portal
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
                <Image
                  source={require('../../../assets/profile.jpeg')}
                  style={{
                    // height: 120,
                    // width: 90,
                    // position: 'absolute',
                    // bottom: 0,
                    borderRadius: 80,
                    height: 150,
                    width: 150,
                    marginTop: -50,
                    display: 'flex',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}
                />
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
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 100,
                }}>
                <View
                  style={{
                    // marginTop: 15,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    {username} - 12A / 321
                  </Text>
                </View>
                <View
                  style={{borderBottomWidth: 1, borderBottomColor: '#2E1070'}}>
                  <Text style={{fontSize: 12, color: '#2E1070'}}>
                    Edit Profile
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  padding: 10,
                }}>
                <View style={{width: '50%', padding: 5}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('MaintenanceList')}>
                    <View
                      style={{
                        backgroundColor: '#2e1070',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10,
                        borderRadius: 5,
                        height: 60,
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontWeight: 'bold',
                          fontSize: 12,
                        }}>
                        MAINTENANCE
                      </Text>
                      <Text
                        style={{
                          color: '#fff',
                          fontWeight: 'bold',
                          fontSize: 12,
                        }}>
                        REQUEST
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SecurityReport')}>
                    <View
                      style={{
                        backgroundColor: '#2e1070',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10,
                        borderRadius: 5,
                        height: 60,
                        marginTop: 10,
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontWeight: 'bold',
                          fontSize: 12,
                        }}>
                        SECURITY
                      </Text>
                      <Text
                        style={{
                          color: '#fff',
                          fontWeight: 'bold',
                          fontSize: 12,
                        }}>
                        INCIDENT
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <View
                    style={{
                      backgroundColor: '#2e1070',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 10,
                      borderRadius: 5,
                      height: 60,
                      marginTop: 10,
                    }}>
                    <Text
                      style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
                      REPORT ILLEGALLY
                    </Text>
                    <Text
                      style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
                      PARKED VEHICLE
                    </Text>
                  </View>
                </View>

                <View style={{width: '50%', padding: 5}}>
                  <View
                    style={{
                      backgroundColor: '#2e1070',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 10,
                      borderRadius: 5,
                      height: 60,
                    }}>
                    <Text
                      style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
                      MY
                    </Text>
                    <Text
                      style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
                      VIOLATIONS
                    </Text>
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
                        borderColor: '#fff',
                      }}>
                      <Text
                        style={{color: '#fff', top: -1, fontWeight: 'bold'}}>
                        2
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('LinkBankAccount')}
                    style={{
                      backgroundColor: '#2e1070',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 10,
                      borderRadius: 5,
                      height: 60,
                      marginTop: 10,
                    }}>
                    <Text
                      style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
                      ADD YOUR
                    </Text>
                    <Text
                      style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
                      VEHICLES
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    // onPress={() => navigation.navigate('LinkBankAccount')}
                    onPress={() => navigation.navigate('VisitorList')}>
                    <View
                      style={{
                        backgroundColor: '#2e1070',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10,
                        borderRadius: 5,
                        height: 60,
                        marginTop: 10,
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontWeight: 'bold',
                          fontSize: 12,
                        }}>
                        ADD/EDIT
                      </Text>
                      <Text
                        style={{
                          color: '#fff',
                          fontWeight: 'bold',
                          fontSize: 12,
                        }}>
                        VISITOR
                      </Text>
                    </View>
                  </TouchableOpacity>
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
    height: '100%',
    width: '100%',
    backgroundColor: '#efefef',
  },
});

export default ResidentPortal;
