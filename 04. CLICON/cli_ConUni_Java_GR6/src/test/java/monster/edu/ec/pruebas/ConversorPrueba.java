package monster.edu.ec.pruebas;

import monster.edu.ec.modelo.Conversor;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class ConversorPrueba {

    @Test
    void constructorParametrizadoAsignaValores() {
        Conversor c = new Conversor(100, "Celsius", 212, "Fahrenheit");
        assertEquals(100, c.getValorOrigen());
        assertEquals("Celsius", c.getUnidadOrigen());
        assertEquals(212, c.getValorDestino());
        assertEquals("Fahrenheit", c.getUnidadDestino());
    }

    @Test
    void constructorVacioPermiteSetters() {
        Conversor c = new Conversor();
        c.setValorOrigen(0);
        c.setUnidadOrigen("Kelvin");
        c.setValorDestino(-273.15);
        c.setUnidadDestino("Celsius");
        assertEquals(0, c.getValorOrigen());
        assertEquals("Kelvin", c.getUnidadOrigen());
        assertEquals(-273.15, c.getValorDestino(), 0.001);
        assertEquals("Celsius", c.getUnidadDestino());
    }

    @Test
    void toStringContieneUnidades() {
        Conversor c = new Conversor(1, "km", 1000, "m");
        String s = c.toString();
        assertTrue(s.contains("km"));
        assertTrue(s.contains("m"));
    }
}
