import * as React from 'react';
import {useState} from 'react';
import { View, Text, StyleSheet, Image, Button, Pressable, Alert } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FlatGrid } from 'react-native-super-grid';
import DateTimePicker from '@react-native-community/datetimepicker';

function TienThuScreen(navigation) {
    const [value, onChangeText] = React.useState('Nhập Ghi Chú ')
    const [value1, onChangeText1] = React.useState('Nhập số tiền ')
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const [items, setItems] = React.useState([
        { name: 'Tiền lương', code: '#000000', icon: require('../../image/money.png') },
        { name: 'Tiền phụ cấp', code: '#2ecc71', icon: require('../../image/luong.png') },
        { name: 'Tiền Thưởng', code: '#3498db', icon: require('../../image/tienthuong.png') },
        { name: 'Thu nhập phụ', code: '#9b59b6', icon: require('../../image/thunhapphu.png') },
        { name: 'Gia đình cho', code: '#34495e', icon: require('../../image/giadinhcho.png') },
        { name: 'Đầu tư', code: '#16a085', icon: require('../../image/dautu.png') },
        { name: 'Lặt vặt', code: '#27ae60', icon: require('../../image/latvat.png') },
        



    ]);
    const alertNhapKhoangThuChi = () =>
        Alert.alert(
            "Thông Tin",
            "Ghi chu: " + value + "\n" +
            "Tien Thu: " + value1 + "\n",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );

    return (


        <View style={styles.contrainer}>
            <View>
                
                <Button onPress={showDatepicker} title="Ngày hiện tại" />
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
                <TextInput value = {date}
                />

                

            <View style={styles.ghichu}>

                <Text style={styles.baseText}>
                    Ghi Chú :
                </Text>
                <TextInput
                    style={{ height: 40, width: 320, borderColor: 'gray', borderWidth: 1, marginLeft: 15, marginTop: 5 }}
                    onChangeText={onChangeText}
                    value={value}
                />
            </View>

            <View style={styles.ghichu}>

                <Text style={styles.baseText}>
                    Tiền Thu :
                </Text>
                <TextInput
                    style={{ height: 40, width: 320, borderColor: 'gray', borderWidth: 1, marginLeft: 10, marginTop: 5 }}
                    onChangeText={onChangeText1}
                    value={value1}
                />
            </View>
            <Text style={styles.baseText}>
                Danh Mục
                </Text>
            <FlatGrid
                itemDimension={100}
                data={items}
                style={styles.gridView}
                // staticDimension={300}
                // fixed
                spacing={10}
                renderItem={({ item }) => {

                    return (
                        <View style={[styles.itemContainer]}>
                            <Image
                                style={styles.tinyLogo}
                                source={item.icon}
                            />
                            <Text style={styles.itemName}>{item.name}</Text>

                        </View>
                    )
                }}
            />

            <Pressable
                onPress={alertNhapKhoangThuChi}
            >
                <Text style={styles.buttomn} >

                    Nhập Khoản Thu

                </Text>
            </Pressable>

        </View>

    );

}

const styles = StyleSheet.create({
    baseText: {
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 13,
        marginLeft: 2,

    },
    textngay: {
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 13,
        marginLeft: 18,
    },
    ghichu: {

        flexDirection: 'row',

    },
    contrainer: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
    },

    gridView: {
        marginTop: 10,
        flex: 1,
    },
    itemContainer: {
        borderColor: 'orange',
        borderWidth: 1,
        justifyContent: 'flex-end',
        borderRadius: 15,
        padding: 10,
        height: 80,
    },
    itemName: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    tinyLogo: {
        alignItems: 'center',
        marginLeft: 35,
        marginBottom: 3,
        width: 30,
        height: 30,
    },
    buttomn: {
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'orange',
        marginHorizontal: 5,
        color: '#888888',
        fontSize: 24,
        fontWeight: 'bold',
    }

});
export default TienThuScreen;