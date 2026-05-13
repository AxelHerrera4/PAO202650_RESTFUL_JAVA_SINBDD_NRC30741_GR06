package monster.edu.ec.modelo;

public class Conversor {
    private double valorOrigen;
    private String unidadOrigen;
    private double valorDestino;
    private String unidadDestino;

    public Conversor() {}

    public Conversor(double valorOrigen, String unidadOrigen, double valorDestino, String unidadDestino) {
        this.valorOrigen = valorOrigen;
        this.unidadOrigen = unidadOrigen;
        this.valorDestino = valorDestino;
        this.unidadDestino = unidadDestino;
    }

    public double getValorOrigen() { return valorOrigen; }
    public void setValorOrigen(double valorOrigen) { this.valorOrigen = valorOrigen; }

    public String getUnidadOrigen() { return unidadOrigen; }
    public void setUnidadOrigen(String unidadOrigen) { this.unidadOrigen = unidadOrigen; }

    public double getValorDestino() { return valorDestino; }
    public void setValorDestino(double valorDestino) { this.valorDestino = valorDestino; }

    public String getUnidadDestino() { return unidadDestino; }
    public void setUnidadDestino(String unidadDestino) { this.unidadDestino = unidadDestino; }

    @Override
    public String toString() {
        return valorOrigen + " " + unidadOrigen + " = " + valorDestino + " " + unidadDestino;
    }
}
