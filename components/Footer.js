import { Text, View } from "react-native";
import styles from '../style/style';

function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.author}>
                Author: Reeta Valtamäki </Text>
        </View>
    )
}

export default Footer;