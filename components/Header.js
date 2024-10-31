import { Text, View } from "react-native";
import styles from '../style/style';

function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                Mini-Yahtzee </Text>
        </View>
    )
}

export default Header;