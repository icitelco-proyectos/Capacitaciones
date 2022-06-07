import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useSelector } from "react-redux";

export default function TabTwoScreen() {
	//@ts-ignore
	const toDoList = useSelector((state) => state.toDo.toDoList);

	const navigation = useNavigation<any>()

	const handleClickToDo = (toDo:any)=>{
		console.log(`toDo ${toDo}`)
		navigation.navigate("EditTodoScreen",{toDoEdit:toDo})
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>ToDo List {toDoList.length}</Text>

			<ScrollView style={{ flex: 1, width: "100%" }}>
				{toDoList.map((todo: any) => (
					<View
						style={{
							borderColor: "#5C6BC0",
							borderRadius: 12,
							borderWidth: 1,
							padding: 12,
							width: "100%",
							marginVertical:10
						}}
						key={todo}
					>
						<TouchableOpacity onPress={()=>handleClickToDo(todo)}>
							<Text style={{ color: "#fff" }}>{todo}</Text>
						</TouchableOpacity>
					</View>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		color: "#fff",
		padding: 32,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#fff",
		marginVertical:16
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
