import { View, Text, StyleSheet } from 'react-native';
import Form from './Form';

export default function Main() {
    return (
        <View>
            <Text style={styles.titulo}>Digite duas notas</Text>
            <Form />
        </View>
    )
}

const styles = StyleSheet.create({
    titulo: {
        marginBottom: 10,
    }
})