package ec.edu.monster.controlador;

import ec.edu.monster.modelo.Conversor;

public class ConversorServicio {

    // ============ TEMPERATURA ============

    public Conversor celsiusAFahrenheit(double celsius) {
        double fahrenheit = (celsius * 9.0 / 5.0) + 32;
        return new Conversor(celsius, "Celsius", fahrenheit, "Fahrenheit");
    }

    public Conversor fahrenheitACelsius(double fahrenheit) {
        double celsius = (fahrenheit - 32) * 5.0 / 9.0;
        return new Conversor(fahrenheit, "Fahrenheit", celsius, "Celsius");
    }

    public Conversor celsiusAKelvin(double celsius) {
        return new Conversor(celsius, "C", celsius + 273.15, "K");
    }

    public Conversor kelvinACelsius(double kelvin) {
        return new Conversor(kelvin, "K", kelvin - 273.15, "C");
    }

    public Conversor fahrenheitAKelvin(double f) {
        double k = (f - 32) / 1.8 + 273.15;
        return new Conversor(f, "F", k, "K");
    }

    public Conversor kelvinAFahrenheit(double k) {
        double f = (k - 273.15) * 1.8 + 32;
        return new Conversor(k, "K", f, "F");
    }

    // ============ LONGITUD ============

    public Conversor kilometrosAMetros(double km) {
        return new Conversor(km, "km", km * 1000, "m");
    }

    public Conversor metrosACentimetros(double metros) {
        return new Conversor(metros, "m", metros * 100, "cm");
    }

    public Conversor pulgadasACentimetros(double pulgadas) {
        return new Conversor(pulgadas, "in", pulgadas * 2.54, "cm");
    }

    public Conversor piesAMetros(double pies) {
        return new Conversor(pies, "ft", pies * 0.3048, "m");
    }

    public Conversor millasAKilometros(double millas) {
        return new Conversor(millas, "mi", millas * 1.60934, "km");
    }

    // ============ MASA ============

    public Conversor kilogramosAGramos(double kg) {
        return new Conversor(kg, "kg", kg * 1000, "g");
    }

    public Conversor gramosAMiligramos(double gramos) {
        return new Conversor(gramos, "g", gramos * 1000, "mg");
    }

    public Conversor librasAKilogramos(double libras) {
        return new Conversor(libras, "lb", libras * 0.453592, "kg");
    }

    public Conversor onzasAGramos(double oz) {
        return new Conversor(oz, "oz", oz * 28.3495, "g");
    }

    public Conversor toneladasAKilogramos(double t) {
        return new Conversor(t, "t", t * 1000, "kg");
    }
}
