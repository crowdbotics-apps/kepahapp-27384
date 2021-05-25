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
  Switch,
} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import EditVisitor from './EditVisitor';
export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};
const {width, height} = Dimensions.get('screen');

const VisitorList: React.FC<Props> = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
            <TouchableOpacity
              onPress={() => navigation.navigate('SecurityReport')}>
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
                  Visitor List
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#fff',
                height: height,
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
              <View style={{padding: 20, marginTop: 20}}>
                <View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      marginTop: 10,
                    }}>
                    <TouchableOpacity
                      style={{width: '40%'}}
                      onPress={() => {
                        navigation.goBack();
                      }}>
                      <Text style={{fontSize: RFValue(13)}}>Rodney Jones</Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '60%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(13),
                          textDecorationLine: 'underline',
                          color: '#2e1070',
                        }}>
                        Criminal Trespass
                      </Text>
                      <View>
                        <Switch
                          trackColor={{false: '#EAE7F1', true: '#6DB474'}}
                          thumbColor={isEnabled ? '#fff' : '#fff'}
                          ios_backgroundColor="#EAE7F1"
                          onValueChange={toggleSwitch}
                          value={isEnabled}
                          style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
                        />
                      </View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('EditVisitor')}>
                        <Text
                          style={{
                            fontSize: RFValue(13),
                            textDecorationLine: 'underline',
                            color: '#2e1070',
                          }}>
                          Edit
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: '#eaeaea',
                      marginTop: 10,
                    }}
                  />

                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      marginTop: 10,
                    }}>
                    <TouchableOpacity
                      style={{width: '40%'}}
                      onPress={() => {
                        navigation.navigate('VisitorPortal');
                      }}>
                      <Text style={{fontSize: RFValue(13)}}>Rodney Jones</Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '60%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(13),
                          textDecorationLine: 'underline',
                          color: '#2e1070',
                        }}>
                        Criminal Trespass
                      </Text>
                      <View>
                        <Switch
                          trackColor={{false: '#EAE7F1', true: '#6DB474'}}
                          thumbColor={isEnabled ? '#fff' : '#fff'}
                          ios_backgroundColor="#EAE7F1"
                          onValueChange={toggleSwitch}
                          value={isEnabled}
                          style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
                        />
                      </View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('EditVisitor')}>
                        <Text
                          style={{
                            fontSize: RFValue(13),
                            textDecorationLine: 'underline',
                            color: '#2e1070',
                          }}>
                          Edit
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: '#eaeaea',
                      marginTop: 10,
                    }}
                  />

                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      marginTop: 10,
                    }}>
                    <TouchableOpacity
                      style={{width: '40%'}}
                      onPress={() => {
                        navigation.navigate('VisitorPortal');
                      }}>
                      <Text style={{fontSize: RFValue(13)}}>Rodney Jones</Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '60%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(13),
                          textDecorationLine: 'underline',
                          color: '#2e1070',
                        }}>
                        Criminal Trespass
                      </Text>
                      <View>
                        <Switch
                          trackColor={{false: '#EAE7F1', true: '#6DB474'}}
                          thumbColor={isEnabled ? '#fff' : '#fff'}
                          ios_backgroundColor="#EAE7F1"
                          onValueChange={toggleSwitch}
                          value={isEnabled}
                          style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
                        />
                      </View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('EditVisitor')}>
                        <Text
                          style={{
                            fontSize: RFValue(13),
                            textDecorationLine: 'underline',
                            color: '#2e1070',
                          }}>
                          Edit
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: '#eaeaea',
                      marginTop: 10,
                    }}
                  />

                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      marginTop: 10,
                    }}>
                    <TouchableOpacity
                      style={{width: '40%'}}
                      onPress={() => {
                        navigation.navigate('VisitorPortal');
                      }}>
                      <Text style={{fontSize: RFValue(13)}}>Rodney Jones</Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '60%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(13),
                          textDecorationLine: 'underline',
                          color: '#2e1070',
                        }}>
                        Criminal Trespass
                      </Text>
                      <View>
                        <Switch
                          trackColor={{false: '#EAE7F1', true: '#6DB474'}}
                          thumbColor={isEnabled ? '#fff' : '#fff'}
                          ios_backgroundColor="#EAE7F1"
                          onValueChange={toggleSwitch}
                          value={isEnabled}
                          style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
                        />
                      </View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('EditVisitor')}>
                        <Text
                          style={{
                            fontSize: RFValue(13),
                            textDecorationLine: 'underline',
                            color: '#2e1070',
                          }}>
                          Edit
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: '#eaeaea',
                      marginTop: 10,
                    }}
                  />

                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      marginTop: 10,
                    }}>
                    <TouchableOpacity
                      style={{width: '40%'}}
                      onPress={() => {
                        navigation.navigate('VisitorPortal');
                      }}>
                      <Text style={{fontSize: RFValue(13)}}>Rodney Jones</Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '60%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(13),
                          textDecorationLine: 'underline',
                          color: '#2e1070',
                        }}>
                        Criminal Trespass
                      </Text>
                      <View>
                        <Switch
                          trackColor={{false: '#EAE7F1', true: '#6DB474'}}
                          thumbColor={isEnabled ? '#fff' : '#fff'}
                          ios_backgroundColor="#EAE7F1"
                          onValueChange={toggleSwitch}
                          value={isEnabled}
                          style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
                        />
                      </View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('EditVisitor')}>
                        <Text
                          style={{
                            fontSize: RFValue(13),
                            textDecorationLine: 'underline',
                            color: '#2e1070',
                          }}>
                          Edit
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: '#eaeaea',
                      marginTop: 10,
                    }}
                  />

                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      marginTop: 10,
                    }}>
                    <TouchableOpacity
                      style={{width: '40%'}}
                      onPress={() => {
                        navigation.navigate('VisitorPortal');
                      }}>
                      <Text style={{fontSize: RFValue(13)}}>Rodney Jones</Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '60%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(13),
                          textDecorationLine: 'underline',
                          color: '#2e1070',
                        }}>
                        Criminal Trespass
                      </Text>
                      <View>
                        <Switch
                          trackColor={{false: '#EAE7F1', true: '#6DB474'}}
                          thumbColor={isEnabled ? '#fff' : '#fff'}
                          ios_backgroundColor="#EAE7F1"
                          onValueChange={toggleSwitch}
                          value={isEnabled}
                          style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
                        />
                      </View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('EditVisitor')}>
                        <Text
                          style={{
                            fontSize: RFValue(13),
                            textDecorationLine: 'underline',
                            color: '#2e1070',
                          }}>
                          Edit
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: '#eaeaea',
                      marginTop: 10,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity onPress={() => navigation.navigate('AddVisitor')}>
          <View style={styles.bottomButton}>
            <View style={styles.btnView}>
              <Text style={styles.btnText}>ADD NEW </Text>
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

export default VisitorList;
