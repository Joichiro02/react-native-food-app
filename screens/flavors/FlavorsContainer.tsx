import { useState } from "react";
import { Modal, StyleSheet, TouchableOpacity } from "react-native";
import { EditFlavorModal } from "../../components/modal/EditFlavorModal";
import { FlavorTable } from "../../components/table/FlavorTable";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

export default function FlavorsContainer({
    navigation,
}: RootTabScreenProps<"FlavorsContainer">) {
    const [showModal, setShowModal] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.contentHeader}>
                <Text style={styles.title}>Restaurant Menu</Text>
                <View style={styles.btnContent}>
                    <TouchableOpacity style={styles.btn}>
                        <Text>Add Flavor</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlavorTable setShowModal={setShowModal} />
            <Modal
                transparent={true}
                animationType="fade"
                visible={showModal}
                onRequestClose={() => setShowModal((prev: any) => !prev)}
            >
                <EditFlavorModal setShowModal={setShowModal} />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 5,
    },
    contentHeader: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        marginBottom: 15,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    btnContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    btn: {
        backgroundColor: "#D9D9D9",
        borderWidth: 0.5,
        borderColor: "rgba(97, 72, 28, 0.5)",
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginLeft: 10,
    },
});
