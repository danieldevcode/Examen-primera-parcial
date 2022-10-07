import { db } from "../firebase/firebase_config";
import { deleteDoc, doc, updateDoc } from "firebase/firestore/lite";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Client({
  id,
  name,
  lastName,
  phone,
  address,
  createdAt,
}) {
  const navigation = useNavigation();
  const onDelete = () => {
    const docRef = doc(db, "store", id);
    deleteDoc(docRef);
  };

  const handleNavigation = () => {
    navigation.navigate("EditScreen");
  };

  return (
    <View style={styles.productContainer}>
      <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
        <AntDesign onPress={onDelete} name="delete" size={16} />
      </View>
      <TouchableOpacity onPress={handleNavigation}>
        <Text style={[styles.name, styles.textPadding]}>
          {name} {lastName}
        </Text>
        <Text style={[styles.phone, styles.textPadding]}>Phone: {phone}</Text>
        <Text style={[styles.address, styles.textPadding]}>
          Address: {address}
        </Text>
        <Text style={[styles.address, styles.textPadding]}>
          Date: {createdAt}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    margin: 16,
    borderRadius: 16,
    width: "80%",
  },
  name: { fontWeight: "bold" },
  lastName: {},
  phone: { backgroundColor: "white" },
  address: { backgroundColor: "white" },
  textPadding: {
    padding: 8,
  },
});
