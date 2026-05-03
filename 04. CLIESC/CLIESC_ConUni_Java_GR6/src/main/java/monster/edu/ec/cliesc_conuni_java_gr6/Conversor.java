package monster.edu.ec.cliesc_conuni_java_gr6;

/**
 * Modelo que representa el resultado de una conversión.
 * Se utiliza para parsear la respuesta JSON del servidor REST.
 */
public class Conversor {
    private double valorOrigen;
    private String unidadOrigen;
    private double valorDestino;
    private String unidadDestino;

    // Constructores
    public Conversor() {
    }

    public Conversor(double valorOrigen, String unidadOrigen, double valorDestino, String unidadDestino) {
        this.valorOrigen = valorOrigen;
        this.unidadOrigen = unidadOrigen;
        this.valorDestino = valorDestino;
        this.unidadDestino = unidadDestino;
    }

    // Getters
    public double getValorOrigen() {
        return valorOrigen;
    }

    public String getUnidadOrigen() {
        return unidadOrigen;
    }

    public double getValorDestino() {
        return valorDestino;
    }

    public String getUnidadDestino() {
        return unidadDestino;
    }

    // Setters
    public void setValorOrigen(double valorOrigen) {
        this.valorOrigen = valorOrigen;
    }

    public void setUnidadOrigen(String unidadOrigen) {
        this.unidadOrigen = unidadOrigen;
    }

    public void setValorDestino(double valorDestino) {
        this.valorDestino = valorDestino;
    }

    public void setUnidadDestino(String unidadDestino) {
        this.unidadDestino = unidadDestino;
    }

    @Override
    public String toString() {
        return "Conversor{" +
                "valorOrigen=" + valorOrigen +
                ", unidadOrigen='" + unidadOrigen + '\'' +
                ", valorDestino=" + valorDestino +
                ", unidadDestino='" + unidadDestino + '\'' +
                '}';
    }
}
