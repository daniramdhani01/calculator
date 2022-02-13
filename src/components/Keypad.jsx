import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function Keypad() {
    const [num, setNum] = useState('')
    const [mirrorNum, setMirrorNum] = useState("")

    const [showMirror, setShowMirror] = useState(false)

    let result = ''
    const handleArith = (arithmetic) => {
        setShowMirror(true)

        if (num == '') {
            if (parseInt(mirrorNum)) {
                return setMirrorNum(num.substring(num.length - 1, num.length) + arithmetic), setNum('')
            } else {
                return setNum('')
            }
        }

        if (mirrorNum == 0) {
            return setMirrorNum(num + arithmetic), setNum('')
        }
        const art = mirrorNum.substring(mirrorNum.length - 1, mirrorNum.length)
        const x = parseInt(mirrorNum)
        const y = parseInt(num)
        switch (art) {
            case '+':
                result = x + y
                break;
            case '-':
                result = x - y
                break;
            case '*':
                result = x * y
                break;
            case '/':
                result = x / y
                break;
            case '%':
                result = x % y
                break;
        }

        setMirrorNum(result + arithmetic);
        setNum('')
    }

    const handleEqual = () => {
        setShowMirror(false)

        if (num == '' && mirrorNum != '') {
            return setNum(`${parseInt(mirrorNum)}`), setMirrorNum("")
        }

        const art = mirrorNum.substring(mirrorNum.length - 1, mirrorNum.length)
        const x = parseInt(mirrorNum)
        const y = parseInt(num)
        switch (art) {
            case '+':
                result = x + y
                break;
            case '-':
                result = x - y
                break;
            case '*':
                result = x * y
                break;
            case '/':
                result = x / y
                break;
            case '%':
                result = x % y
                break;
        }
        setMirrorNum("")
        setNum(`${result}`)
    }

    return (
        <View>
            {/* display here */}
            <Text style={style.header}>Display</Text>
            {showMirror ?
                <>
                    <TextInput style={style.mirrorDisplay} editable={false} value={mirrorNum} />
                    <TextInput style={style.buttomMirrorDisplay} editable={false} value={num} />
                </>
                :
                <TextInput style={style.inputDisplay} editable={false} value={num} />
            }

            {/* keypad here
                    keyboardType="numeric" */}
            <View style={style.container}>
                <TouchableOpacity onPress={() => setNum(num + '1')}>
                    <Text style={[style.btn, style.btnNum]}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setNum(num + '2')}>
                    <Text style={[style.btn, style.btnNum]}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleArith('-')}>
                    <Text style={[style.btn, style.btnArithmetic]}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleArith('+')}>
                    <Text style={[style.btn, style.btnArithmetic]}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setNum(num + '3')}>
                    <Text style={[style.btn, style.btnNum]}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setNum(num + '4')}>
                    <Text style={[style.btn, style.btnNum]}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleArith('/')}>
                    <Text style={[style.btn, style.btnArithmetic]}>/</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleArith('*')}>
                    <Text style={[style.btn, style.btnArithmetic]}>*</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setNum(num + '5')}>
                    <Text style={[style.btn, style.btnNum]}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setNum(num + '6')}>
                    <Text style={[style.btn, style.btnNum]}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleArith('%')}>
                    <Text style={[style.btn, style.btnArithmetic]}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleEqual}>
                    <Text style={[style.btn, style.btnArithmetic]} >=</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setNum(num + '7')}>
                    <Text style={[style.btn, style.btnNum]}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setNum(num + '8')}>
                    <Text style={[style.btn, style.btnNum]}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setNum(num + '9')}>
                    <Text style={[style.btn, style.btnNum]}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setNum(num + '0')}>
                    <Text style={[style.btn, style.btnNum]}>0</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const style = StyleSheet.create({
    header: {
        marginBottom: 15,
        fontSize: 24,
        color: '#FFFFFF',
    },
    inputDisplay: {
        height: 100,
        backgroundColor: "#ECECEC",
        borderRadius: 10,
        marginBottom: 40,
        fontSize: 45,
        color: 'black',
        paddingLeft: 10,
        paddingRight: 10,
    },
    buttomMirrorDisplay: {
        height: 70,
        backgroundColor: "#ECECEC",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginBottom: 40,
        fontSize: 45,
        color: 'black',
        paddingLeft: 10,
        paddingRight: 10,
    },
    mirrorDisplay: {
        height: 30,
        backgroundColor: "#ECECEC",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        color: 'black',
        paddingLeft: 10,
        paddingRight: 10,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    btn: {
        width: 75,
        padding: 2,
        borderRadius: 10,
        marginBottom: 10,
        textAlign: 'center',
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 50,
    },
    btnNum: {
        backgroundColor: '#FF5757',
    },
    btnArithmetic: {
        backgroundColor: '#930707',
    },
})