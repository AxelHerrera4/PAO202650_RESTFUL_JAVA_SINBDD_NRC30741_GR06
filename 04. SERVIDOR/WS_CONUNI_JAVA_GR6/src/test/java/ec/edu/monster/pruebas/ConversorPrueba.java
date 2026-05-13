package ec.edu.monster.pruebas;

import ec.edu.monster.controlador.ConversorServicio;
import ec.edu.monster.modelo.Conversor;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ConversorPrueba {

    private ConversorServicio servicio;

    @BeforeEach
    public void setUp() {
        servicio = new ConversorServicio();
    }

    // ============ TEMPERATURA ============

    @Test
    public void testCelsiusAFahrenheit() {
        Conversor resultado = servicio.celsiusAFahrenheit(100);
        assertEquals(212.0, resultado.getValorDestino(), 0.01);
        assertEquals("Celsius", resultado.getUnidadOrigen());
        assertEquals("Fahrenheit", resultado.getUnidadDestino());
    }

    @Test
    public void testFahrenheitACelsius() {
        Conversor resultado = servicio.fahrenheitACelsius(32);
        assertEquals(0.0, resultado.getValorDestino(), 0.01);
    }

    @Test
    public void testCelsiusAKelvin() {
        Conversor resultado = servicio.celsiusAKelvin(0);
        assertEquals(273.15, resultado.getValorDestino(), 0.01);
    }

    @Test
    public void testKelvinACelsius() {
        Conversor resultado = servicio.kelvinACelsius(273.15);
        assertEquals(0.0, resultado.getValorDestino(), 0.01);
    }

    @Test
    public void testFahrenheitAKelvin() {
        Conversor resultado = servicio.fahrenheitAKelvin(32);
        assertEquals(273.15, resultado.getValorDestino(), 0.01);
    }

    @Test
    public void testKelvinAFahrenheit() {
        Conversor resultado = servicio.kelvinAFahrenheit(273.15);
        assertEquals(32.0, resultado.getValorDestino(), 0.01);
    }

    // ============ LONGITUD ============

    @Test
    public void testKilometrosAMetros() {
        Conversor resultado = servicio.kilometrosAMetros(1);
        assertEquals(1000.0, resultado.getValorDestino(), 0.01);
    }

    @Test
    public void testMetrosACentimetros() {
        Conversor resultado = servicio.metrosACentimetros(1);
        assertEquals(100.0, resultado.getValorDestino(), 0.01);
    }

    @Test
    public void testPulgadasACentimetros() {
        Conversor resultado = servicio.pulgadasACentimetros(1);
        assertEquals(2.54, resultado.getValorDestino(), 0.01);
    }

    @Test
    public void testPiesAMetros() {
        Conversor resultado = servicio.piesAMetros(1);
        assertEquals(0.3048, resultado.getValorDestino(), 0.001);
    }

    @Test
    public void testMillasAKilometros() {
        Conversor resultado = servicio.millasAKilometros(1);
        assertEquals(1.60934, resultado.getValorDestino(), 0.001);
    }

    // ============ MASA ============

    @Test
    public void testKilogramosAGramos() {
        Conversor resultado = servicio.kilogramosAGramos(1);
        assertEquals(1000.0, resultado.getValorDestino(), 0.01);
    }

    @Test
    public void testGramosAMiligramos() {
        Conversor resultado = servicio.gramosAMiligramos(1);
        assertEquals(1000.0, resultado.getValorDestino(), 0.01);
    }

    @Test
    public void testLibrasAKilogramos() {
        Conversor resultado = servicio.librasAKilogramos(1);
        assertEquals(0.453592, resultado.getValorDestino(), 0.0001);
    }

    @Test
    public void testOnzasAGramos() {
        Conversor resultado = servicio.onzasAGramos(1);
        assertEquals(28.3495, resultado.getValorDestino(), 0.001);
    }

    @Test
    public void testToneladasAKilogramos() {
        Conversor resultado = servicio.toneladasAKilogramos(1);
        assertEquals(1000.0, resultado.getValorDestino(), 0.01);
    }
}
