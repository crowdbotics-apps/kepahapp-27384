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

const Logo: React.FC<Props> = ({navigation}) => {
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
      <View style={{height: '90%'}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              top: 20,
              height: '30%',
            }}>
            <Text style={{fontSize: RFValue(18), fontWeight: 'bold', top: -15}}>
              Add Visitor
            </Text>
            <Text style={{fontSize: RFValue(35), fontWeight: 'bold', top: 20}}>
              LOGO
            </Text>
          </View>
          <View style={{padding: 20, width: '100%', height: '70%'}}>
            <View
              style={{
                backgroundColor: '#fff',
                paddingTop: 10,
                paddingBottom: 25,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                padding: 20,
                shadowColor: "#000000",
                shadowOpacity: 0.2,
                shadowRadius: 19,
                
                shadowOffset: {
                  height: 0,
                  width: 1
                },
                elevation: 2,

              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: RFValue(18), marginTop: 20}}>
                  You added a new
                </Text>
                <Text style={{fontSize: RFValue(18)}}>visitor to the visitor list.. </Text>
               </View>


               <View style={{width: '100%', marginTop: 30}}>
                <View style={styles.addVisitor}>
                  <TouchableOpacity
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => navigation.navigate('VisitorList')}
                    >
                    <Text style={styles.visitorText}>ADD ANOTHER VISITOR </Text>
                  </TouchableOpacity>
                </View>
              </View>



                  <TouchableOpacity
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }} 
                    onPress={() => navigation.navigate('VisitorList')}
                    >
              <View style={{width: '100%', marginTop: 20}}>
                <View style={styles.btnView}>
                    <Text style={styles.btnText}>GO TO THE VISITOR LIST </Text>
                </View>
              </View>
                  </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
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
  btnView: {
    backgroundColor: '#2E1070',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnText: {color: '#fff', fontWeight: 'bold', fontSize: RFValue(14)},
  addVisitor: {
    backgroundColor: '#fff',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: '#2E1070',
    borderWidth: 1
  },
  visitorText: {color: '#2E1070', fontWeight: 'bold', fontSize: RFValue(14)},
});

export default Logo;
