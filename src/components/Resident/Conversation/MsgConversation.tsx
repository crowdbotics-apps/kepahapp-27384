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
      

      <View style={styles.curvedTailArrow}>
      <View style={styles.curvedTailArrowTriangle} />
      <View style={styles.curvedTailArrowTail} />
    </View>


      
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({


    // curvedTailArrow: {
    //     backgroundColor: "transparent",
    //     overflow: "visible",
    //     width: 100,
    //     height: 25,
    //   },
      // curvedTailArrowTriangle: {
      //   backgroundColor: "transparent",
      //   width: 2000,
      //   height: 0,
      //   borderTopWidth: 9,
      //   borderTopColor: "transparent",
      //   borderRightWidth: 9,
      //   borderRightColor: "red",
      //   borderStyle: "solid",
      //   transform: [{ rotate: "1deg" }],
      //   position: "absolute",
      //   // bottom: 9,
      //   right: 3,
      //   // overflow: "visible",
      // },
      curvedTailArrowTail: {
        // backgroundColor: "transparent",
        // position: "absolute",
        // borderBottomColor: "transparent",
        // borderLeftColor: "transparent",
        // borderRightColor: "transparent",
        // borderBottomWidth: 0,
        // borderLeftWidth: 0,
        // borderRightWidth: 0,
        // borderTopWidth: 3,
        // borderTopColor: "red",
        // borderStyle: "solid",
        // borderTopLeftRadius: 12,


        borderTopWidth: 9,
        borderTopColor: "transparent",
        borderRightWidth: 9,
        borderRightColor: "red",
        borderStyle: "solid",
        top: 1,
        left: 0,
        // width: '40%',
        // height: 20,
        // transform: [{ rotate: "15deg" }],
      },
    
    
    

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
