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
import {RFValue} from 'react-native-responsive-fontsize';
import RadioButton from 'react-native-radio-button';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};
const {width, height} = Dimensions.get('screen');

const MaintenanceRequest: React.FC<Props> = ({navigation, ...props}) => {
  const [state, onChangeText] = React.useState({
    password: '',
    confirmPassword: '',
  });

  const goBack = () => {
    navigation.goBack()
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
            <TouchableOpacity
              onPress={() => navigation.navigate('SubmitMaintenance')}>
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
                height: 150,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: RFValue(18),
                    fontWeight: 'bold',
                  }}>
                  Maintenance Request
                </Text>

                <Text
                  style={{
                    fontSize: RFValue(15),
                    marginTop: 5,
                  }}>
                  Please Confirm
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
              <View style={{padding: 10}}>
                <View style={{padding: 10}}>
                  <View style={styles.accountTop}>
                    <Text style={styles.serviceText}>Service Request:</Text>

                    <View style={styles.textAreaContainer}>
                      <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholderTextColor="black"
                        numberOfLines={3}
                        multiline={true}
                      />
                    </View>
                  </View>

                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Text style={styles.serviceText}>Date</Text>
                      <Text style={styles.serviceText}> | </Text>
                      <Text style={styles.serviceText}>Time of activity</Text>
                    </View>

                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Text style={styles.serviceText}>08-12-2021</Text>
                      <Text style={styles.serviceText}> / </Text>
                      <Text style={styles.serviceText}>10:35 PM</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottomButton}>
          <TouchableOpacity
            style={styles.btnCancel}
            onPress={() => navigation.navigate('SubmitMaintenance')}>
            <Text style={styles.btnCancelText}>CANCEL </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnView}
            onPress={() =>
              navigation.navigate('AddMaintenanceLogo', {goBack: goBack})
            }>
            <Text style={styles.btnText}>CONFIRM </Text>
          </TouchableOpacity>
        </View>
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
  accountTop: {
    marginTop: 10,
  },

  textAreaContainer: {
    borderColor: '#EAE7F1',
    backgroundColor: '#EAE7F1',
    borderWidth: 1,
    padding: 10,

    borderRadius: 7,
    marginTop: 5,
  },
  textArea: {
    height: 70,
    justifyContent: 'flex-start',
    fontSize: RFValue(13),
  },
  serviceText: {fontSize: RFValue(12), color: '#131313'},
  bottomButton: {
    padding: 15,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnView: {
    backgroundColor: '#2E1070',
    padding: 12,
    // height: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    width: '48%',
  },
  btnText: {color: '#fff', fontWeight: 'bold', fontSize: RFValue(12)},

  btnCancel: {
    backgroundColor: '#fff',
    padding: 12,
    // height: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    width: '48%',
    borderColor: '#2e1070',
    borderWidth: 1,
  },
  btnCancelText: {color: '#2e1070', fontWeight: 'bold', fontSize: RFValue(12)},
});

export default MaintenanceRequest;
