import React from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Grid, Col, Row } from "react-native-easy-grid";

export const EditFlavorModal = ({ setShowModal }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.modalContent}>
                <Grid>
                    <Row style={styles.headerContent}>
                        <Col size={25} style={styles.Col}>
                            <Text style={styles.headerData}>Flavor Name</Text>
                        </Col>
                        <Col size={25} style={styles.Col}>
                            <Text style={styles.headerData}>Price</Text>
                        </Col>
                        <Col size={50} style={styles.Col}>
                            <Text style={styles.headerData}>Action</Text>
                        </Col>
                    </Row>
                    <Row style={styles.bodyContent}>
                        <Col size={25} style={styles.Col}>
                            <Text>Original</Text>
                        </Col>
                        <Col size={25} style={styles.Col}>
                            <Text>0.00</Text>
                        </Col>
                        <Col size={50} style={styles.btnContent}>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() =>
                                    setShowModal((prev: any) => !prev)
                                }
                            >
                                <Text style={styles.text}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() =>
                                    setShowModal((prev: any) => !prev)
                                }
                            >
                                <Text style={styles.text}>Save</Text>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                </Grid>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(21,21,21,0.5)",
    },
    modalContent: {
        top: "5%",
        left: "50%",
        transform: [{ translateX: -(Dimensions.get("screen").width - 50) / 2 }],
        height: 100,
        width: Dimensions.get("screen").width - 50,
        backgroundColor: "#FFF",
    },
    headerContent: {
        backgroundColor: "#D9D9D9",
        borderColor: "#000",
        borderWidth: 1,
        alignItems: "center",
    },
    Col: {
        alignItems: "center",
        justifyContent: "center",
    },
    headerData: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "400",
    },
    bodyContent: {
        backgroundColor: "#FFF",
        alignItems: "center",
    },
    btnContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
    },
    btn: {
        backgroundColor: "#ECECEC",
        borderColor: "#343A40",
        borderWidth: 0.5,
        paddingVertical: 3,
        paddingHorizontal: 10,
        width: 60,
    },
    text: {
        textAlign: "center",
    },
});
