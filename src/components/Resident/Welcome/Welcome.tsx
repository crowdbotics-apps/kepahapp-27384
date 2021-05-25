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
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const Welcome: React.FC<Props> = ({navigation}) => {
  const [state, onChangeText] = React.useState({
    password: '',
    confirmPassword: '',
  });
  return (
    <SafeAreaView 
    style={{backgroundColor: '#fff'}}
    >
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
          <Text style={styles.createPass}>Create Password:</Text>
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
        <View>
          <Text style={styles.password}>Password:</Text>

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
      </View>

      <View style={styles.logoTextView}>
        <Text style={styles.logoText}>LOGO</Text>
      </View>
          <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('Welcome2')}>
        <View style={styles.btnView}>
            <Text style={styles.btnText}>SAVE</Text>
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
  welcome: {fontSize: RFValue(30)},
  name: {fontSize: RFValue(25), fontWeight: '700', marginTop: 20},
  email: {fontSize: RFValue(18), marginTop: 10},
  inputViewMain: {padding: 15, height: '20%', marginTop: 20},
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
    fontSize: RFValue(12),
  },
  showPass: {width: 16, height: 10, marginRight: 10, left: 5},
  password: {fontSize: RFValue(12), color: '#131313', marginTop: 10},
  logoTextView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    height: '30%',
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
    width: '100%',
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

export default Welcome;
