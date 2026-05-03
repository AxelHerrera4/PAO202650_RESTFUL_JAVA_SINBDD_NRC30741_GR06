# Instrucciones de Migración SOAP → REST

## ¿Qué se cambió?

El cliente de escritorio (CLIESC) ha sido migrado de SOAP a REST. Ahora consume los endpoints REST del servidor en lugar de usar Web Services SOAP.

### Cambios principales:
- ✅ Eliminadas dependencias SOAP (jaxws)
- ✅ Agregada librería Gson para parsear JSON
- ✅ Creado nuevo cliente REST (`ConversorClient.java`)
- ✅ Creado modelo de datos (`Conversor.java`)
- ✅ Actualizado formulario de conversión (`FrmConversor.java`)
- ✅ Expandidos endpoints REST en el servidor (16 endpoints)

---

## Compilación

### 1. Compilar el cliente
```bash
cd "04. CLIESC\CLIESC_ConUni_Java_GR6"
mvn clean install
```

### 2. Compilar el servidor (si es necesario)
```bash
cd "04. SERVIDOR\WS_CONUNI_Java_GR6"
mvn clean install
```

---

## Ejecución

### Prerequisitos:
1. **Servidor REST corriendo** en `http://localhost:8080/ws_ConUni_Java_GR6/api/conversor`
2. **Java 21** o superior
3. **Maven 3.8+**

### Pasos:

#### 1. Iniciar el servidor
```bash
cd "04. SERVIDOR\WS_CONUNI_Java_GR6"
mvn tomcat7:run
```
O deploya el WAR en tu servidor Tomcat

#### 2. Ejecutar el cliente
```bash
cd "04. CLIESC\CLIESC_ConUni_Java_GR6"
mvn exec:java
```

Alternativa (desde IDE):
- Click derecho en `FrmLogin.java` → Run as Java Application

---

## Endpoints Disponibles

El servidor ahora expone **16 endpoints REST**:

### Temperatura (6)
- `GET /api/conversor/ctof?valor=X` → Celsius a Fahrenheit
- `GET /api/conversor/ftoc?valor=X` → Fahrenheit a Celsius
- `GET /api/conversor/ctok?valor=X` → Celsius a Kelvin
- `GET /api/conversor/ktoc?valor=X` → Kelvin a Celsius
- `GET /api/conversor/ftok?valor=X` → Fahrenheit a Kelvin
- `GET /api/conversor/ktof?valor=X` → Kelvin a Fahrenheit

### Longitud (5)
- `GET /api/conversor/kmametros?valor=X` → Km a Metros
- `GET /api/conversor/metrosacm?valor=X` → Metros a Centímetros
- `GET /api/conversor/pulgadasacm?valor=X` → Pulgadas a Centímetros
- `GET /api/conversor/piesametros?valor=X` → Pies a Metros
- `GET /api/conversor/millasakh?valor=X` → Millas a Km

### Masa (5)
- `GET /api/conversor/kgagramos?valor=X` → Kg a Gramos
- `GET /api/conversor/gramosamg?valor=X` → Gramos a Miligramos
- `GET /api/conversor/librasakh?valor=X` → Libras a Kg
- `GET /api/conversor/onzasagramos?valor=X` → Onzas a Gramos
- `GET /api/conversor/toneladasakh?valor=X` → Toneladas a Kg

### Respuesta JSON
```json
{
  "valorOrigen": 32.0,
  "unidadOrigen": "Fahrenheit",
  "valorDestino": 0.0,
  "unidadDestino": "Celsius"
}
```

---

## Troubleshooting

### Error: "No se pudo consumir el servicio REST"
- **Verificar** que el servidor esté corriendo
- **Verificar** que la URL base es correcta: `http://localhost:8080/ws_ConUni_Java_GR6/api/conversor`
- **Ver logs** del servidor para más detalles

### Error: "ConnectException"
- El servidor no está disponible
- Verifica que Tomcat/servidor está corriendo
- Verifica el puerto (default: 8080)

### Error: "Maven compilation failed"
- Asegúrate de tener Maven 3.8+ instalado
- Ejecuta: `mvn -v`
- Ejecuta: `mvn clean` y luego `mvn install`

---

## Nuevos Archivos del Cliente

```
src/main/java/monster/edu/ec/cliesc_conuni_java_gr6/
├── ConversorClient.java      (NUEVO) - Cliente HTTP REST
├── Conversor.java            (NUEVO) - Modelo de datos
├── FrmConversor.java         (MODIFICADO) - Usa ConversorClient en lugar de SOAP
├── FrmLogin.java             (Sin cambios)
├── FrmMenu.java              (Sin cambios)
└── CLIESC_ConUni_Java_GR6.java (Sin cambios)
```

---

## Ventajas de REST vs SOAP

| Aspecto | REST | SOAP |
|--------|------|------|
| **Tamaño** | Más ligero (JSON) | Más pesado (XML) |
| **Velocidad** | Más rápido | Más lento |
| **Legibilidad** | Fácil de leer | Complejo |
| **Caché** | Soportado | No soportado |
| **Escalabilidad** | Mejor | Limitada |

---

## Preguntas Frecuentes

**P: ¿Puedo volver a SOAP?**
A: No es necesario. REST es más eficiente y moderno. Si lo necesitas, revierte los cambios desde Git.

**P: ¿El cliente sigue funcionando sin cambios?**
A: No. El cliente fue actualizado completamente para usar REST. Las interfaces gráficas son idénticas.

**P: ¿Hay más conversiones disponibles?**
A: Sí, el servidor tiene métodos para ~30 conversiones. Puedes expandir fácilmente agregando más endpoints.

---

**Fecha de migración**: Mayo 2026  
**Versión cliente**: 1.0-SNAPSHOT  
**Versión servidor**: 1.0-SNAPSHOT
