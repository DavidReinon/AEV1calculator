import { Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function App() {
    const [resultado, setResultado] = useState(0);
    const [operacion, setOperacion] = useState("");
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const onHandlePress = (tecla) => {
        if (isNaN(tecla)) {
            switch (tecla) {
                case "suma":
                    suma();
                    break;
                default:
                    break;
            }
            return;
        }
        if (num1 != "") {
            setNum2(tecla);
            setResultado(tecla);
            return;
        }
        setNum1(tecla);
        setResultado(tecla);
    };
    const suma = () => {
        return setResultado(num1 + num2);
    };
    const resta = (num1, num2) => {
        return num1 + num2;
    };
    const multiplicacion = (num1, num2) => {
        return num1 + num2;
    };
    const division = (num1, num2) => {
        return num1 + num2;
    };
    const inversa = (num1, num2) => {
        return num1 + num2;
    };
    const factorial = (num1, num2) => {
        return num1 + num2;
    };
    const raizCuadrada = (num1, num2) => {
        return num1 + num2;
    };
    const logaritmoNeperiano = (num1, num2) => {
        return num1 + num2;
    };
    const lagoritmoBase10 = (num1, num2) => {
        return num1 + num2;
    };
    const pi = (num1, num2) => {
        return num1 + num2;
    };
    const rad = (num1, num2) => {
        return num1 + num2;
    };
    const deg = (num1, num2) => {
        return num1 + num2;
    };
    const sen = (num1, num2) => {
        return num1 + num2;
    };
    const cos = (num1, num2) => {
        return num1 + num2;
    };
    const tan = (num1, num2) => {
        return num1 + num2;
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
                    <Text style={{ fontSize: 50, textAlign: "right", flex: 1 }}>
                        {resultado}
                    </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("sen")}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "gray",
                            }}
                        >
                            <Text>sen</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("cos")}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "gray",
                            }}
                        >
                            <Text>cos</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("tan")}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "gray",
                            }}
                        >
                            <Text>tan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("deg")}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "gray",
                            }}
                        >
                            <Text>deg</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("ln")}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "gray",
                            }}
                        >
                            <Text>ln</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("log")}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "gray",
                            }}
                        >
                            <Text>log</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("pi")}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "gray",
                            }}
                        >
                            <Text>&Pi;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("rad")}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "gray",
                            }}
                        >
                            <Text>rad</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("1/X")}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "gray",
                            }}
                        >
                            <Text>1/X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("!")}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "gray",
                            }}
                        >
                            <Text>!</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("√")}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "gray",
                            }}
                        >
                            <Text>√</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("/")}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "gray",
                            }}
                        >
                            <Text>/</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(7)}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "blue",
                            }}
                        >
                            <Text>7</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(8)}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "blue",
                            }}
                        >
                            <Text>8</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(9)}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "blue",
                            }}
                        >
                            <Text>9</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("x")}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "gray",
                            }}
                        >
                            <Text>x</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(4)}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "blue",
                            }}
                        >
                            <Text>4</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(5)}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "blue",
                            }}
                        >
                            <Text>5</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(6)}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "blue",
                            }}
                        >
                            <Text>6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("-")}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "gray",
                            }}
                        >
                            <Text>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(1)}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "blue",
                            }}
                        >
                            <Text>1</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(2)}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "blue",
                            }}
                        >
                            <Text>2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(3)}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "blue",
                            }}
                        >
                            <Text>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("+")}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "gray",
                            }}
                        >
                            <Text>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("C")}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "gray",
                            }}
                        >
                            <Text>C</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(0)}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "blue",
                            }}
                        >
                            <Text>0</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress(",")}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "gray",
                            }}
                        >
                            <Text>,</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 3 }}>
                        <TouchableOpacity
                            onPress={() => onHandlePress("=")}
                            style={{
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                                textAlignVertical: "center",
                                width: 80,
                                height: 80,
                                backgroundColor: "gray",
                            }}
                        >
                            <Text>=</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
