import { StyleSheet } from "react-native"


export const HeaderStyle = StyleSheet.create({
    header: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 110,
        backgroundColor: "#1D2135",
        // borderStyle: "slid",
        // borderColor: "red",
    },

    headerText: {
        width: "45%",
        textAlign: "center",
        paddingBottom: 10,
        fontSize: 24,
        color: "white",
        borderBottomWidth: 3,
        borderBottomStyle: "solid",
        borderBottomColor: "#599c6b",
    }
})