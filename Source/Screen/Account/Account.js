import {
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  View,
  onPress,
} from 'react-native';
import React, {useState} from 'react';

//import {Dropdown} from 'react-native-material-dropdown';

const {height, width} = Dimensions.get('window');

const Account = ({navigation}) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const emailValidate = email => {
    var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '' || email === undefined || email === null) {
      setErrorEmail('Enter valid email address ');
    } else if (!Regex.test(email)) {
      setErrorEmail('please enter valid email address');
    } else {
      setErrorEmail(null);
    }
  };

    const [phone, setPhone] = useState('');
    const [errorPhone, setErrorPhone] = useState('');

    const phoneValidate = phone => {
      var Rgx = /[0-9,\.\_]/;
      if (phone === '' || phone === undefined || phone === null) {
        setErrorPhone('Enter valid phone ');
      } else if (!Rgx.test(phone)) {
        setErrorPhone('please enter valid phone number');
      } else {
        setErrorPhone(null);
      }
    };

  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const passwordValidate = password => {
    var Regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (password === '' || password === undefined || password === null) {
      setErrorPassword('Enter valid password');
    } else if (!Regex.test(password)) {
      setErrorPassword('Please enter valid password');
    } else {
      setErrorPassword(null);
    }
  };

  const [cpassword, setCPassword] = useState('');
  const [errorCPassword, setErrorCPassword] = useState('');

  const cpasswordValidate = cpassword => {
    var Regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (cpassword === '' || cpassword === undefined || cpassword === null) {
      setErrorCPassword('Enter valid cpassword');
    } else if (!Regex.test(cpassword)) {
      setErrorCPassword('Please enter valid cpassword');
    } else {
      setErrorCPassword(null);
    }
  };

  const validate = () => {
    var Rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var Rgx = /[0-9,\.\_]/;
    var Rgex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    var Regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

    const flag = true;
    if (email === '') {
      setErrorEmail('*please enter email address');
      return !flag;
    }
    if (email === '' || email === undefined || email === null) {
      setErrorEmail('*Please enter email address');
      return !flag;
    }
    if (!Rgx.test(email)) {
      setErrorEmail('*Please enter valid email address');
      return !flag;
    } else setErrorEmail(null);

 if (phone === '') {
   setErrorPhone('*please enter phone');
   return !flag;
 }
 if (phone === '' || phone === undefined || phone === null) {
   setErrorPhone('*Please enter phone');
   return !flag;
 }
 if (!Rgx.test(phone)) {
   setErrorPhone('*Please enter phone');
   return !flag;
 } else setErrorPhone(null);



    if (password === '') {
      setErrorPassword('*Please enter password');
      return !flag;
    }
    if (password === '' || password === undefined || password === null) {
      setErrorPassword('*Please enter password');
      return !flag;
    }
    if (!Rgex.test(password)) {
      setErrorPassword('*Please enter valid password');
      return !flag;
    } else setErrorPassword(null);

    if (cpassword === '') {
      setErrorPassword('*Please enter cpassword');
      return !flag;
    }
    if (cpassword === '' || cpassword === undefined || cpassword === null) {
      setErrorCPassword('*Please enter cpassword');
      return !flag;
    }
    if (!Rgex.test(cpassword)) {
      setErrorCPassword('*Please enter valid cpassword');
      return !flag;
    } else setErrorCPassword(null);

    return flag;
  };

  const onSubmit = () => {
    if (validate()) {
      alert('Sussessful');
      navigation.navigate('Referal');
    } else {
      alert('Something went wrong');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.maincontainer}>
          <View style={styles.txt1}>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Image
                  source={require('../../Assets/Image/arro.jpeg')}
                  style={styles.img}></Image>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Ebull')}>
              <Text style={styles.txt2}>×</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Enter Account Details</Text>
          </View>

          <View style={styles.email}>
            <Text style={styles.etxt}>Email</Text>
            <View style={styles.einput}>
              <View style={styles.einput1}>
                <View>
                  <TouchableOpacity>
                    <View style={styles.imgc}>
                      <Image
                        source={require('../../Assets/Image/sms1.jpeg')}
                        style={styles.img}></Image>
                    </View>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    justifyContent: 'center',
                    al: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'grey',
                      textAlign: 'center',
                      fontSize: 30,
                      marginLeft: 10,
                    }}>
                    |
                  </Text>
                </View>

                <TextInput
                  placeholder="Enter your email"
                  placeholderTextColor={'white'}
                  keyboardType="email-address"
                  onChangeText={text => {
                    setEmail(text), emailValidate(text);
                  }}
                  maxLength={30}
                  style={styles.input}></TextInput>
              </View>
            </View>
          </View>
          {errorEmail !== null ? (
            <View
              style={{
                height: height * 0.03,
                width: '85%',
                alignSelf: 'center',
                ///backgroundColor: 'green',
              }}>
              <Text style={{color: 'red', fontSize: 16}}>{errorEmail}</Text>
            </View>
          ) : null}

          <View style={styles.email}>
            <Text style={styles.etxt}>Phone Number</Text>
            <View style={styles.einput}>
              <View style={styles.einput1}>
                <View>
                  <Image
                    source={require('../../Assets/Image/ind.jpeg')}
                    style={styles.img1}></Image>
                </View>

                <View
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    justifyContent: 'center',
                    al: 'center',
                  }}>
                  <Text
                    style={{color: 'grey', textAlign: 'center', fontSize: 30}}>
                    |
                  </Text>
                </View>

                <TextInput
                  placeholder="Enter your number"
                  placeholderTextColor={'white'}
                  keyboardType="numeric"
                  onChangeText={text => {
                    setPhone(text), phoneValidate(text);
                  }}
                  maxLength={15}
                  fontSize={17}
                  style={styles.input}></TextInput>
              </View>
            </View>
          </View>
          {errorPhone !== null ? (
            <View
              style={{
                height: height * 0.02,
                width: width * 0.9,
                //backgroundColor: 'green',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{
                  color: 'red',
                  fontSize: 15,
                  //textAlign: 'center',
                  fontWeight: 'bold',
                  marginLeft: 5,
                }}>
                {errorPhone}
              </Text>
            </View>
          ) : null}

          <View style={styles.email}>
            <Text style={styles.etxt}>Password</Text>
            <View style={styles.einput}>
              <View style={styles.einput1}>
                <View>
                  <Image
                    source={require('../../Assets/Image/lock1.jpeg')}
                    style={styles.img}></Image>
                </View>
                <View>
                  <Text
                    style={{color: 'grey', textAlign: 'center', fontSize: 30}}>
                    |
                  </Text>
                </View>

                <View style={styles.input1}>
                  <TextInput
                    placeholder=" Enter your password"
                    placeholderTextColor={'white'}
                    keyboardType="default"
                    secureTextEntry={isSecureEntry}
                    onChangeText={text => {
                      setPassword(text), passwordValidate(text);
                    }}
                    style={styles.input}></TextInput>
                </View>
                <View style={styles.eye}>
                  <View>
                    <Image
                      source={require('../../Assets/Image/loc.jpeg')}
                      style={styles.img}></Image>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {errorPassword !== null ? (
            <View
              style={{
                height: height * 0.05,
                width: '87%',
                alignSelf: 'center',
                //backgroundColor: 'green',
              }}>
              <Text style={{color: 'red', fontSize: 16, marginTop: 10}}>
                {errorPassword}
              </Text>
            </View>
          ) : null}

          <View style={styles.email}>
            <Text style={styles.etxt}>Confirm Password</Text>
            <View style={styles.einput}>
              <View style={styles.einput1}>
                <View>
                  <Image
                    source={require('../../Assets/Image/lock1.jpeg')}
                    style={styles.img}></Image>
                </View>
                <View
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    justifyContent: 'center',
                    al: 'center',
                  }}>
                  <Text
                    style={{color: 'grey', textAlign: 'center', fontSize: 30}}>
                    |
                  </Text>
                </View>

                <View style={styles.input1}>
                  <TextInput
                    placeholder=" Enter your password"
                    placeholderTextColor={'white'}
                    keyboardType="default"
                    secureTextEntry={isSecureEntry}
                    onChangeText={text => {
                      setCPassword(text), cpasswordValidate(text);
                    }}
                    maxLength={30}
                    style={styles.input}></TextInput>
                </View>
                <View style={styles.eye}>
                  <View>
                    <Image
                      source={require('../../Assets/Image/loc.jpeg')}
                      style={styles.img}></Image>
                  </View>
                </View>
              </View>
            </View>

            {errorCPassword !== null ? (
              <View
                style={{
                  height: height * 0.04,
                  width: '82%',
                 // alignSelf: 'center',
                  //backgroundColor: 'green',
                }}>
                <Text style={{color: 'red', fontSize: 16, marginTop: 10}}>
                  {errorCPassword}
                </Text>
              </View>
            ) : null}
            <View style={styles.rem}>
              <Text style={styles.remtxt}>Referral ID (Optional)</Text>
              <Text style={styles.remtxt1}>▼</Text>
            </View>
            <View style={styles.btn1}>
              <TouchableOpacity onPress={() => onSubmit()}>
                <View style={{backgroundColor: '#EAB73B'}}>
                  <Text style={styles.btntxt}>Next</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  maincontainer: {
    height: height * 1.1,
    width: width * 1,
    backgroundColor: 'black',
    //  justifyContent:'center'
    //marginTop:90
  },

  txt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '900',
  },
  txt1: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width / 1.02,
    alignSelf: 'center',
  },
  txt2: {
    fontSize: 30,
    color: 'white',
  },
  container: {
    marginTop: 30,
    width: width / 1.1,
  },
  container1: {
    // backgroundColor:'red',
    height: height * 0.06,
    width: width / 1.2,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    margin: 20,
  },
  container2: {
    backgroundColor: '#EAB73B',
    height: height * 0.05,
    width: width * 0.23,
    borderRadius: 10,
    justifyContent: 'center',
  },
  container3: {
    backgroundColor: 'black',
    height: height * 0.05,
    width: width * 0.35,
    borderRadius: 10,
    justifyContent: 'center',
  },
  txt3: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  txt4: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {

    height: height * 0.123,
    width: width * 0.9,
    alignSelf: 'center',

  },
  etxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  einput: {
    backgroundColor: 'rgb(30,30,30)',
    borderRadius: 10,
    height: height * 0.0644,
    // justifyContent:'center',
    marginTop: 8,
    // borderWidth: 1,
    // borderColor: 'rgb(30,30,30)',
  },
  einput1: {
    flexDirection: 'row',
    marginLeft: 10,
    margin: 5,
  },
  input: {
    color: 'white',
    marginLeft: 5,
  },
  eye: {
    //backgroundColor:'red',
  },
  chek: {
    //  backgroundColor:'yellow',
    height: height * 0.03,
    width: width * 0.06,
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
  },
  btn: {
    flexDirection: 'row',
  },
  rem: {
    //justifyContent: 'center',
   
    marginLeft: 10,
    flexDirection: 'row',
    // backgroundColor:'red'
    marginTop:10
  },
  remtxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  remtxt1: {
    color: '#EAB73B',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btn1: {
    backgroundColor: '#EAB73B',
    height: height * 0.06,
    width: width / 1.1,
    marginTop: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btntxt: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },

  btntxt: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btntxt1: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EAB73B',
    marginTop: 40,
  },
  btntxt2: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 40,
    color: '#EAB73B',
    textDecorationLine: 'underline',
  },
  img: {
    height: height * 0.04,
    width: width * 0.08,
    borderRadius: 100,
    marginTop: 4,
    color: 'rgb(30,30,30)',
  },
  input1: {
    justifyContent: 'center',
    width: width * 0.68,
  },
  img1: {
    height: height * 0.04,
    width: width * 0.2,
    borderRadius: 100,
    marginTop: 4,
    color: 'rgb(30,30,30)',
  },
  imgc: {
    //backgroundColor:'yellow',
    height: height * 0.05,
    width: width * 0.07,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
