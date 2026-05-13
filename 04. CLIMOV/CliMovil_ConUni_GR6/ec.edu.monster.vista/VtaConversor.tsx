import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { Operacion } from '../ec.edu.monster.modelo/Conversor'

type Props = {
  category: string
  operationsList: Operacion[]
  operation: string
  setOperation: (v: string) => void
  valor: string
  resultado: string
  unidadOrigen: string
  unidadDestino: string
  onCategoryChange: (c: string) => void
  onConvert: () => void
  onValorChange: (v: string) => void
  onLimpiar: () => void
  onLogout: () => void
}

export default function VtaConversor({
  category,
  operationsList,
  operation,
  setOperation,
  valor,
  resultado,
  unidadOrigen,
  unidadDestino,
  onCategoryChange,
  onConvert,
  onValorChange,
  onLimpiar,
  onLogout,
}: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.title}>ConUni</Text>
        <Text style={styles.subtitle}>{category}</Text>
        <Text style={styles.headerDescription}>
          {category === 'Temperatura'
            ? 'Convierte entre Celsius, Fahrenheit y Kelvin'
            : category === 'Longitud'
            ? 'Convierte entre Kilometros, Metros, Centimetros, Pulgadas, Pies y Millas'
            : 'Convierte entre Kilogramos, Gramos, Libras, Onzas y Toneladas'}
        </Text>
      </View>

      <View style={styles.categorySelector}>
        {['Temperatura', 'Longitud', 'Masa'].map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.categoryBtn, category === cat && styles.activeCategoryBtn]}
            onPress={() => onCategoryChange(cat)}
          >
            <Text style={styles.categoryBtnText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Operación:</Text>
        <Picker selectedValue={operation} onValueChange={setOperation} style={styles.picker}>
          {operationsList.map((op) => (
            <Picker.Item key={op.code} label={op.label} value={op.code} />
          ))}
        </Picker>

        <TextInput
          style={styles.input}
          placeholder="Valor a convertir"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={valor}
          onChangeText={onValorChange}
        />

        <View style={styles.resultBox}>
          <Text style={styles.resValue}>{resultado}</Text>
          <Text style={styles.resUnit}>{unidadOrigen}</Text>
          <Text style={styles.resUnit}>{unidadDestino}</Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={onConvert}>
            <Text style={styles.buttonText}>CONVERTIR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={onLimpiar}>
            <Text style={styles.buttonText}>LIMPIAR</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.buttonText}>VOLVER</Text>
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
  headerSection: { marginBottom: 20, alignItems: 'center' },
  title: { fontSize: 36, color: '#60a5fa', fontWeight: 'bold', marginBottom: 4 },
  subtitle: { fontSize: 18, color: '#bfdbfe', marginBottom: 8 },
  headerDescription: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 8,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  categorySelector: { flexDirection: 'row', gap: 12, marginBottom: 20, width: '100%' },
  categoryBtn: {
    flex: 1,
    padding: 12,
    backgroundColor: '#334155',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  activeCategoryBtn: { backgroundColor: '#2563eb', borderColor: '#60a5fa' },
  categoryBtnText: { color: '#fff', fontWeight: '600', fontSize: 14 },
  card: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#f8fafc',
    padding: 24,
    borderRadius: 12,
    elevation: 5,
  },
  label: { color: '#334155', fontWeight: 'bold', marginTop: 14, fontSize: 14 },
  picker: { backgroundColor: '#e2e8f0', marginVertical: 8, borderRadius: 8, color: '#1e293b' },
  input: {
    backgroundColor: '#e2e8f0',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginTop: 8,
    color: '#1e293b',
  },
  resultBox: {
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  resValue: { color: '#0f172a', fontSize: 28, fontWeight: 'bold' },
  resUnit: { color: '#475569', fontSize: 14, marginTop: 4 },
  buttonRow: { flexDirection: 'row', gap: 12, marginTop: 16 },
  button: {
    flex: 1,
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonSecondary: { backgroundColor: '#0ea5e9' },
  logoutButton: {
    backgroundColor: '#f87171',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
})
