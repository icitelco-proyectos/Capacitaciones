import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";


export default function TabOneScreen() {
	const [toDo, setToDo] = useState("");
	const dispatch = useDispatch()

	const handleClickConfirmar = () =>{
		//console.log('toDo', toDo)
		dispatch({type: "ADD_TODO_ITEM", payload: toDo})
		setToDo("")
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Crear Tarea</Text>
			<View style={styles.separator} />
			<TextInput
				style={{
					color: "#C5CAE9",
					borderColor: "#5C6BC0",
					borderRadius: 12,
					borderWidth: 1,
					padding: 12,
					width: "100%",
					height:70
				}}
				value={toDo}
				onChangeText={setToDo}
				placeholder="Tarea a realizar"
				placeholderTextColor={"#C5CAE9"}
			></TextInput>
			<TouchableOpacity onPress={()=>handleClickConfirmar()} >
				<Text style={styles.button}>Confirmar</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 32,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#fff",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	button:{
		color: "#fff",
		borderColor: "#5C6BC0",
		backgroundColor:'#5C6BC0',
		borderRadius: 6,
		borderWidth: 1,
		padding: 16,
		width: "100%",
		marginTop:16
	}
});
