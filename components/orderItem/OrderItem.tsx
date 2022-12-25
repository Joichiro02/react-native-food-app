import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";
//@ts-ignore
import restoImg from "../../assets/images/restoLogo.png";
//@ts-ignore
import receivedImg from "../../assets/images/received.png";

export const OrderItem = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <View style={styles.OrderItemContainer}>
            <View style={styles.buttonContent}>
                <TouchableOpacity
                    style={styles.leftBtn}
                    onPress={() => setShowMore(true)}
                >
                    <Text style={styles.textBtn}>ORDER ID : XRF123</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={showMore ? styles.rightBtnClose : styles.rightBtn}
                    onPress={() => setShowMore((prev) => !prev)}
                >
                    {showMore ? (
                        <Fontisto name="close" size={25} />
                    ) : (
                        <Text style={styles.textBtn}>VIEW DETAILS</Text>
                    )}
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
                {showMore ? (
                    <>
                        <View style={styles.horizontalLine} />
                        <View
                            style={[
                                styles.rowDetails,
                                { alignItems: "flex-start" },
                            ]}
                        >
                            <View
                                style={[
                                    styles.detail,
                                    { alignItems: "flex-start" },
                                ]}
                            >
                                <Text style={styles.key}>Order Details:</Text>
                                <View>
                                    <Text style={styles.value}>
                                        Ramen Noodles (3x)
                                    </Text>
                                    <Text style={styles.value}>
                                        Milk Tea (2x)
                                    </Text>
                                    <Text style={styles.value}>
                                        -1 Watermelon
                                    </Text>
                                    <Text style={styles.value}>
                                        -1 Boba Soya
                                    </Text>
                                    <Text style={styles.value}>
                                        Pecking Duck (1x)
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={[
                                    styles.detail,
                                    {
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    },
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.key,
                                        { fontSize: 12, fontWeight: "bold" },
                                    ]}
                                >
                                    Chan’s Restaurant
                                </Text>
                                <Image
                                    source={restoImg}
                                    style={styles.restoImg}
                                />
                            </View>
                        </View>
                        <View style={styles.horizontalLine} />
                        <View
                            style={[
                                styles.rowDetails,
                                { alignItems: "flex-start" },
                            ]}
                        >
                            <View
                                style={{
                                    justifyContent: "space-evenly",
                                }}
                            >
                                <View
                                    style={[
                                        styles.detail,
                                        {
                                            alignItems: "flex-start",
                                            marginVertical: 5,
                                        },
                                    ]}
                                >
                                    <Text style={styles.key}>Sub Total :</Text>
                                    <Text style={styles.value}>1,350 php</Text>
                                </View>
                                <View
                                    style={[
                                        styles.detail,
                                        {
                                            alignItems: "flex-start",
                                            marginVertical: 5,
                                        },
                                    ]}
                                >
                                    <Text style={styles.key}>
                                        Delivery fee :
                                    </Text>
                                    <Text style={styles.value}>85 php</Text>
                                </View>
                                <View
                                    style={[
                                        styles.detail,
                                        {
                                            alignItems: "flex-start",
                                            marginVertical: 5,
                                        },
                                    ]}
                                >
                                    <Text style={styles.key}>Total :</Text>
                                    <Text style={styles.value}>1,435 php</Text>
                                </View>
                            </View>
                            <View
                                style={[
                                    styles.detail,
                                    {
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginHorizontal: 10,
                                    },
                                ]}
                            >
                                <Text style={styles.key}>Order Status</Text>
                                <Image
                                    source={receivedImg}
                                    style={styles.statusImg}
                                />
                                <Text style={[styles.value, { marginLeft: 0 }]}>
                                    Order Delivered
                                </Text>
                            </View>
                        </View>
                        <View
                            style={[
                                styles.rowDetails,
                                { justifyContent: "space-evenly" },
                            ]}
                        >
                            <TouchableOpacity style={styles.bottomBtn}>
                                <Text style={styles.bottomBtnText}>
                                    Decline
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.bottomBtn}>
                                <Text style={styles.bottomBtnText}>Accept</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : null}
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
    rightBtnClose: {
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
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
    horizontalLine: {
        height: 1,
        backgroundColor: "#000",
        marginHorizontal: 5,
        marginVertical: 10,
    },
    restoImg: {
        height: 60,
        width: 60,
        borderColor: "#000",
        borderWidth: 1,
    },
    statusImg: {
        height: 60,
        width: 60,
        borderColor: "#61481c",
        borderWidth: 1,
        borderRadius: 5,
    },
    bottomBtn: {
        backgroundColor: "#000",
        borderWidth: 0.5,
        borderColor: "#61481C",
        borderRadius: 5,
        paddingVertical: 3,
        paddingHorizontal: 20,
        marginBottom: 5,
    },
    bottomBtnText: {
        color: "#E6B325",
    },
});
