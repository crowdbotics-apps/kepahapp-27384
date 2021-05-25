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
  ActivityIndicator,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import axios from 'axios';
import pathUrl from '../../../config/path';
import {connect} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const options = {
  mediaType: 'photo',
};

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};
const {width, height} = Dimensions.get('screen');

const ResidentPortal: React.FC<Props> = ({navigation}) => {
  const [profile_picture, setProfile_picture] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [residence_building, setResidence_building] = useState('');
  const [userDetails, setUserDetails] = useState();
  const [loggingIn, setLoggingIn] = React.useState(false);

  //

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
        setEmail(d.email);
        setUsername(d.username);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  const updateDetails = () => {
    setLoggingIn(true);

    const formData = new FormData();

    formData.append('profile_picture', {
      name: 'image.jpg',
      type: 'image/jpeg',
      uri: profile_picture,
    });

    axios({
      method: 'PATCH',
      url: `${pathUrl}/api/v1/user/1/`,
      data: formData,
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        console.log('worked', response);
        updateUserInfo();
      })
      .catch(error => {
        console.log(error);
        setLoggingIn(false);
      });
  };

  const updateUserInfo = () => {
    axios
      .patch(
        `${pathUrl}/api/v1/user/1/`,
        {name: username, residence_building: residence_building},
        {
          headers: {
            Authorization: `token ${token}`,
          },
        },
      )
      .then(response => {
        console.log(response);
        setLoggingIn(false);

        navigation.navigate('ResidentPortal');
      })
      .catch(error => {
        setLoggingIn(false);
      });
  };

  const uploadProfilePicture = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      response => {
        console.log(response);
        setProfile_picture(response.uri);
      },
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <View style={styles.main}>
        {/* <ScrollView style={{height: height}}> */}
        {/* <View style={{height: height - 20}}> */}
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
              justifyContent: 'center',
              alignItems: 'center',
            }}>
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
            <View style={{right: 15, position: 'absolute'}}>
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
        {/* </View> */}
        <ScrollView style={{height: height}}>
          <View style={{height: height}}>
            <View
              style={{
                backgroundColor: '#e5e5e5',
                height: 170,
              }}>
              <View
                style={{
                  marginTop: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: RFValue(23),
                    fontWeight: 'bold',
                    color: '#2E1070',
                  }}>
                  Resident
                </Text>
                <Text
                  style={{
                    fontSize: RFValue(10),
                    color: '#FF0000',
                    marginTop: 2,
                  }}>
                  Please upload your photo.
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  position: 'absolute',
                  alignSelf: 'center',
                  bottom: -60,
                }}
                onPress={() => uploadProfilePicture()}>
                <View
                  style={
                    profile_picture && profile_picture !== ''
                      ? styles.plusview_main_profilepic
                      : styles.plusview_main
                  }>
                  <Image
                    source={
                      profile_picture && profile_picture !== ''
                        ? {uri: profile_picture}
                        : require('../../../assets/photo.png')
                    }
                    style={
                      profile_picture && profile_picture !== ''
                        ? styles.profile_pic
                        : {
                            height: 120,
                            width: 90,
                            position: 'absolute',
                            bottom: 0,
                          }
                    }
                  />
                  <View style={styles.plusview}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 30,
                        position: 'absolute',
                        top: -8,
                        left: 3,
                      }}>
                      +
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                backgroundColor: '#fff',
                // marginTop: 10,
                height: '100%',
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
                  marginTop: 80,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 23, fontWeight: 'bold'}}>
                    {username}
                  </Text>
                </View>
              </View>

              <View style={styles.inputViewMain}>
                <View>
                  <Text style={styles.createPass}>Email:</Text>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.input}
                      onChangeText={text => setEmail(text)}
                      value={email}
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

                <View>
                  <Text style={styles.password}>Residence Building:</Text>

                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.input}
                      onChangeText={text => setResidence_building(text)}
                      value={residence_building}
                    />
                  </View>
                </View>
              </View>

              <View
                style={{
                  height: '15%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <View style={styles.logoTextView}>
                  <Text style={styles.logoText}>LOGO</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() =>
            profile_picture && profile_picture !== ''
              ? updateDetails()
              : updateUserInfo()
          }>
          <View style={styles.btnView}>
            <Text style={styles.btnText}>CONFIRM </Text>
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
    backgroundColor: '#efefef',
  },

  inputViewMain: {padding: 15},
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
  },
  input: {
    width: '80%',
    flex: 1,
    color: '#131313',
  },
  showPass: {width: 16, height: 10, marginRight: 10, left: 5},
  password: {fontSize: RFValue(12), color: '#131313', marginTop: 10},
  logoTextView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeDot: {
    borderWidth: 1,
    width: 1,
    height: 1,
    position: 'absolute',
    left: 12,
    top: 4,
  },
  logoText: {color: '#2E1070', fontSize: RFValue(40), fontWeight: 'bold'},
  bottomButton: {padding: 15, position: 'absolute', width: '100%', bottom: 0},
  btnView: {
    backgroundColor: '#2E1070',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnText: {color: '#fff', fontWeight: 'bold'},
  plusview_main: {
    backgroundColor: 'white',
    padding: 20,
    height: 150,
    width: 150,
    marginTop: -80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
  },
  plusview: {
    position: 'absolute',
    right: 0,
    top: 20,
    backgroundColor: '#2E1070',
    padding: 5,
    height: 25,
    width: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  plusview_main_profilepic: {
    backgroundColor: 'white',
    // padding: 20,
    height: 150,
    width: 150,
    marginTop: -80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
  },

  profile_pic: {
    height: 150,
    width: 150,
    position: 'absolute',
    // bottom: 0,
    borderRadius: 140,
  },
});

