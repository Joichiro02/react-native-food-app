import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { Text, View } from "../Themed";
import { Col, Row, Grid } from "react-native-easy-grid";

interface FlavorsType {
    title: string;
    price: number;
}

export const FlavorTable = () => {
    const [data, setData] = useState<FlavorsType[] | null>([
        {
            title: "Mongolian Ramen",
            price: 650,
        },
        {
            title: "Seafood Chowmien",
            price: 340,
        },
        {
            title: "Siomai ChaoFan",
            price: 220,
        },
        {
            title: "Shakr’s Fin ChowFan",
            price: 280,
        },
        {
            title: "KillerBee Rice Meal",
            price: 780,
        },
        {
            title: "Chilled Oyster",
            price: 920,
        },
        {
            title: "RawMeat Yang Chao",
            price: 320,
        },
        {
            title: "Rice Platter",
            price: 800,
        },
        {
            title: "king Fischer Crab",
            price: 1340,
        },
        {
            title: "Red Crab",
            price: 1050,
        },
    ]);
    return (
        <View style={styles.container}>
            <Grid style={{ width: "100%" }}>
                <Row style={{ backgroundColor: "#61481C", height: 50 }}>
                    <Col style={styles.header} size={30}>
                        <Text style={styles.headerText}>Title</Text>
                    </Col>
                    <Col style={styles.header} size={30}>
                        <Text style={styles.headerText}>Price</Text>
                    </Col>
                    <Col style={styles.header} size={40}>
                        <Text style={styles.headerText}>Action</Text>
                    </Col>
                </Row>
                <ScrollView style={{ width: "100%" }}>
                    {data?.map((item, index) => (
                        <Row key={index}>
                            <Col style={styles.data} size={30}>
                                <Text
                                    style={{
                                        textAlign: "left",
                                        width: "100%",
                                        paddingLeft: 5,
                                        textTransform: "capitalize",
                                    }}
                                >
                                    {item.title}
                                </Text>
                            </Col>
                            <Col style={styles.data} size={30}>
                                <Text>{item.price} php</Text>
                            </Col>
                            <Col style={styles.data} size={40}>
                                <View style={styles.btnContent}>
                                    <TouchableOpacity style={styles.btn}>
                                        <Text>Remove</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.btn, { marginLeft: 10 }]}
                                    >
                                        <Text>Update</Text>
                                    </TouchableOpacity>
                                </View>
                            </Col>
                        </Row>
                    ))}
                </ScrollView>
            </Grid>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 5,
        width: "100%",
    },
    header: {
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        textAlign: "center",
        color: "#FFF",
    },
    data: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
    },
    btnContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    btn: {
        backgroundColor: "#F8F2E9",
        borderWidth: 0.5,
        borderColor: "#61481C",
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 2,
    },
});
