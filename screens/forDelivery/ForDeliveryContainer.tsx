import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

export default function ForDeliveryContainer({
    navigation,
}: RootTabScreenProps<"ForDeliveryContainer">) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>For Delivery Container</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
