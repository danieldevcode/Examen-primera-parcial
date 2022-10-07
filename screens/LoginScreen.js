import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { authentication } from "../firebase/firebase_config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
      }
    });

    return unsubscribe;
  }, []);

  const handleSignIn = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((result) => console.log(result.user))
      .catch((error) => {
        console.log(`${error.code}
      ${error.message}`);
      });
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(`${error.code}
        ${error.message}`);
      });
  };

  const handleNavigation = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChange={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChange={(text) => setPassword(text)}
        ></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp} style={[styles.buttonOutline]}>
          <Text>Not a member? Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNavigation}
          style={[styles.buttonOutline]}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
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
    width: "80%",
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
  buttonOutline: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
