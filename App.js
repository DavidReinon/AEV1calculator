import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function App() {
    const [resultado, setResultado] = useState(0);
    const [operacion, setOperacion] = useState("");
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();

    const onHandlePress = (tecla) => {
        if (isNaN(tecla)) {
            if (tecla === "=") {
                return setResultado(realizarOperacion());
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
                    setNum1(num1 + tecla);
                    setResultado(num1 + tecla);
                    return;
                }
                setNum2(num2 + tecla);
                setResultado(num2 + tecla);
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

    const realizarOperacion = () => {
        if (operaciones[operacion]) {
            setNum1(parseFloat(num1));
            if (num2 !== "") {
                setNum2(parseFloat(num2));
                return operaciones[operacion]();
            } else {
                return operaciones[operacion]();
            }
        }
        return 0;
    };

    const operaciones = {
        "+": () => {
            const num1Real = parseFloat(num1);
            const num2Real = parseFloat(num2);
            return num1Real + num2Real;
        },
        "-": () => num1 - num2,
        x: () => num1 * num2,
        "/": () => num1 / num2,
        "√": () => Math.sqrt(num1),
        sen: () => Math.sin(num1),
        cos: () => Math.cos(num1),
        tan: () => Math.tan(num1),
        In: () => Math.log(num1),
        log: () => Math.log10(num1),
        pi: () => Math.PI,
        rad: () => (num1 * Math.PI) / 180,
        "1/X": () => 1 / num1,
        "!": () => {
            let resultado = 1;
            for (let i = 2; i <= num1; i++) {
                resultado *= i;
            }
            return resultado;
        },
    };

    return (
        <View
            style={{
                justifyContent: "center",
                alignSelf: "center",
                marginVertical: 80,
            }}
        >
            <Text style={{ fontSize: 45, fontWeight: "bold" }}>
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
                            maxLength: 10,
                        }}
                    >
                        {resultado}
                    </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("sen")}
                            style={[
                                styles.container,
                                { backgroundColor: "gray" },
                            ]}
                        >
                            <Text>sen</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("cos")}
                            style={[
                                styles.container,
                                { backgroundColor: "gray" },
                            ]}
                        >
                            <Text>cos</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("tan")}
                            style={[
                                styles.container,
                                { backgroundColor: "gray" },
                            ]}
                        >
                            <Text>tan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("deg")}
                            style={[
                                styles.container,
                                { backgroundColor: "gray" },
                            ]}
                        >
                            <Text>deg</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("ln")}
                            style={[
                                styles.container,
                                { backgroundColor: "gray" },
                            ]}
                        >
                            <Text>ln</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("log")}
                            style={[
                                styles.container,
                                { backgroundColor: "gray" },
                            ]}
                        >
                            <Text>log</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("pi")}
                            style={[
                                styles.container,
                                { backgroundColor: "gray" },
                            ]}
                        >
                            <Text>&Pi;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("rad")}
                            style={[
                                styles.container,
                                { backgroundColor: "gray" },
                            ]}
                        >
                            <Text>rad</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("1/X")}
                            style={[
                                styles.container,
                                { backgroundColor: "gray" },
                            ]}
                        >
                            <Text>1/X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("!")}
                            style={[
                                styles.container,
                                { backgroundColor: "gray" },
                            ]}
                        >
                            <Text>!</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("√")}
                            style={[
                                styles.container,
                                { backgroundColor: "gray" },
                            ]}
                        >
                            <Text>√</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("/")}
                            style={[
                                styles.container,
                                { backgroundColor: "gray" },
                            ]}
                        >
                            <Text>/</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(7)}
                            style={[
                                styles.container,
                                { backgroundColor: "blue" },
                            ]}
                        >
                            <Text>7</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(8)}
                            style={[
                                styles.container,
                                { backgroundColor: "blue" },
                            ]}
                        >
                            <Text>8</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(9)}
                            style={[
                                styles.container,
                                { backgroundColor: "blue" },
                            ]}
                        >
                            <Text>9</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("x")}
                            style={[
                                styles.container,
                                { backgroundColor: "gray" },
                            ]}
                        >
                            <Text>x</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(4)}
                            style={[
                                styles.container,
                                { backgroundColor: "blue" },
                            ]}
                        >
                            <Text>4</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(5)}
                            style={[
                                styles.container,
                                { backgroundColor: "blue" },
                            ]}
                        >
                            <Text>5</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(6)}
                            style={[
                                styles.container,
                                { backgroundColor: "blue" },
                            ]}
                        >
                            <Text>6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("-")}
                            style={[
                                styles.container,
                                { backgroundColor: "gray" },
                            ]}
                        >
                            <Text>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(1)}
                            style={[
                                styles.container,
                                { backgroundColor: "blue" },
                            ]}
                        >
                            <Text>1</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(2)}
                            style={[
                                styles.container,
                                { backgroundColor: "blue" },
                            ]}
                        >
                            <Text>2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(3)}
                            style={[
                                styles.container,
                                { backgroundColor: "blue" },
                            ]}
                        >
                            <Text>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("+")}
                            style={[
                                styles.container,
                                { backgroundColor: "gray" },
                            ]}
                        >
                            <Text>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("C")}
                            style={[
                                styles.container,
                                { backgroundColor: "gray" },
                            ]}
                        >
                            <Text>C</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(0)}
                            style={[
                                styles.container,
                                { backgroundColor: "blue" },
                            ]}
                        >
                            <Text>0</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(",")}
                            style={[
                                styles.container,
                                { backgroundColor: "gray" },
                            ]}
                        >
                            <Text>,</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("=")}
                            style={[
                                styles.container,
                                { backgroundColor: "gray" },
                            ]}
                        >
                            <Text>=</Text>
                        </TouchableOpacity>
                    </View>
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
