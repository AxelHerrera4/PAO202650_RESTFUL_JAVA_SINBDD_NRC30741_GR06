package ec.edu.monster.vista;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import ec.edu.monster.modelo.Conversor;
import ec.edu.monster.controlador.ConversorServicio;

@Path("/conversor")
@Produces(MediaType.APPLICATION_JSON)
public class ConversorRest {

    private final ConversorServicio servicio = new ConversorServicio();

    // ============ TEMPERATURA ============

    @GET @Path("/ctof")
    public Conversor ctof(@QueryParam("valor") double valor) {
        return servicio.celsiusAFahrenheit(valor);
    }

    @GET @Path("/ftoc")
    public Conversor ftoc(@QueryParam("valor") double valor) {
        return servicio.fahrenheitACelsius(valor);
    }

    @GET @Path("/ctok")
    public Conversor ctok(@QueryParam("valor") double valor) {
        return servicio.celsiusAKelvin(valor);
    }

    @GET @Path("/ktoc")
    public Conversor ktoc(@QueryParam("valor") double valor) {
        return servicio.kelvinACelsius(valor);
    }

    @GET @Path("/ftok")
    public Conversor ftok(@QueryParam("valor") double valor) {
        return servicio.fahrenheitAKelvin(valor);
    }

    @GET @Path("/ktof")
    public Conversor ktof(@QueryParam("valor") double valor) {
        return servicio.kelvinAFahrenheit(valor);
    }

    // ============ LONGITUD ============

    @GET @Path("/kmametros")
    public Conversor kmametros(@QueryParam("valor") double valor) {
        return servicio.kilometrosAMetros(valor);
    }

    @GET @Path("/metrosacm")
    public Conversor metrosacm(@QueryParam("valor") double valor) {
        return servicio.metrosACentimetros(valor);
    }

    @GET @Path("/pulgadasacm")
    public Conversor pulgadasacm(@QueryParam("valor") double valor) {
        return servicio.pulgadasACentimetros(valor);
    }

    @GET @Path("/piesametros")
    public Conversor piesametros(@QueryParam("valor") double valor) {
        return servicio.piesAMetros(valor);
    }

    @GET @Path("/millasakh")
    public Conversor millasakh(@QueryParam("valor") double valor) {
        return servicio.millasAKilometros(valor);
    }

    // ============ MASA ============

    @GET @Path("/kgagramos")
    public Conversor kgagramos(@QueryParam("valor") double valor) {
        return servicio.kilogramosAGramos(valor);
    }

    @GET @Path("/gramosamg")
    public Conversor gramosamg(@QueryParam("valor") double valor) {
        return servicio.gramosAMiligramos(valor);
    }

    @GET @Path("/librasakh")
    public Conversor librasakh(@QueryParam("valor") double valor) {
        return servicio.librasAKilogramos(valor);
    }

    @GET @Path("/onzasagramos")
    public Conversor onzasagramos(@QueryParam("valor") double valor) {
        return servicio.onzasAGramos(valor);
    }

    @GET @Path("/toneladasakh")
    public Conversor toneladasakh(@QueryParam("valor") double valor) {
        return servicio.toneladasAKilogramos(valor);
    }
}
