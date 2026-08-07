import excluir from "../../../assets/Vector.png"
import editar from "../../../assets/Vector (1).png"
import { Image, ScrollView, Text, View } from "react-native"
import { TaskItemStyle } from "./TaskItemStyle"

export const TaskItem = () => {
    return(
        <ScrollView style={TaskItemStyle.cardBox}>
            <Text style={TaskItemStyle.text}>Task Item Components</Text>
            <View><Image source={excluir}/></View>
            <View><Image source={editar}/></View>
        </ScrollView>
    )
}