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
import { addDoc, collection, updateDoc, doc } from "firebase/firestore/lite";

const EditScreen = ({ navigation }) => {
  const [editClient, setEditClient] = useState({
    name: "",
    lastName: "",
    phone: "",
    address: "",
    createdAt: "",
  });
  console.log(navigation);

  const onEdit = () => {
    const docRef = doc(db, "store", "Fdzsgr7gpjmJOedlwPX1");
    updateDoc(docRef, {
      name: editClient.name,
      lastName: editClient.lastName,
      phone: editClient.phone,
      address: editClient.address,
      createdAt: editClient.createdAt,
    }).then(navigation.goBack());
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Edit client</Text>
        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={(text) => setEditClient({ ...editClient, name: text })}
        ></TextInput>
        <TextInput
          placeholder="Last name"
          style={styles.input}
          onChangeText={(text) =>
            setEditClient({ ...editClient, lastName: text })
          }
        ></TextInput>
        <TextInput
          placeholder="Phone"
          style={styles.input}
          onChangeText={(text) => setEditClient({ ...editClient, phone: text })}
          keyboardType="number-pad"
        ></TextInput>
        <TextInput
          placeholder="Address"
          style={styles.input}
          onChangeText={(text) =>
            setEditClient({ ...editClient, address: text })
          }
        ></TextInput>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onEdit} style={styles.button}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditScreen;

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
