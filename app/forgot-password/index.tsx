import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const methods = [
    { id: "email", icon: "envelope" as const, title: "Email Address", subtitle: "Send via email address securely." },
    { id: "2fa", icon: "shield" as const, title: "2 Factor Authentication", subtitle: "Send via 2FA securely." },
    { id: "google", icon: "lock" as const, title: "Google Authenticator", subtitle: "Send via authenticator securely." },
];

export default function ForgotPassword() {
    const [selected, setSelected] = useState("2fa");
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Forgot Password</Text>
                <Text style={styles.headerSubText}>{"Select which methods you'd like to reset."}</Text>
            </View>

            <View style={styles.methodsContainer}>
                {methods.map((method) => {
                    const isSelected = selected === method.id;
                    return (
                        <Pressable
                            key={method.id}
                            onPress={() => setSelected(method.id)}
                            style={[styles.methodCard, isSelected && styles.methodCardSelected]}
                        >
                            <View style={[styles.methodIconBox, isSelected && styles.methodIconBoxSelected]}>
                                <FontAwesome name={method.icon} size={20} color={isSelected ? "rgb(60, 200, 60)" : "#555"} />
                            </View>
                            <View style={styles.methodTextBox}>
                                <Text style={styles.methodTitle}>{method.title}</Text>
                                <Text style={styles.methodSubtitle}>{method.subtitle}</Text>
                            </View>
                        </Pressable>
                    );
                })}
            </View>

            <Pressable onPress={() => { }} style={styles.authButton}>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>Reset Password</Text>
                <FontAwesome name="arrow-right" color={"#fff"} />
            </Pressable>

            <View style={styles.lockWatermark}>
                <FontAwesome name="lock" size={120} color="#e0e0e0" />
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
        gap: 8,
        marginBottom: 30
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: '700'
    },
    headerSubText: {
        color: "#666"
    },
    methodsContainer: {
        gap: 14
    },
    methodCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 16,
        gap: 14,
        borderWidth: 2,
        borderColor: "transparent"
    },
    methodCardSelected: {
        borderColor: "rgb(60, 200, 60)"
    },
    methodIconBox: {
        width: 48,
        height: 48,
        borderRadius: 14,
        backgroundColor: "#f0f0f0",
        justifyContent: 'center',
        alignItems: 'center'
    },
    methodIconBoxSelected: {
        backgroundColor: "rgba(60, 200, 60, 0.15)"
    },
    methodTextBox: {
        flex: 1,
        gap: 3
    },
    methodTitle: {
        fontWeight: 'bold',
        fontSize: 15
    },
    methodSubtitle: {
        color: "#666",
        fontSize: 13
    },
    authButton: {
        marginTop: 30,
        padding: 16,
        backgroundColor: "rgb(60, 200, 60)",
        borderRadius: 11,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10
    },
    lockWatermark: {
        alignItems: 'center',
        marginTop: 40,
        opacity: 0.5
    }
})
