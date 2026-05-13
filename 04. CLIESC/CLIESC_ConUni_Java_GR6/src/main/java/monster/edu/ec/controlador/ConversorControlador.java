package monster.edu.ec.controlador;

import com.google.gson.Gson;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import monster.edu.ec.modelo.Conversor;

public class ConversorControlador {

    private static final String BASE_URL = "http://10.9.7.189:8080/WS_CONUNI_JAVA_GR6/api/conversor";
    private static final Gson gson = new Gson();

    private static Conversor llamarServicio(String endpoint, double valor) throws Exception {
        String urlString = String.format("%s/%s?valor=%f", BASE_URL, endpoint, valor);
        URL url = new URL(urlString);

        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Accept", "application/json");
        conn.setConnectTimeout(5000);
        conn.setReadTimeout(5000);

        int responseCode = conn.getResponseCode();
        if (responseCode != HttpURLConnection.HTTP_OK) {
            throw new Exception("Error HTTP: " + responseCode);
        }

        BufferedReader reader = new BufferedReader(
                new InputStreamReader(conn.getInputStream(), StandardCharsets.UTF_8));
        StringBuilder response = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            response.append(line);
        }
        reader.close();
        conn.disconnect();

        return gson.fromJson(response.toString(), Conversor.class);
    }

    // ============== TEMPERATURA ==============
    public static Conversor convertirCtoF(double valor) throws Exception { return llamarServicio("ctof", valor); }
    public static Conversor convertirFtoC(double valor) throws Exception { return llamarServicio("ftoc", valor); }
    public static Conversor convertirCtoK(double valor) throws Exception { return llamarServicio("ctok", valor); }
    public static Conversor convertirKtoC(double valor) throws Exception { return llamarServicio("ktoc", valor); }
    public static Conversor convertirFtoK(double valor) throws Exception { return llamarServicio("ftok", valor); }
    public static Conversor convertirKtoF(double valor) throws Exception { return llamarServicio("ktof", valor); }

    // ============== LONGITUD ==============
    public static Conversor convertirKmAMetros(double valor) throws Exception { return llamarServicio("kmametros", valor); }
    public static Conversor convertirMetrosACm(double valor) throws Exception { return llamarServicio("metrosacm", valor); }
    public static Conversor convertirPulgadasACm(double valor) throws Exception { return llamarServicio("pulgadasacm", valor); }
    public static Conversor convertirPiesAMetros(double valor) throws Exception { return llamarServicio("piesametros", valor); }
    public static Conversor convertirMillasAKm(double valor) throws Exception { return llamarServicio("millasakh", valor); }

    // ============== MASA ==============
    public static Conversor convertirKgAGramos(double valor) throws Exception { return llamarServicio("kgagramos", valor); }
    public static Conversor convertirGramosAMg(double valor) throws Exception { return llamarServicio("gramosamg", valor); }
    public static Conversor convertirLibrasAKg(double valor) throws Exception { return llamarServicio("librasakh", valor); }
    public static Conversor convertirOnzasAGramos(double valor) throws Exception { return llamarServicio("onzasagramos", valor); }
    public static Conversor convertirToneladasAKg(double valor) throws Exception { return llamarServicio("toneladasakh", valor); }
}
