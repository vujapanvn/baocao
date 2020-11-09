import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native';
import { PieChart } from "react-native-chart-kit";

function HangThangScreen() {
    const data = [

        {
            name: "Tiền Thu",
            population: 8538000,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Tiền Chi",
            population: 11920000,
            color: "#00FF00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,

        }
    ];
    return (
        <View style={styles.contrainer}>
            <View style={styles.dong1} >
                <Text style={styles.tx1}>
                    Chi Tiêu :
            </Text >
                <Text style={styles.tx2} >
                    Thu Nhập :
            </Text>

            </View>
            <View>
                <Text style={styles.thuchi}>
                    Thu Chi
                </Text>
            </View>
            <View style={styles.dong2}>
                <Text style={styles.tx3}>
                    so tien thu
                </Text>
                <Text style={styles.tx4}>
                    So Tien Chi
                </Text>
            </View>
            <View>
                <PieChart
                    data={data}
                    width={Dimensions.get("window").width}
                    height={220}
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                />
            </View>

        </View>



    );

}
const styles = StyleSheet.create({
    contrainer: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
    },
    dong1: {
        flexDirection: 'row',
        marginTop: 7,

    },
    tx1: {
        borderWidth: 1,
        padding: 5,
        paddingRight: 120,
        marginLeft: 13,
    },
    tx2: {
        borderWidth: 1,
        padding: 5,
        paddingRight: 120,
        marginLeft: 10,
    },
    thuchi: {
        borderWidth: 1,
        padding: 5,
        paddingRight: 120,
        marginLeft: 13,
        marginRight: 10,
        marginTop: 5,
    },
    dong2: {
        flexDirection: 'row',
        marginTop: 5,
    },
    tx3: {
        borderWidth: 1,
        padding: 5,
        paddingRight: 120,
        marginLeft: 13,
    },
    tx4: {
        borderWidth: 1,
        padding: 5,
        paddingRight: 105,
        marginLeft: 13,

    },

}
);
export default HangThangScreen;