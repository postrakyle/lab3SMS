import { Link, Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text, Pressable, Button, TouchableHighlight } from 'react-native';
import * as Contacts from 'expo-contacts';
import {useState, useEffect} from 'react';
import {Flatlist, Touchablehighlight,} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'
import {router} from 'expo-router';
import { FlatList } from 'react-native-gesture-handler';

export default function ContactScreen() {

    const [contactdB, setcontactdB] = React.useState(Array<Contacts.Contact>);
    let tmp;
    type ItemData = {
        firstName: String;
        lastName: string;
        phoneNo: string;
    }

    function _onPress(item: Contacts.Contact) {
        tmp = item.phoneNumbers?.at(0)?.number;
        if (tmp !== undefined) {
            router.setParams({id: tmp});
        
        } else {
            //don't send nothing
        }
    }

    useEffect(()=>{
        (async()=>{
            const {status} = await Contacts.requestPermissionsAsync();
            if(status==='granted') {
                const {data} = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.PhoneNumbers],
                });
                if (data.length>0) {
                    const contact = data[3]; //testing
                    setcontactdB(data);
                }
            }

        }) ();

    }, []
    
);


    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
        <Link href="/(tabs)" asChild>
            <Button title="index (back)"></Button>
        </Link>

        <FlatList
            data={contactdB}
            renderItem={({item,separators})=>(
                <TouchableHighlight
                key={item.phoneNumbers?.at(0)?.number}
                onPress={()=>_onPress(item)}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}>
                
                <View style={{backgroundColor: 'white', padding: 10}}>
                    <Link //single click
                        href={{pathname:'/(tabs)',
                            params:{id: (item.phoneNumbers?.at(0)?.number as string)}
                        }}>
                        <Text>
                            {item.firstName}
                            {item.lastName}
                            {item.phoneNumbers?.at(0)?.number}
                        </Text>
                    </Link>
                        
                </View>

                </TouchableHighlight>
            )}/>

        </SafeAreaView>
        </SafeAreaProvider>
       
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
});

