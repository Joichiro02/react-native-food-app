import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import restoLogo from "../../assets/images/restoLogo.png";

export default function AccountContainer({
    navigation,
}: RootTabScreenProps<"AccountContainer">) {
    return (
        <View style={styles.container}>
            <ScrollView style={{ width: "100%" }}>
                <Text style={styles.title}>Restaurant Information</Text>
                <View style={styles.rowContent}>
                    <Text style={styles.label}>My Restaurant</Text>
                    <Text style={styles.value}>Alexan Louis Torio</Text>
                </View>
                <View style={styles.rowContent}>
                    <Text style={styles.label}>Restaurant Name</Text>
                    <Text style={styles.value}>Měiwèi de shíwù 美味的食物</Text>
                </View>
                <View style={styles.rowContent}>
                    <Text style={styles.label}>Restaurant Description</Text>
                    <Text
                        style={[
                            styles.value,
                            {
                                fontSize: 10,
                                fontWeight: "400",
                                textAlign: "justify",
                            },
                        ]}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.{" "}
                    </Text>
                </View>
                <View style={styles.rowContent}>
                    <Text style={styles.label}>Restaurant Address</Text>
                    <Text style={styles.value}>
                        Unit 123, GT Tower Intl., Ayala Avenue, Makati City,
                    </Text>
                </View>
                <View style={styles.rowContent}>
                    <Text style={styles.label}>Contact Number</Text>
                    <Text style={styles.value}>(+63) 917 123 4567</Text>
                </View>
                <View style={styles.rowContent}>
                    <Text style={styles.label}>Email</Text>
                    <Text style={styles.value}>johndoe2022@gmail.com</Text>
                </View>
                <View style={styles.rowContent}>
                    <Image
                        source={restoLogo}
                        style={{
                            height: 122,
                            width: 122,
                            borderWidth: 0.5,
                            borderColor: "#61481C",
                            borderRadius: 5,
                        }}
                    />
                </View>
                <View style={styles.rowContent}>
                    <TouchableOpacity style={styles.btn}>
                        <Text>Edit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    title: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
    },
    rowContent: {
        marginTop: 5,
        alignItems: "center",
        width: "100%",
    },
    label: {
        textAlign: "center",
        fontSize: 10,
    },
    value: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: "#61481C",
        width: "100%",
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginTop: 4,
    },
    btn: {
        margin: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D9D9D9",
        borderWidth: 0.5,
        borderColor: "#61481C",
        borderRadius: 3,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: 100,
    },
});
