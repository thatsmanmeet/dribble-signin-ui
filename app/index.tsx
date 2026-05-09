import SocialBox from "@/components/SocialBox";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        <Image source={require("@/assets/images/logo.png")} style={{ height: 80, width: 80 }} />
        <Text style={styles.headerTitle}>Sign In</Text>
        <Text style={styles.headerSubText}>{"Let's"} experience the joy of telecare AI</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formLabel}>Email Address</Text>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <FontAwesome name="envelope" style={{ position: "absolute", top: 27, left: 10 }} size={15} />
          <TextInput style={styles.formInput} placeholder="Enter your email..." value={email} onChangeText={setEmail} />
        </View>
        <Text style={styles.formLabel}>Password</Text>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <FontAwesome name="lock" style={{ position: "absolute", top: 27, left: 10 }} size={18} />
          <TextInput style={styles.formInput} placeholder="Enter your password..." value={password} onChangeText={setPassword} secureTextEntry={true} />
        </View>
        <Pressable onPress={() => { }} style={styles.authButton}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Sign In</Text>
          <FontAwesome name="arrow-right" color={"#fff"} />
        </Pressable>
      </View>

      <View style={styles.socialMediaBox}>
        <SocialBox name="facebook" />
        <SocialBox name="google" />
        <SocialBox name="instagram" />
      </View>

      <View style={styles.footerContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
          <Text>{"Don't"} have an account? </Text>
          <Link style={styles.footerLinks} href={"/signup"}>Sign Up</Link>
        </View>
        <Link style={styles.footerLinks} href={"/forgot-password"}>Forgot your password</Link>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f1f1f1"
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 10
  },
  headerSubText: {
    color: "#666"
  },
  formContainer: {
    marginTop: 30,
    padding: 10
  },
  formLabel: {
    fontWeight: 'bold',
    marginBottom: 3
  },
  formInput: {
    borderWidth: 1,
    padding: 14,
    paddingLeft: 30,
    borderRadius: 13,
    marginVertical: 10,
    width: "100%"
  },
  authButton: {
    marginTop: 15,
    padding: 16,
    backgroundColor: "rgb(60, 200, 60)",
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10
  },

  socialMediaBox: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  footerContainer: {
    marginTop: 50,
    alignItems: 'center',
    gap: 10
  },
  footerLinks: {
    color: "rgb(38, 126, 38)",
    textDecorationLine: "underline"
  }
})