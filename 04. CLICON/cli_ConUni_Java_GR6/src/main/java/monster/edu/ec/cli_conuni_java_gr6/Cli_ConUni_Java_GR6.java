package monster.edu.ec.cli_conuni_java_gr6;

import java.util.Scanner;

public class Cli_ConUni_Java_GR6 {

    private static final String USUARIO = "monster";
    private static final String CONTRASENA = "monster9";

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (true) {
            mostrarEncabezado();
            System.out.print("Usuario: ");
            String user = sc.nextLine().trim();
            System.out.print("Contrasena: ");
            String pass = sc.nextLine().trim();

            if (USUARIO.equals(user) && CONTRASENA.equals(pass)) {
                System.out.println("\nAcceso concedido.\n");
                mostrarMenuPrincipal(sc);
                break;
            }

            System.out.println("\nCredenciales incorrectas. Intente de nuevo.\n");
        }
    }

    private static void mostrarMenuPrincipal(Scanner sc) {
        int opcion = 0;
        do {
            mostrarMenuBanner();
            System.out.println("1. Conversiones de temperatura");
            System.out.println("2. Conversiones de longitud");
            System.out.println("3. Conversiones de masa");
            System.out.println("4. Salir");
            opcion = leerEntero(sc, "Seleccione una opcion: ", 1, 4);

            switch (opcion) {
                case 1 -> mostrarMenuTemperatura(sc);
                case 2 -> mostrarMenuLongitud(sc);
                case 3 -> mostrarMenuMasa(sc);
                case 4 -> System.out.println("\nGracias por usar el sistema. Adios");
                default -> {
                }
            }

        } while (opcion != 4);
    }

    private static void mostrarMenuTemperatura(Scanner sc) {
        int opcion;
        do {
            System.out.println("\n--- TEMPERATURA ---");
            System.out.println("1. Fahrenheit a Celsius");
            System.out.println("2. Celsius a Fahrenheit");
            System.out.println("3. Celsius a Kelvin");
            System.out.println("4. Kelvin a Celsius");
            System.out.println("5. Fahrenheit a Kelvin");
            System.out.println("6. Kelvin a Fahrenheit");
            System.out.println("0. Volver");
            opcion = leerEntero(sc, "Seleccione una opcion: ", 0, 6);

            if (opcion == 0) {
                return;
            }

            double valor = leerDouble(sc, "Ingrese el valor a transformar: ");
            Conversor res;

            try {
                switch (opcion) {
                    case 1 -> res = ConversorClient.convertirFtoC(valor);
                    case 2 -> res = ConversorClient.convertirCtoF(valor);
                    case 3 -> res = ConversorClient.convertirCtoK(valor);
                    case 4 -> res = ConversorClient.convertirKtoC(valor);
                    case 5 -> res = ConversorClient.convertirFtoK(valor);
                    case 6 -> res = ConversorClient.convertirKtoF(valor);
                    default -> {
                        continue;
                    }
                }
                mostrarResultado(res);
            } catch (Exception e) {
                System.out.println("Error al consumir el servicio REST: " + e.getMessage());
            }
        } while (true);
    }

    private static void mostrarMenuLongitud(Scanner sc) {
        int opcion;
        do {
            System.out.println("\n--- LONGITUD ---");
            System.out.println("1. Kilometros a Metros");
            System.out.println("2. Metros a Centimetros");
            System.out.println("3. Pulgadas a Centimetros");
            System.out.println("4. Pies a Metros");
            System.out.println("5. Millas a Kilometros");
            System.out.println("0. Volver");
            opcion = leerEntero(sc, "Seleccione una opcion: ", 0, 5);

            if (opcion == 0) {
                return;
            }

            double valor = leerDouble(sc, "Ingrese el valor a transformar: ");
            Conversor res;

            try {
                switch (opcion) {
                    case 1 -> res = ConversorClient.convertirKmAMetros(valor);
                    case 2 -> res = ConversorClient.convertirMetrosACm(valor);
                    case 3 -> res = ConversorClient.convertirPulgadasACm(valor);
                    case 4 -> res = ConversorClient.convertirPiesAMetros(valor);
                    case 5 -> res = ConversorClient.convertirMillasAKm(valor);
                    default -> {
                        continue;
                    }
                }
                mostrarResultado(res);
            } catch (Exception e) {
                System.out.println("Error al consumir el servicio REST: " + e.getMessage());
            }
        } while (true);
    }

    private static void mostrarMenuMasa(Scanner sc) {
        int opcion;
        do {
            System.out.println("\n--- MASA ---");
            System.out.println("1. Kilogramos a Gramos");
            System.out.println("2. Gramos a Miligramos");
            System.out.println("3. Libras a Kilogramos");
            System.out.println("4. Onzas a Gramos");
            System.out.println("5. Toneladas a Kilogramos");
            System.out.println("0. Volver");
            opcion = leerEntero(sc, "Seleccione una opcion: ", 0, 5);

            if (opcion == 0) {
                return;
            }

            double valor = leerDouble(sc, "Ingrese el valor a transformar: ");
            Conversor res;

            try {
                switch (opcion) {
                    case 1 -> res = ConversorClient.convertirKgAGramos(valor);
                    case 2 -> res = ConversorClient.convertirGramosAMg(valor);
                    case 3 -> res = ConversorClient.convertirLibrasAKg(valor);
                    case 4 -> res = ConversorClient.convertirOnzasAGramos(valor);
                    case 5 -> res = ConversorClient.convertirToneladasAKg(valor);
                    default -> {
                        continue;
                    }
                }
                mostrarResultado(res);
            } catch (Exception e) {
                System.out.println("Error al consumir el servicio REST: " + e.getMessage());
            }
        } while (true);
    }

    private static void mostrarEncabezado() {
        System.out.println("====================================");
        System.out.println("   SISTEMA MONSTER - CONVERSOR REST ");
        System.out.println("====================================");
    }

    private static void mostrarMenuBanner() {
        System.out.println("\n====================================");
        System.out.println("        MENU PRINCIPAL DEL SISTEMA  ");
        System.out.println("====================================");
    }

    private static int leerEntero(Scanner sc, String mensaje, int minimo, int maximo) {
        while (true) {
            System.out.print(mensaje);
            String entrada = sc.nextLine().trim();
            try {
                int valor = Integer.parseInt(entrada);
                if (valor >= minimo && valor <= maximo) {
                    return valor;
                }
            } catch (NumberFormatException ex) {
                // Se maneja abajo con el mensaje generico
            }
            System.out.println("Entrada invalida. Intente de nuevo.");
        }
    }

    private static double leerDouble(Scanner sc, String mensaje) {
        while (true) {
            System.out.print(mensaje);
            String entrada = sc.nextLine().trim();
            try {
                return Double.parseDouble(entrada);
            } catch (NumberFormatException ex) {
                System.out.println("Debe ingresar un numero valido.");
            }
        }
    }

    private static void mostrarResultado(Conversor res) {
        System.out.println("\n>> Resultado");
        System.out.println("------------------------------------");
        System.out.println(res.getValorOrigen() + " " + res.getUnidadOrigen()
                + " equivale a " + res.getValorDestino() + " " + res.getUnidadDestino());
        System.out.println("------------------------------------\n");
    }
}