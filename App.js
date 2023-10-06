import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function App() {
    const [resultado, setResultado] = useState(0);
    const [operacion, setOperacion] = useState("");
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");

    const onHandlePress = (tecla) => {
        if (isNaN(tecla)) {
            if (tecla === "=") {
                return setResultado(realizarOperacion());
            }
            if (comprobacionTeclasEspeciales(tecla)) {
                return setResultado(realizarOperacion(tecla));
            }
            if (tecla === "π") {
                setNum1(Math.PI);
                setResultado(Math.PI);
                return;
            }
            if (tecla === "C") {
                setNum1("");
                setNum2("");
                setOperacion("");
                setResultado(0);
                return;
            }
            if (tecla === ",") {
                if (operacion === "") {
                    if (num1.includes(".")) return;
                    setNum1(num1 + ".");
                    setResultado(num1 + ".");
                    return;
                }
                if (num2.includes(".")) return;
                setNum2(num2 + ".");
                setResultado(num2 + ".");
                return;
            }
            setOperacion(tecla);
            return;
        }
        if (operacion === "") {
            setNum1(num1 + tecla);
            setResultado(num1 + tecla);
            return;
        }
        setNum2(num2 + tecla);
        setResultado(num2 + tecla);
    };

    const realizarOperacion = (teclaEspecial) => {
        const operacionEncontrada = teclas.find(
            (unaOperacion) =>
                unaOperacion.valor === teclaEspecial ||
                unaOperacion.valor === operacion
        );
        if (operacionEncontrada) {
            let numeroFinal = operacionEncontrada.metodo();
            if (numeroFinal.toString().length > 11) {
                numeroFinal = parseFloat(numeroFinal.toPrecision(11));
            }
            return numeroFinal;
        }
        return 0;
    };
    const comprobacionTeclasEspeciales = (tecla) => {
        return (
            tecla === "sen" ||
            tecla === "cos" ||
            tecla === "tan" ||
            tecla === "deg" ||
            tecla === "In" ||
            tecla === "log" ||
            tecla === "rad" ||
            tecla === "1/X" ||
            tecla === "!" ||
            tecla === "√"
        );
    };

    const teclas = [
        {
            metodo: () => Math.sin(num1),
            valor: "sen",
            color: "gray",
        },
        {
            metodo: () => Math.cos(num1),
            valor: "cos",
            color: "gray",
        },
        {
            metodo: () => Math.tan(num1),
            valor: "tan",
            color: "gray",
        },
        {
            metodo: () => (num1 * 180) / Math.PI,
            valor: "deg",
            color: "gray",
        },
        {
            metodo: () => Math.log(num1),
            valor: "In",
            color: "gray",
        },
        {
            metodo: () => Math.log10(num1),
            valor: "log",
            color: "gray",
        },
        {
            valor: "π",
            color: "gray",
        },
        {
            metodo: () => (num1 * Math.PI) / 180,
            valor: "rad",
            color: "gray",
        },
        {
            metodo: () => 1 / num1,
            valor: "1/X",
            color: "gray",
        },
        {
            metodo: () => {
                let resultado = 1;
                for (let i = 2; i <= num1; i++) {
                    resultado *= i;
                }
                return resultado;
            },
            valor: "!",
            color: "gray",
        },
        {
            metodo: () => Math.sqrt(num1),
            valor: "√",
            color: "gray",
        },
        {
            metodo: () => num1 / num2,
            valor: "/",
            color: "gray",
        },
        { valor: 7, color: "blue" },
        { valor: 8, color: "blue" },
        { valor: 9, color: "blue" },
        {
            metodo: () => num1 * num2,
            valor: "x",
            color: "gray",
        },
        { valor: 4, color: "blue" },
        { valor: 5, color: "blue" },
        { valor: 6, color: "blue" },
        {
            metodo: () => num1 - num2,
            valor: "-",
            color: "gray",
        },
        { valor: 1, color: "blue" },
        { valor: 2, color: "blue" },
        { valor: 3, color: "blue" },
        {
            metodo: () => {
                const num1Real = parseFloat(num1);
                const num2Real = parseFloat(num2);
                return num1Real + num2Real;
            },
            valor: "+",
            color: "gray",
        },
        { valor: "C", color: "gray" },
        { valor: 0, color: "blue" },
        { valor: ",", color: "gray" },
        { valor: "=", color: "gray" },
    ];

    return (
        <View
            style={{
                justifyContent: "center",
                alignSelf: "center",
                marginVertical: 80,
                marginHorizontal: 30,
            }}
        >
            <Text
                style={{
                    fontSize: 45,
                    fontWeight: "bold",
                }}
            >
                Calculadora
            </Text>

            <View style={{ marginTop: 5 }}>
                <View
                    style={{
                        flexDirection: "row",
                        marginBottom: 10,
                        height: 70,
                        width: 340,
                        borderRadius: 4,
                        borderWidth: 1,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 50,
                            textAlign: "right",
                            flex: 1,
                        }}
                    >
                        {resultado}
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 5,
                        flexDirection: "row",
                        flexWrap: "wrap",
                    }}
                >
                    {teclas.map((element, index) => {
                        return (
                            <View key={index.toString()} style={{ padding: 3 }}>
                                <TouchableOpacity
                                    onPress={() => onHandlePress(element.valor)}
                                    style={[
                                        styles.container,
                                        { backgroundColor: element.color },
                                    ]}
                                >
                                    <Text>{element.valor}</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        textAlignVertical: "center",
        width: 80,
        height: 80,
    },
});
