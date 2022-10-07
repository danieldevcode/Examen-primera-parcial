import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase_config";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore/lite";
import Client from "../components/Clients";

const HomeScreen = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("AddScreen");
  };

  const [clients, setClients] = useState([
    {
      id: "ABCDEFGHIJKLMN",
      name: "Gerardo",
      lastName: "Rodriguez",
      phone: "3124567890",
      address: "Av. Universidad #535",
      createdAt: "6 oct 2022, 04:02:33",
    },
    {
      id: "FEJHIJGLMANWOPZ",
      name: "Gerardo",
      lastName: "Rodriguez",
      phone: "3124567890",
      address: "Av. Universidad #535",
      createdAt: "6 oct 2022, 04:02:33",
    },
  ]);

  {
    /*
  useEffect(() => {
    const collectionRef = collection(db, "store");
    const q = query(collectionRef, orderBy("createdAt", "desc"));
    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setClients(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          lastName: doc.data().lastName,
          phone: doc.data().phone,
          address: doc.data().address,
          createdAt: doc.data().createdAt,
        }))
      );
      return unsuscribe;
    });
  }, []);
*/
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clients</Text>
      {clients.map((item) => (
        <Client key={item.id} {...item} />
      ))}
      <TouchableOpacity onPress={handleNavigation} style={styles.addButton}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
  },
  title: {
    fontSize: 26,
    textAlign: "center",
  },
  addButton: {
    backgroundColor: "#EF767A",
    padding: 16,
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "88%",
    right: 16,
  },
  addText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
