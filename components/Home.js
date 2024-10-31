import { useState } from 'react';
import { Text, View, Pressable, Keyboard } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Header from './Header';
import Footer from './Footer';
import {
    NBR_OF_DICES,
    NBR_OF_ROUNDS,
    MIN_SPOT,
    MAX_SPOT,
    BONUS_POINTS_LIMIT,
    BONUS_POINTS
} from '../constants/Game';
import style from '../style/style';

function Home({ navigation }) {

    const [playerName, setPlayerName] = useState('');
    const [hasPlayerName, setHasPlayerName] = useState(false);

    const handlePlayerName = (value) => {
        if (value.trim().length > 0) {
            setHasPlayerName(true);
            Keyboard.dismiss();
        }
    }

    return (
        <>
            <Header />
            <View>


                {!hasPlayerName ?
                    <>
                        <TextInput
                            label={'For scoreboard enter your name'}
                            style={style.input}
                            mode='flat'
                            onChangeText={setPlayerName}
                            autoFocus={true} />
                        <Pressable
                            onPress={() => handlePlayerName(playerName)}>
                            <Button mode='elevated' style={style.playbutton}>OK</Button>
                        </Pressable>
                    </>
                    :
                    <>
                        <View style={style.titleRow}>
                            <MaterialCommunityIcons
                                name="information"
                                size={35}
                                color="green"
                                style={style.icon} />

                            <Text style={style.rulestitle}>Rules of the game</Text>
                        </View>
                        <Text multiline='true' style={style.rules}>  THE GAME: Upper section of the classic Yahtzee dice game. You have {NBR_OF_DICES} dices and
                            for every dice, you have {NBR_OF_ROUNDS} throws. After each throw, you can keep dices in
                            order to get the same dice spot counts as many as possible. At the end of the turn,
                            you must select your points from {MIN_SPOT} to {MAX_SPOT}. The game ends when all points
                            have been selected. You are free to choose the order for selecting these points.</Text>
                        <Text style={style.goodLuck}>Good luck, {playerName}!</Text>
                        <Pressable onPress={() => navigation.navigate('Gameboard', { player: playerName })}>
                            <Button mode='elevated' style={style.playbutton}>PLAY</Button>
                        </Pressable>
                    </>
                }
            </View>
            <Footer />
        </>
    )
}

export default Home;