import React, {useState, useEffect} from 'react';
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
  Alert,
  AsyncStorage,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import RadioButton from 'react-native-radio-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import pathUrl from '../../../config/path';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};
const {width, height} = Dimensions.get('screen');

const SecurityReport: React.FC<Props> = ({navigation}) => {
  const [checked, setChecked] = useState('false');
  const [selected, setSelected] = useState(false);
  const [token, setToken] = useState('');

  const [state, onChangeText] = React.useState({
    password: '',
    confirmPassword: '',
  });

  const [password, setPassword] = React.useState('Osama(5)');
  const [response, setResponse] = React.useState();

  const [loggingIn, setLoggingIn] = React.useState(false);

  useEffect(() => {
    getToken();
  }, []);

  const submitSecurityReport = token => {
    console.log('-----', token);
    // setLoggingIn(true);
    axios
      .post(
        `${pathUrl}/api/v1/security-report`,

        {
          incident_type: 'Service-1',
          incident_summary: 'Incident',
          report_date: '2021-05-21',
          report_time: '15:25:41',
          witness_name: 'Sample',
          witness_phone: 'Sample',
          police_call: true,
          emergency_person_name: 'Sample',
          agency_name: 'Sample',
          vehicle_number: 'Sample',
        },
        {
          headers: {
            Authorization: `token ${token}`,
          },
        },
      )
      .then(response => {
        console.log('--------response', response);
      })
      .catch(error => {
        console.log(error.message);
        setLoggingIn(false);
      });
  };

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        setToken(value);
        console.log(value);
        // getUserDetails(value);
        submitSecurityReport(value);
      }
    } catch (error) {
      // Error retrieving data
    }
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
          <View style={{height: height, marginBottom: 200}}>
            <View
              style={{
                backgroundColor: '#e5e5e5',
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
                  Security Report
                </Text>
                <Text
                  style={{
                    fontSize: RFValue(13),
                    marginTop: 5,
                  }}>
                  Incident #01234567
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
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <View style={{width: '50%', padding: 10}}>
                    <Text style={styles.createPass}>Date:</Text>
                    <View style={styles.inputView}>
                      <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={state.confirmPassword}
                        keyboardType="numeric"
                      />

                      <View>
                        <Image
                          style={{left: -10}}
                          source={require('../../../assets/calendar.png')}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={{width: '50%', padding: 10}}>
                    <Text style={styles.createPass}>Time:</Text>
                    <View style={styles.inputView}>
                      <Text style={styles.input}>10:35 Pm</Text>

                      <View>
                        <Image
                          style={styles.more}
                          source={require('../../../assets/more.png')}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{padding: 10}}>
                  <View style={{marginTop: -10}}>
                    <Text style={styles.createPass}>Incident Type:</Text>
                    <View style={styles.inputView}>
                      <Text style={styles.createPass}>Select type:</Text>

                      <View>
                        <Image
                          style={styles.more}
                          source={require('../../../assets/more.png')}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.accountTop}>
                    <Text style={styles.cardNum}>Incident Summary:</Text>

                    <View style={styles.textAreaContainer}>
                      <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Describe and explain"
                        placeholderTextColor="black"
                        numberOfLines={5}
                        multiline={true}
                      />
                    </View>
                  </View>

                  <View style={styles.addButton}>
                    <View style={styles.addView}>
                      <TouchableOpacity>
                        <Text style={styles.addText}>
                          ADD PHOTO/VIDEO (OPTIONAL)
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{marginTop: 10}}>
                    <Text style={styles.createPass}>
                      Potential Witnesses Name::
                    </Text>
                    <View style={styles.inputView}>
                      <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={state.confirmPassword}
                      />
                    </View>
                  </View>

                  <View style={styles.accountTop}>
                    <Text style={styles.cardNum}>
                      Potential Witnesses Phone:
                    </Text>

                    <View style={styles.accountView}>
                      <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={state.confirmPassword}
                        keyboardType="numeric"
                      />
                    </View>
                  </View>

                  <View style={{marginTop: 10}}>
                    <Text style={{fontSize: RFValue(12)}}>Police Call:</Text>

                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          marginTop: 15,
                          marginLeft: 20,
                        }}
                        onPress={() => setSelected(false)}>
                        <RadioButton
                          animation={'bounceIn'}
                          isSelected={!selected}
                          outerColor={'#2e1070'}
                          innerColor={'#2e1070'}
                          size={8}
                          data={selected}
                          activeColor="green"
                          boxActiveBgColor="#e1f5fe33"
                          icon={
                            <Icon
                              name="check-circle"
                              size={25}
                              color="#2c9dd1"
                            />
                          }
                        />
                        <Text style={{marginLeft: 10}}>Yes</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          marginTop: 15,
                          marginLeft: 20,
                        }}
                        onPress={() => setSelected(true)}>
                        <RadioButton
                          animation={'bounceIn'}
                          isSelected={selected}
                          outerColor={'#2e1070'}
                          innerColor={'#2e1070'}
                          size={8}
                          data={selected}
                          activeColor="green"
                          boxActiveBgColor="#e1f5fe33"
                        />
                        <Text style={{marginLeft: 10}}>No</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  {!selected ? (
                    <View>
                      <View style={styles.accountTop}>
                        <Text style={styles.cardNum}>
                          Police or Emergency Person Name:
                        </Text>

                        <View style={styles.accountView}>
                          <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={state.confirmPassword}
                            keyboardType="numeric"
                          />
                        </View>
                      </View>
                      <View
                        style={{
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            width: '50%',
                            marginTop: 10,
                            paddingRight: 10,
                          }}>
                          <Text style={styles.createPass}>Agency Name:</Text>
                          <View style={styles.inputView}>
                            <TextInput
                              style={styles.input}
                              onChangeText={onChangeText}
                              value={state.confirmPassword}
                            />
                          </View>
                        </View>
                        <View
                          style={{
                            width: '50%',
                            marginTop: 10,
                            paddingLeft: 10,
                          }}>
                          <Text style={styles.createPass}>
                            Badge/Vehicle Number:
                          </Text>
                          <View style={styles.inputView}>
                            <TextInput
                              style={styles.input}
                              onChangeText={onChangeText}
                              value={state.confirmPassword}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  ) : (
                    <View style={styles.Explain}>
                      <Text style={styles.cardNum}>Explain why not:</Text>

                      <View style={styles.textAreaContainer}>
                        <TextInput
                          style={styles.textAreaExplain}
                          underlineColorAndroid="transparent"
                          placeholder="Lorem Ipsum"
                          placeholderTextColor="black"
                          numberOfLines={10}
                          multiline={true}
                        />
                      </View>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity onPress={() => navigation.navigate('LogoSecurity')}>
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

  createPass: {fontSize: RFValue(12), color: '#131313'},
  cardNum: {
    fontSize: RFValue(12),
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
    fontSize: RFValue(12),
  },
  showPass: {width: 16, height: 10, marginRight: 10, left: 5},
  password: {fontSize: 12, color: '#131313', marginTop: 10},

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
  Explain: {
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
  textAreaContainer: {
    borderColor: '#EAE7F1',
    backgroundColor: '#EAE7F1',
    borderWidth: 1,
    padding: 5,

    borderRadius: 7,
    marginTop: 5,
  },
  textArea: {
    height: 100,
    justifyContent: 'flex-start',
    fontSize: RFValue(12),
  },
  textAreaExplain: {
    height: 120,
    justifyContent: 'flex-start',
    fontSize: RFValue(12),
    // marginLeft: 1
  },
  addButton: {marginTop: 15, width: '100%'},
  addView: {
    backgroundColor: '#fff',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#2E1070',
  },
  addText: {color: '#2E1070', fontWeight: 'bold'},
});

export default SecurityReport;
