import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { Text, View } from "../Themed";
import { Col, Row, Grid } from "react-native-easy-grid";

interface MenuType {
    title: string;
    price: number;
    availability: boolean;
}

const SwitchComponent = ({ status }: any) => {
    const [open, setOpen] = useState<boolean>(false);
    useEffect(() => {
        setOpen(status);
        return () => setOpen(false);
    }, [status]);
    return (
        <Switch
            value={open}
            onValueChange={setOpen}
            thumbColor={open ? "#61481C" : "#eee"}
            trackColor={{ true: "#E6B325" }}
        />
    );
};

export const MenuTable = () => {
    const [data, setData] = useState<MenuType[] | null>([
        {
            title: "Mongolian Ramen",
            price: 650,
            availability: false,
        },
        {
            title: "Seafood Chowmien",
            price: 340,
            availability: true,
        },
        {
            title: "Siomai ChaoFan",
            price: 220,
            availability: false,
        },
        {
            title: "Shakr’s Fin ChowFan",
            price: 280,
            availability: true,
        },
        {
            title: "KillerBee Rice Meal",
            price: 780,
            availability: true,
        },
        {
            title: "Chilled Oyster",
            price: 920,
            availability: false,
        },
        {
            title: "RawMeat Yang Chao",
            price: 320,
            availability: true,
        },
        {
            title: "Rice Platter",
            price: 800,
            availability: false,
        },
        {
            title: "king Fischer Crab",
            price: 1340,
            availability: true,
        },
        {
            title: "Red Crab",
            price: 1050,
            availability: false,
        },
    ]);
    return (
        <View style={styles.container}>
            <Grid style={{ width: "100%" }}>
                <Row style={{ backgroundColor: "#61481C", height: 50 }}>
                    <Col style={styles.header} size={25}>
                        <Text style={styles.headerText}>Title</Text>
                    </Col>
                    <Col style={styles.header} size={25}>
                        <Text style={styles.headerText}>Price</Text>
                    </Col>
                    <Col style={styles.header} size={20}>
                        <Text style={styles.headerText}>Availability</Text>
                    </Col>
                    <Col style={styles.header} size={30}>
                        <Text style={styles.headerText}>Action</Text>
                    </Col>
                </Row>
                <ScrollView style={{ width: "100%" }}>
                    {data?.map((item, index) => (
                        <Row key={index}>
                            <Col style={styles.data} size={25}>
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
                            <Col style={styles.data} size={25}>
                                <Text>{item.price} php</Text>
                            </Col>
                            <Col style={styles.data} size={20}>
                                <SwitchComponent status={item.availability} />
                            </Col>
                            <Col style={styles.data} size={30}>
                                <View style={styles.btnContent}>
                                    <TouchableOpacity style={styles.btn}>
                                        <Text>Edit</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.btn, { marginLeft: 10 }]}
                                    >
                                        <Text>Delete</Text>
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
        // width: "100%",
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
