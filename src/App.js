import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
  Image,
} from 'react-native'

import { ThemeProvider } from 'styled-components'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import DocumentPicker from 'react-native-document-picker'
import RNFetchBlob from 'rn-fetch-blob'
import csv  from 'csvtojson'
import RealmProvider from './modules/realm'

import CustomerSchema from './modules/customer/Schema'
import ImportCustomersScreen from './modules/customer/screens/Import'

import theme from './theme'

const schemas = [
  CustomerSchema
]

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ThemeProvider theme={ theme }>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          <Drawer.Screen name="Customers" component={ImportCustomersScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera")
    } else {
      console.log("Camera permission denied")
    }
  } catch (err) {
    console.warn(err)
  }
}

// export default class App extends React.Component {
//   constructor(props) {
//     super(props)
//     //Initialization of the state to store the selected file related attribute
//     this.state = {
//       singleFile: '',
//       multipleFile: [],
//     }
//   }

//   async selectOneFile() {
//     //Opening Document Picker for selection of one file
//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles],
//         //There can me more options as well
//         // DocumentPicker.types.allFiles
//         // DocumentPicker.types.images
//         // DocumentPicker.types.plainText
//         // DocumentPicker.types.audio
//         // DocumentPicker.types.pdf
//       })
//       //Printing the log realted to the file
//       console.log('res : ' + JSON.stringify(res))
//       console.log('URI : ' + res.uri)
//       console.log('Type : ' + res.type)
//       console.log('File Name : ' + res.name)
//       console.log('File Size : ' + res.size)
//       //Setting the state to show single file attributes

//       RNFetchBlob.fs.readFile(res.uri, 'utf8')
//         .then((data) => {

//           csv({ output: "csv" })
//             .fromString(data)
//             .then((csvRow)=>{
//                 console.log(csvRow)
//             })
//         })

//       this.setState({ singleFile: res })
//     } catch (err) {
//       //Handling any exception (If any)
//       if (DocumentPicker.isCancel(err)) {
//         //If user canceled the document selection
//         alert('Canceled from single doc picker')
//       } else {
//         //For Unknown Error
//         alert('Unknown Error: ' + JSON.stringify(err))
//         throw err
//       }
//     }
//   }

//   render() {
//     return (
//       <RealmProvider schemas={ schemas }>
//         <View style={styles.containerStyle}>
//           <Button title="request permissions" onPress={requestCameraPermission} />
//           {/*To show single file attribute*/}
//           <TouchableOpacity
//             activeOpacity={0.5}
//             style={styles.buttonStyle}
//             onPress={this.selectOneFile.bind(this)}>
//             {/*Single file selection button*/}
//             <Text style={{ marginRight: 10, fontSize: 19 }}>
//               Click here to pick one file
//             </Text>
//             <Image
//               source={{
//                 uri: 'https://img.icons8.com/offices/40/000000/attach.png',
//               }}
//               style={styles.imageIconStyle}
//             />
//           </TouchableOpacity>
//           {/*Showing the data of selected Single file*/}
//           <Text style={styles.textStyle}>
//             File Name:{' '}
//             {this.state.singleFile.name ? this.state.singleFile.name : ''}
//             {'\n'}
//             Type: {this.state.singleFile.type ? this.state.singleFile.type : ''}
//             {'\n'}
//             File Size:{' '}
//             {this.state.singleFile.size ? this.state.singleFile.size : ''}
//             {'\n'}
//             URI: {this.state.singleFile.uri ? this.state.singleFile.uri : ''}
//             {'\n'}
//           </Text>
//         </View>
//       </RealmProvider>
//     )
//   }
// }

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
})