export default ResidentPortal;

// import React, {useState} from 'react';
// import {
//   TextInput,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Button,
//   TouchableOpacity,
//   SafeAreaView,
//   Dimensions,
//   ScrollView,
// } from 'react-native';
// import {RFValue} from 'react-native-responsive-fontsize';
// import axios from 'axios';
// import pathUrl from '../../../config/path';
// import {connect} from 'react-redux';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// const options = {
//   mediaType: 'photo',
// };

// export type Props = {
//   name: string;
//   baseEnthusiasmLevel?: number;
// };
// const {width, height} = Dimensions.get('screen');

// const ResidentPortal: React.FC<Props> = ({navigation}) => {
//   const [profile_picture, setProfile_picture] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [residence_building, setResidence_building] = useState('');

//   const login = () => {
//     axios
//       .patch(
//         pathUrl,
//         {profile_picture: profile_picture},
//         {
//           headers: {
//             Authorization: `token 1ce9a93f5c6aa725bbed5130f1340afb36c34906`,
//           },
//         },
//       )
//       .then(response => {
//         console.log(response);
//         // setResponse(response.data);
//         // navigation.navigate('Resident');
//       })
//       .catch(error => {
//         console.log(error.message);
//       });
//   };

//   const uploadProfilePicture = () => {
//     launchImageLibrary(
//       {
//         mediaType: 'photo',
//       },
//       response => {
//         console.log(response);
//         setProfile_picture(response.uri)
//       },
//     );
//   };

//   return (
//     <SafeAreaView style={{backgroundColor: '#fff'}}>
//       <View style={styles.main}>
//         {/* <ScrollView style={{height: height}}> */}
//         {/* <View style={{height: height - 20}}> */}
//         <View
//           style={{
//             backgroundColor: '#fff',
//             height: 70,
//             borderBottomLeftRadius: 10,
//             borderBottomRightRadius: 10,
//           }}>
//           <View
//             style={{
//               marginTop: 20,
//               display: 'flex',
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <View
//               style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//               }}>
//               <Text style={{fontSize: 12, color: '#131313'}}>
//                 Forest Cove Apartments
//               </Text>
//               <Text style={{fontSize: 12, color: '#131313'}}>
//                 9600 Forest Ln, Dallas, TX 75243
//               </Text>
//             </View>
//             <View style={{right: 15, position: 'absolute'}}>
//               <Image
//                 source={require('../../../assets/menu.png')}
//                 style={{width: 20}}
//               />
//               <Image
//                 source={require('../../../assets/menu.png')}
//                 style={{marginTop: 2, width: 20}}
//               />
//               <Image
//                 source={require('../../../assets/menu.png')}
//                 style={{marginTop: 2, width: 20}}
//               />
//             </View>
//           </View>
//         </View>
//         {/* </View> */}
//         <ScrollView style={{height: height}}>
//           <View style={{height: height}}>
//             <View
//               style={{
//                 backgroundColor: '#e5e5e5',
//                 height: 170,
//               }}>
//               <View
//                 style={{
//                   marginTop: 20,
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                 }}>
//                 <Text
//                   style={{
//                     fontSize: RFValue(23),
//                     fontWeight: 'bold',
//                     color: '#2E1070',
//                   }}>
//                   Resident
//                 </Text>
//                 <Text
//                   style={{
//                     fontSize: RFValue(10),
//                     color: '#FF0000',
//                     marginTop: 2,
//                   }}>
//                   Please upload your photo.
//                 </Text>
//               </View>

