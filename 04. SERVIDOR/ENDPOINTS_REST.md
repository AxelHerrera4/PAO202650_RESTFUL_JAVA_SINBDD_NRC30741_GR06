# Servidor REST - Endpoints de Conversión

## URL Base
```
http://localhost:8080/ws_ConUni_Java_GR6/api/conversor
```

## Endpoints Disponibles

### 1. CONVERSIONES DE TEMPERATURA

#### Celsius a Fahrenheit
```http
GET /api/conversor/ctof?valor=25
```
**Respuesta**:
```json
{
  "valorOrigen": 25.0,
  "unidadOrigen": "Celsius",
  "valorDestino": 77.0,
  "unidadDestino": "Fahrenheit"
}
```

#### Fahrenheit a Celsius
```http
GET /api/conversor/ftoc?valor=77
```

#### Celsius a Kelvin
```http
GET /api/conversor/ctok?valor=25
```

#### Kelvin a Celsius
```http
GET /api/conversor/ktoc?valor=298.15
```

#### Fahrenheit a Kelvin
```http
GET /api/conversor/ftok?valor=77
```

#### Kelvin a Fahrenheit
```http
GET /api/conversor/ktof?valor=298.15
```

---

### 2. CONVERSIONES DE LONGITUD

#### Kilómetros a Metros
```http
GET /api/conversor/kmametros?valor=5
```

#### Metros a Centímetros
```http
GET /api/conversor/metrosacm?valor=10
```

#### Pulgadas a Centímetros
```http
GET /api/conversor/pulgadasacm?valor=24
```

#### Pies a Metros
```http
GET /api/conversor/piesametros?valor=10
```

#### Millas a Kilómetros
```http
GET /api/conversor/millasakh?valor=5
```

---

### 3. CONVERSIONES DE MASA

#### Kilogramos a Gramos
```http
GET /api/conversor/kgagramos?valor=2.5
```

#### Gramos a Miligramos
```http
GET /api/conversor/gramosamg?valor=500
```

#### Libras a Kilogramos
```http
GET /api/conversor/librasakh?valor=100
```

#### Onzas a Gramos
```http
GET /api/conversor/onzasagramos?valor=8
```

#### Toneladas a Kilogramos
```http
GET /api/conversor/toneladasakh?valor=2
```

---

## Formato de Respuesta

Todos los endpoints retornan un objeto JSON con la siguiente estructura:

```json
{
  "valorOrigen": <double>,      // Valor a convertir
  "unidadOrigen": "<string>",   // Unidad del valor origen
  "valorDestino": <double>,     // Valor convertido
  "unidadDestino": "<string>"   // Unidad del valor destino
}
```

---

## Códigos HTTP

| Código | Significado |
|--------|-----------|
| **200** | OK - Conversión exitosa |
| **400** | Bad Request - Parámetros inválidos |
| **404** | Not Found - Endpoint no existe |
| **500** | Server Error - Error interno del servidor |

---

## Ejemplo de Uso cURL

```bash
# Convertir 100 Fahrenheit a Celsius
curl "http://localhost:8080/ws_ConUni_Java_GR6/api/conversor/ftoc?valor=100"

# Convertir 1000 metros a centímetros
curl "http://localhost:8080/ws_ConUni_Java_GR6/api/conversor/metrosacm?valor=1000"

# Convertir 50 kilogramos a gramos
curl "http://localhost:8080/ws_ConUni_Java_GR6/api/conversor/kgagramos?valor=50"
```

---

## Clase Modelo - Conversor

**Ubicación**: `src/main/java/monster/edu/ec/modelo/Conversor.java`

```java
public class Conversor {
    private double valorOrigen;
    private String unidadOrigen;
    private double valorDestino;
    private String unidadDestino;
    
    // Getters y Setters...
}
```

---

## Clase Servicio - ConversorServicio

**Ubicación**: `src/main/java/monster/edu/ec/servicios/ConversorServicio.java`

Contiene **30+ métodos** de conversión:

### Temperatura (6)
- `fahrenheitACelsius()`
- `celsiusAFahrenheit()`
- `celsiusAKelvin()`
- `kelvinACelsius()`
- `fahrenheitAKelvin()`
- `kelvinAFahrenheit()`

### Longitud (16)
- Metros ↔ Kilómetros, Feet, Miles, Centímetros, Milímetros
- Feet ↔ Yards
- Kilómetros ↔ Millas
- Y más...

### Masa (10)
- Kilogramos ↔ Gramos, Libras, Toneladas
- Gramos ↔ Miligramos, Onzas
- Y más...

---

## Compilación del Servidor

```bash
cd "04. SERVIDOR\WS_CONUNI_Java_GR6"
mvn clean install
```

---

## Despliegue

### Opción 1: Tomcat Maven Plugin
```bash
mvn tomcat7:run
```

### Opción 2: Generar WAR y desplegar manualmente
```bash
mvn clean package
# Copiar target/WS_CONUNI_JAVA_GR6-1.0-SNAPSHOT.war a $CATALINA_HOME/webapps/
```

---

## Notas de Implementación

- **Framework**: Jakarta EE 11
- **REST API**: JAX-RS (Jakarta REST)
- **Java Version**: 17+
- **Content-Type**: `application/json`
- **Métodos soportados**: GET

---

## Posibles Extensiones

1. **Agregar más conversiones**: Basta agregar métodos al servicio y endpoints al controlador REST
2. **Validación**: Agregar validación de parámetros en el controlador
3. **Caché**: Implementar caché para conversiones frecuentes
4. **Logging**: Agregar logging de conversiones
5. **Estadísticas**: Guardar histórico de conversiones realizadas

---

**Última actualización**: Mayo 2026  
**Version**: 1.0-SNAPSHOT  
**Estado**: Producción
