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

const SubmitRequest: React.FC<Props> = ({navigation}) => {
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
           <TouchableOpacity onPress={() => navigation.navigate('AddVisitor')}>
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
                    Submit Maintenance
                
              </Text>
            
             
              <Text
                style={{
                  fontSize: RFValue(18),
                  fontWeight: 'bold',
                }}>
                    Request
                
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
                marginTop: 35,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 23, fontWeight: 'bold'}}>
                John Doe - 12A / 321
              </Text>
            </View>

            <View style={{padding: 10}}>
            
              <View style={{padding: 10}}>
                <View style={{marginTop: 10, }}>
                  <Text style={styles.createPass}>Service Request:</Text>
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

              
              

               

                <View style={{marginTop: 10}}>
                  <Text style={styles.createPass}>
                    Other:
                  </Text>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      value={state.confirmPassword}
                      placeholder={'Lorem Ipsum'}
                      placeholderTextColor={'#131313'}
                    />
                  </View>
                </View>


                    <TouchableOpacity>
                <View style={styles.addButton}>
                  <View style={styles.addView}>
                      <Text style={styles.addText}>
                        UPLOAD PHOTO
                      </Text>
                  </View>
                </View>
                    </TouchableOpacity>
              

                
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

          <TouchableOpacity onPress={() => navigation.navigate('MaintenanceRequest')}>
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
    justifyContent: 'space-between'
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
  addButton: {marginTop: 30, width: '100%'},
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

export default SubmitRequest;
