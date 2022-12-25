import {
    Button,
    FlatList,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { OrderItemHistory } from "../../components/orderItem/OrderItemHistory";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

const data = [
    {
        num: 1,
        key: "2",
    },
    {
        num: 1,
        key: "3",
    },
    {
        num: 1,
        key: "4",
    },
    {
        num: 1,
        key: "5",
    },
    {
        num: 1,
        key: "6",
    },
    {
        num: 1,
        key: "7",
    },
    {
        num: 1,
        key: "8",
    },
    {
        num: 1,
        key: "9",
    },
    {
        num: 1,
        key: "10",
    },
];

export default function HistoryContainer({
    navigation,
}: RootTabScreenProps<"HistoryContainer">) {
    return (
        <View style={styles.container}>
            <View style={styles.contentHeader}>
                <Text style={styles.title}>History</Text>
                <TextInput placeholder="Search..." style={styles.inputField} />
            </View>
            <FlatList
                style={{ width: "100%" }}
                data={data}
                renderItem={({ item }) => <OrderItemHistory />}
            />
            <View style={styles.buttonContent}>
                <TouchableOpacity style={styles.btn}>
                    <Text>Complete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
            </View>
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
    contentHeader: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        marginBottom: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    inputField: {
        background: "#F3F3F3",
        borderWidth: 1,
        borderColor: "#DBDBDB",
        borderRadius: 5,
        paddingVertical: 0,
        paddingHorizontal: 5,
        width: 120,
    },
    buttonContent: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 5,
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
    },
    btn: {
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
