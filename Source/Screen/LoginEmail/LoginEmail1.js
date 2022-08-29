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
import CheckBox from '@react-native-community/checkbox';
//import {Dropdown} from 'react-native-material-dropdown';

const {height, width} = Dimensions.get('window');

const LoginEmail1 = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.maincontainer}>
          <View style={styles.close}>
            <Image
              source={require('../../Assets/Image/close.png')}
              style={styles.img}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.ebulltxt}>
              <Text style={styles.txt}>E-bulls Account Login</Text>
            </View>
            <View style={styles.ebtn}>
              <View style={styles.ebtn1}>
                <TouchableOpacity>
                  <Text style={styles.btntxt}>Email</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ebtn2}>
                <TouchableOpacity>
                  <Text style={styles.btntxt1}>Phone number</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.emailview}>
              <Text style={styles.emailtxt}>Email</Text>
              <View style={styles.inputview}>
                <View style={styles.inputview1}>
                  <Image
                    source={require('../../Assets/Image/sms1.jpeg')}
                    style={styles.img1}
                  />
                </View>
                <View style={styles.inputview2}>
                  <TextInput
                    placeholder="Enter your email"
                    placeholderTextColor={'white'}
                    maxLength={30}
                    style={styles.input}
                  />
                </View>
              </View>
            </View>
            <View style={styles.emailview}>
              <Text style={styles.emailtxt}>Password</Text>
              <View style={styles.inputview}>
                <View style={styles.inputview1}>
                  <Image
                    source={require('../../Assets/Image/sms1.jpeg')}
                    style={styles.img1}
                  />
                </View>
                <View style={styles.inputview3}>
                  <TextInput
                    placeholder="Enter your password"
                    placeholderTextColor={'white'}
                    maxLength={30}
                    style={styles.input}
                  />
                </View>
                <View style={styles.inputview1}>
                  <Image
                    source={require('../../Assets/Image/eye1.jpeg')}
                    style={styles.img1}
                  />
                </View>
              </View>
            </View>
            <View style={styles.checkbox}>
              {/* <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              /> */}

              <View style={styles.checkbox1}></View>
              <View style={styles.checkbox2}>
                <Text style={styles.txt1}>Remeber me</Text>
              </View>
            </View>
            <View style={styles.btn}>
              <Text style={styles.btntxt}>sign In</Text>
            </View>
            <View style={styles.btn1}>
              <Text style={styles.btntxtt}>Forget password</Text>
            </View>
            <View style={styles.btn2}>
              <Text style={styles.btntxttt}>Register now</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginEmail1;

const styles = StyleSheet.create({
  maincontainer: {
    height: height * 1,
    width: width * 1,
    backgroundColor: 'red',
  },
  container: {
    backgroundColor: 'cyan',
    height: height * 0.75,
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 40,
  },
  close: {
    // backgroundColor: 'white',
    height: height * 0.05,
    width: width * 0.09,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  img: {
    height: height * 0.03,
    width: width * 0.05,
    borderRadius: 100,
    alignSelf: 'center',
  },
  ebulltxt: {
    height: height * 0.073,
    width: width * 0.9,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  txt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 29,
    fontWeight: 'bold',
  },
  ebtn: {
    backgroundColor: 'green',
    height: height * 0.11,
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  ebtn1: {
    backgroundColor: 'red',
    height: height * 0.045,
    width: width * 0.2,
    marginTop: 2,
    borderRadius: 10,
    justifyContent: 'center',
  },
  ebtn2: {
    // backgroundColor: 'cyan',
    height: height * 0.045,
    width: width * 0.35,
    marginTop: 2,
    justifyContent: 'center',
  },
  btntxt: {
    textAlign: 'center',
    fontSize: 18,
  },
  btntxt1: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
  emailview: {
    backgroundColor: 'black',
    height: height * 0.11,
    width: width * 0.9,
    alignSelf: 'center',
  },
  emailtxt: {
    color: 'white',
    fontSize: 15,
  },
  inputview: {
    backgroundColor: 'cyan',
    height: height * 0.055,
    width: width * 0.9,
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  inputview1: {
    //backgroundColor: 'red',
    height: height * 0.04,
    width: width * 0.12,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: 'grey',
  },
  inputview2: {
    //  backgroundColor: 'red',
    height: height * 0.04,
    width: width * 0.75,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  inputview3: {
    //backgroundColor: 'black',
    height: height * 0.04,
    width: width * 0.65,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  img1: {
    height: height * 0.032,
    width: width * 0.07,
    borderRadius: 100,
    alignSelf: 'center',
  },
  input: {
    color: 'red',
    marginLeft: 8,
  },
  checkbox: {
    backgroundColor: 'yellow',
    height: height * 0.05,
    width: width * 0.8,
    flexDirection: 'row',
  },
  checkbox1: {
    // backgroundColor: 'red',
    height: height * 0.035,
    width: width * 0.08,
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
  },
  checkbox2: {
    backgroundColor: 'blue',
    height: height * 0.04,
    width: width * 0.7,
    alignSelf: 'center',
    marginLeft: 8,
    justifyContent: 'center',
  },
  txt1: {
    color: 'white',
    fontSize: 18,
  },
  btn: {
    backgroundColor: 'red',
    height: height * 0.055,
    width: width * 0.9,
    justifyContent: 'center',
    marginTop: 60,
    borderRadius: 10,
  },
  btn1: {
    height: height * 0.055,
    width: width * 0.9,
    justifyContent: 'center',
    marginTop: 20,
  },
  btn3: {
    height: height * 0.055,
    width: width * 0.9,
    justifyContent: 'center',
    marginTop: 25,
  },
  btntxtt: {
    color: 'yellow',

    textAlign: 'center',
    fontSize: 18,
  },
  btntxttt: {
    color: 'yellow',
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontSize: 18,
  },
});
