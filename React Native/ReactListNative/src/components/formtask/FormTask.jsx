
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { FormTaskStyle } from "./FormTaskStyle"
import { useState } from "react"

export const FormTask = () => {
    const [taskValue, setTaskValue] = useState("")

    const saveTesk = () => {
        console.log(taskValue)
        Alert.alert("Título da janela", `Tarefa: ${taskValue}cadastro com sucesso`, [
            {
                text: "OK",
                onPress: () => {}
            },

        ])
    }
    return (
        <View style={FormTaskStyle.formTaskBox}>
            <TextInput
                style={FormTaskStyle.taskInputName}
                value={taskValue}
                onChangeText={(textoDigitado) => {
                    setTaskValue(textoDigitado)
                }}
                placeholder="Adicione uma tarefa"
            />

            <TouchableOpacity 
            style={FormTaskStyle.taskButton}
            onPress={() => {
                saveTesk()
            }}
            >

                <Text style={FormTaskStyle.taskButtonTest}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}