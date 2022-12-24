import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const OrderItem = () => {
    return (
        <View style={styles.OrderItemContainer}>
            <View style={styles.buttonContent}>
                <TouchableOpacity style={styles.leftBtn}>
                    <Text style={styles.textBtn}>ORDER ID : XRF123</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightBtn}>
                    <Text style={styles.textBtn}>VIEW DETAILS</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.detailsContent}>
                <View style={styles.rowDetails}>
                    <View style={styles.detail}>
                        <Text style={styles.key}>Customer Name:</Text>
                        <Text style={styles.value}>Brandon Boyd</Text>
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.key}>Contact Number:</Text>
                        <Text style={styles.value}>09171234567</Text>
                    </View>
                </View>
                <View style={styles.rowDetails}>
                    <View style={styles.detail}>
                        <Text style={styles.key}>Pick up Address:</Text>
                        <Text style={styles.value}>
                            Chan's Chinese Restaurant, Panglao, Bohol,
                            Philippines
                        </Text>
                    </View>
                </View>
                <View style={styles.rowDetails}>
                    <View style={styles.detail}>
                        <Text style={styles.key}>Delivery Address:</Text>
                        <Text style={styles.value}>
                            4117 41st Floor., GT Tower Intl., De La Costa,
                            Makati City
                        </Text>
                    </View>
                </View>
                <View style={styles.rowDetails}>
                    <View style={styles.detail}>
                        <Text style={styles.key}>Order Placed Time:</Text>
                        <Text style={styles.value}>01:30 PM</Text>
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.key}>Order Delivered Time:</Text>
                        <Text style={styles.value}>01:40 PM</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    OrderItemContainer: {
        width: "100%",
        marginBottom: 10,
    },
    buttonContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    leftBtn: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#A47E3B",
        padding: 5,
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: "#61481C",
    },
    rightBtn: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E6B325",
        padding: 5,
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: "#61481C",
    },
    textBtn: {
        color: "#FFF",
    },
    detailsContent: {
        backgroundColor: "#E4E4E4",
        borderWidth: 1,
        borderColor: "#61481C",
        borderRadius: 5,
        borderTopLeftRadius: 0,
        marginVertical: 5,
    },
    rowDetails: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: 5,
    },
    detail: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    key: {
        fontSize: 10,
    },
    value: {
        fontSize: 10,
        fontWeight: "bold",
        marginLeft: 20,
    },
});
