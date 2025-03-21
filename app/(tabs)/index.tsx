import { Image, StyleSheet, View, Button, Alert, TextInput } from 'react-native';
import * as SMS from 'expo-sms';
import {Link} from 'expo-router';
import React from 'react';


export default function HomeScreen() {

  const id = ['0404695566'];//, '9876543210'];
  const [text, onChangeText] = React.useState('Hello: My lecturer is the greatest!!');

  function askToSend() {
    Alert.alert('sms send', 'send to ' + id, [
      {
        text: 'cancel',
      },
      {
        text: 'ok', onPress:()=> _handlePressButtonAsync() 
      }
    ]);
  }

  async function _handlePressButtonAsync(){
  const { result } = await SMS.sendSMSAsync(
    id,
    text,
    //* {
    //   attachments: {
    //     uri: 'https://imgs.search.brave.com/Q3str5rYhRdszmN74eo3GoQb4Z-TrJA17tUWnhkjqjQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mL2M3/YTRjMjFlLWNjOWEt/NDlkZS04ODM1LWY2/YmY4YjM0OWE0My9k/aXF1NmlwLTI3OTkz/YjdiLTFiYjEtNGYx/ZS1iZTA2LTY4MTMz/YzBiYmEzMi5qcGcv/djEvZmlsbC93XzI1/MCxoXzI1MCxxXzcw/LHN0cnAva2lzc2xh/bmRfdGhlbWVfcmVk/X3BhbmRhX2J5X2Nh/cmVid2VhcmlfZGlx/dTZpcC0yNTB0Lmpw/Zz90b2tlbj1leUow/ZVhBaU9pSktWMVFp/TENKaGJHY2lPaUpJ/VXpJMU5pSjkuZXlK/emRXSWlPaUoxY200/NllYQndPamRsTUdR/eE9EZzVPREl5TmpR/ek56TmhOV1l3WkRR/eE5XVmhNR1F5Tm1V/d0lpd2lhWE56SWpv/aWRYSnVPbUZ3Y0Rv/M1pUQmtNVGc0T1Rn/eU1qWTBNemN6WVRW/bU1HUTBNVFZsWVRC/a01qWmxNQ0lzSW05/aWFpSTZXMXQ3SW1o/bGFXZG9kQ0k2SWp3/OU1UWTBNQ0lzSW5C/aGRHZ2lPaUpjTDJa/Y0wyTTNZVFJqTWpG/bExXTmpPV0V0TkRs/a1pTMDRPRE0xTFdZ/MlltWTRZak0wT1dF/ME0xd3ZaR2x4ZFRa/cGNDMHlOems1TTJJ/M1lpMHhZbUl4TFRS/bU1XVXRZbVV3Tmkw/Mk9ERXpNMk13WW1K/aE16SXVhbkJuSWl3/aWQybGtkR2dpT2lJ/OFBURTJOREFpZlYx/ZExDSmhkV1FpT2xz/aWRYSnVPbk5sY25a/cFkyVTZhVzFoWjJV/dWIzQmxjbUYwYVc5/dWN5SmRmUS54Tzdp/NHRRNDFxaUVhbU5V/cWkzeENjLWk4VlZr/R2dFdVl4VmUzYVBR/QlFv',
    //     mimeType: 'image/png',
    //     filename: 'myfile.png',
    //   },
    // }
  );
  if (result === 'sent') {
    alert("sent");
  } else {
    alert("Error: Check credit balance or check phone silly.")
  }
}
  return (
    <View style = {styles.header}>
      <View style = {styles.containerRow}>
          <Button 
              title = "send"
              onPress={askToSend}
              />

          <Link href="./contacts" asChild>
            <Button title="contacts"></Button>
          </Link>
      </View>
      <TextInput
      onChangeText = {onChangeText}
      value={text}
      />
    </View>

    );
}

const styles = StyleSheet.create({
  header: {
    padding: 40
  },
  containerRow:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8.
  }
}); 