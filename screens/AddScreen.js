import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import { db } from "../firebase/firebase_config";
import { addDoc, collection } from "firebase/firestore/lite";
const AddScreen = ({ navigation }) => {
  const [newClient, setNewClient] = useState({
    name: "",
    lastName: "",
    phone: "",
    address: "",
    createdAt: new Date(),
  });
  const handleNewClient = async () => {
    await addDoc(collection(db, "store"), newClient).then(navigation.goBack());
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Add a new client</Text>
        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={(text) => setNewClient({ ...newClient, name: text })}
        ></TextInput>
        <TextInput
          placeholder="Last name"
          style={styles.input}
          onChangeText={(text) =>
            setNewClient({ ...newClient, lastName: text })
          }
        ></TextInput>
        <TextInput
          placeholder="Phone"
          style={styles.input}
          onChangeText={(text) => setNewClient({ ...newClient, phone: text })}
          keyboardType="number-pad"
        ></TextInput>
        <TextInput
          placeholder="Address"
          style={styles.input}
          onChangeText={(text) => setNewClient({ ...newClient, address: text })}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleNewClient} style={styles.button}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 26,
    textAlign: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 16,
    marginTop: 16,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 16,
  },
  button: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#EF767A",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 16,
  },
});
