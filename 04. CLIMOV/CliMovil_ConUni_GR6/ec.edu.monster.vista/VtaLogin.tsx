import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'

type Props = {
  username: string
  setUsername: (v: string) => void
  password: string
  setPassword: (v: string) => void
  onLogin: () => void
}

export default function VtaLogin({ username, setUsername, password, setPassword, onLogin }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.heroSection}>
        <Text style={styles.title}>ConUni</Text>
        <Text style={styles.subtitle}>Conversor Universal</Text>
        <Text style={styles.heroDescription}>
          Convierte unidades de temperatura, longitud y masa de forma rápida y sencilla
        </Text>
      </View>

      <View style={styles.loginCard}>
        <Text style={styles.loginTitle}>Iniciar Sesión</Text>

        <Text style={styles.label}>Usuario:</Text>
        <TextInput
          style={styles.input}
          placeholder="usuario"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="contraseña"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
          <Text style={styles.buttonText}>ACCEDER</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
  heroSection: { marginBottom: 32, alignItems: 'center' },
  title: { fontSize: 36, color: '#60a5fa', fontWeight: 'bold', marginBottom: 4 },
  subtitle: { fontSize: 18, color: '#bfdbfe', marginBottom: 8 },
  heroDescription: {
    fontSize: 14,
    color: '#cbd5e1',
    marginTop: 12,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  loginCard: {
    width: '100%',
    backgroundColor: '#f8fafc',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  loginTitle: { fontSize: 20, fontWeight: 'bold', color: '#0f172a', marginBottom: 16 },
  label: { color: '#334155', fontWeight: 'bold', marginTop: 14, fontSize: 14 },
  input: {
    backgroundColor: '#e2e8f0',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginTop: 8,
    color: '#1e293b',
  },
  loginButton: {
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
})