//               <TouchableOpacity
//                 style={{
//                   display: 'flex',
//                   flexDirection: 'row',
//                   justifyContent: 'center',
//                   position: 'absolute',
//                   alignSelf: 'center',
//                   bottom: -80,
//                 }}
//                 onPress={() => uploadProfilePicture()}>
//                 <View style={styles.plusview_main}>
//                   <Image
//                     source={
//                       profile_picture && profile_picture !== ''
//                         ? {uri: profile_picture}
//                         : require('../../../assets/photo.png')
//                     }
//                     style={{
//                       height: 150,
//                       width: 150,
//                       position: 'absolute',
//                       // bottom: 0,
//                       borderRadius:140
//                     }}
//                   />
//                   <View style={styles.plusview}>
//                     <Text
//                       style={{
//                         color: '#fff',
//                         fontSize: 30,
//                         position: 'absolute',
//                         top: -8,
//                         left: 3,
//                       }}>
//                       +
//                     </Text>
//                   </View>
//                 </View>
//               </TouchableOpacity>
//             </View>

//             <View
//               style={{
//                 backgroundColor: '#fff',
//                 // marginTop: 10,
//                 height: '100%',
//                 // zIndex: -1000,
//                 borderTopLeftRadius: 10,
//                 borderTopRightRadius: 10,
//                 zIndex: -1000,
//               }}>
//               <View
//                 style={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   marginTop: 100,
//                 }}>
//                 <View
//                   style={{
//                     display: 'flex',
//                     flexDirection: 'row',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                   }}>
//                   <Text style={{fontSize: 23, fontWeight: 'bold'}}>
//                     John Doe
//                   </Text>
//                 </View>
//               </View>

//               <View style={styles.inputViewMain}>
//                 <View>
//                   <Text style={styles.createPass}>Email:</Text>
//                   <View style={styles.inputView}>
//                     <TextInput
//                       style={styles.input}
//                       onChangeText={text => setEmail(text)}
//                       value={email}
//                     />
//                   </View>
//                 </View>

//                 <View>
//                   <Text style={styles.password}>Password:</Text>

//                   <View style={styles.inputView}>
//                     <TextInput
//                       style={styles.input}
//                       onChangeText={text => setPassword(text)}
//                       value={password}
//                       secureTextEntry={true}
//                     />

//                     <View>
//                       <Text style={styles.eyeDot} />
//                       <Image
//                         style={styles.showPass}
//                         source={require('../../../assets/Vector.png')}
//                       />
//                     </View>
//                   </View>
//                 </View>

//                 <View>
//                   <Text style={styles.password}>Residence Building:</Text>

//                   <View style={styles.inputView}>
//                     <TextInput
//                       style={styles.input}
//                       onChangeText={text => setResidence_building(text)}
//                       value={residence_building}
//                     />
//                   </View>
//                 </View>
//               </View>

//               <View
//                 style={{
//                   height: '15%',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'center',
//                 }}>
//                 <View style={styles.logoTextView}>
//                   <Text style={styles.logoText}>LOGO</Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </ScrollView>

//         <TouchableOpacity
//           style={styles.bottomButton}
//           onPress={() => navigation.navigate('ResidentPortal')}>
//           <View style={styles.btnView}>
//             <Text style={styles.btnText}>CONFIRM </Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   main: {
//     height: '100%',
//     width: '100%',
//     backgroundColor: '#efefef',
//   },

//   inputViewMain: {padding: 15},
//   createPass: {fontSize: RFValue(12), color: '#131313'},
//   inputView: {
//     display: 'flex',
//     flexDirection: 'row',
//     backgroundColor: '#EAE7F1',
//     width: '100%',
//     alignItems: 'center',
//     padding: 8,
//     height: 40,
//     borderRadius: 7,
//     marginTop: 5,
//   },
//   input: {
//     width: '80%',
//     flex: 1,
//     color: '#131313',
//   },
//   showPass: {width: 16, height: 10, marginRight: 10, left: 5},
//   password: {fontSize: RFValue(12), color: '#131313', marginTop: 10},
//   logoTextView: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   eyeDot: {
//     borderWidth: 1,
//     width: 1,
//     height: 1,
//     position: 'absolute',
//     left: 12,
//     top: 4,
//   },
//   logoText: {color: '#2E1070', fontSize: RFValue(40), fontWeight: 'bold'},
//   bottomButton: {padding: 15, position: 'absolute', width: '100%', bottom: 0},
//   btnView: {
//     backgroundColor: '#2E1070',
//     padding: 10,
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     borderRadius: 5,
//   },
//   btnText: {color: '#fff', fontWeight: 'bold'},
//   // plusview_main: {
//   //   backgroundColor: 'white',
//   //   padding: 20,
//   //   height: 150,
//   //   width: 150,
//   //   marginTop: -80,
//   //   display: 'flex',
//   //   flexDirection: 'row',
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   borderRadius: 80,
//   // },

//   plusview_main: {
//     backgroundColor: 'white',
//     // padding: 20,
//     height: 150,
//     width: 150,
//     marginTop: -80,
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 80,
//   },

//   plusview: {
//     position: 'absolute',
//     right: 0,
//     top: 20,
//     backgroundColor: '#2E1070',
//     padding: 5,
//     height: 25,
//     width: 25,
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 20,
//   },
// });

// export default ResidentPortal;
