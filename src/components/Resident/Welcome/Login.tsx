import React, {useEffect} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import axios from 'axios';
import pathUrl from '../../../config/path';
import {connect} from 'react-redux';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const Welcome: React.FC<Props> = ({navigation}) => {
  const [username, setUsername] = React.useState(
    'zubairabdullah21000@gmail.com',
  );
  const [password, setPassword] = React.useState('Osama(5)');
  const [response, setResponse] = React.useState();

  const [loggingIn, setLoggingIn] = React.useState(false);

  useEffect(() => {
    AsyncStorage.clear();
  }, []);

  const login = () => {
    setLoggingIn(true);
    axios
      .post(`${pathUrl}/api/v1/login/`, {
        username: username,
        password: password,
      })
      .then(response => {
        console.log(response);
        setResponse(response.data);

        saveToken(response.data.token);
      })
      .catch(error => {
        console.log(error.message);
        setLoggingIn(false);
      });
  };

  const saveToken = async token => {
    setLoggingIn(false);

    try {
      await AsyncStorage.setItem('token', token);
      navigation.navigate('Resident');
    } catch (error) {
      // Error saving data
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <View style={styles.main}>
        <View style={{height: '40%'}}>
          <View style={styles.logoView}>
            <Image
              style={styles.logo}
              source={require('../../../assets/logo.png')}
            />
          </View>
          <View style={styles.welcomeView}>
            <Text style={styles.welcome}>Welcome William</Text>
            <Text style={styles.name}>John Doe - 12A / 321</Text>
            <Text style={styles.email}>john@website.com</Text>
          </View>
        </View>
        <View style={styles.inputViewMain}>
          <View>
            <Text style={styles.createPass}>Email:</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                onChangeText={text => setUsername(text)}
                value={username}
              />
            </View>
          </View>
          <View>
            <Text style={styles.password}>Password:</Text>

            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                onChangeText={text => setPassword(text)}
                value={password}
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

          <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontSize: RFValue(12)}}>Forgot Password?</Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#2e1070',
                left: 1,
              }}>
              <Text
                style={{
                  fontSize: RFValue(12),
                  color: '#2e1070',
                  left: -1,
                  top: 1,
                }}>
                Reset now
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.logoTextView}>
          <Text style={styles.logoText}>LOGO</Text>
        </View>
        <TouchableOpacity
          style={styles.bottomButton}
          // onPress={() => navigation.navigate('Resident')}
          onPress={() => login()}>
          <View style={styles.btnView}>
            <Text style={styles.btnText}>LOG IN </Text>

            {loggingIn ? <ActivityIndicator color="white" /> : null}
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
    backgroundColor: '#fff',
  },
  logoView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
  },
  logo: {width: '35%', height: '45%'},
  welcomeView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
  welcome: {fontSize: 30},
  name: {fontSize: 25, fontWeight: '700', marginTop: 20},
  email: {fontSize: 18, marginTop: 10},
  inputViewMain: {padding: 15, height: '30%', marginTop: 20},
  createPass: {fontSize: 12, color: '#131313'},
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
    fontSize: 12,
  },
  showPass: {width: 16, height: 10, marginRight: 10, left: 5},
  password: {fontSize: 12, color: '#131313', marginTop: 10},
  logoTextView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    height: '15%',
  },
  logoText: {color: '#2e1070', fontSize: RFValue(40), fontWeight: 'bold'},
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
  eyeDot: {
    borderWidth: 1,
    width: 1,
    height: 1,
    position: 'absolute',
    left: 12,
    top: 4,
  },
});

const mapStateToProps = state => {
  return {
    authObj: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // sendData: (userObj) => dispatch(GroupActions.sendData(userObj))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
