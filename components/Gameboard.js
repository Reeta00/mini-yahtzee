
import { useState, useEffect } from "react";
import { View, Pressable, Text, Alert } from "react-native";
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
import { Container, Row, Col } from "react-native-flex-grid";
import styles from '../style/style';
import { Button } from "react-native-paper";

let board = [];

function Gameboard({ navigation, route }) {

    const [nbrOfRoundsLeft, setNbrOfRoundsLeft] = useState(NBR_OF_ROUNDS);
    const [status, setStatus] = useState('Throw dices');
    const [gameEndStatus, setGameEndStatus] = useState(false);
    const [selectedDices, setSelectedDices] = useState(new Array(NBR_OF_DICES).fill(false));
    const [diceSpots, setDiceSpots] = useState(new Array(NBR_OF_DICES).fill(0));
    const [selectedDicePoints, setSelectedDicePoints] = useState(new Array(MAX_SPOT).fill(false));
    const [dicePointsTotal, setDicePointsTotal] = useState(new Array(MAX_SPOT).fill(0));
    const [playerName, setPlayerName] = useState('');

    useEffect(() => {
        if (playerName === '' && route.params?.player) {
            setPlayerName(route.params.player)
        }
    }, [])

    const row = [];
    for (let dice = 0; dice < NBR_OF_DICES; dice++) {
        row.push(
            <Col key={"dice" + dice}>
                <Pressable
                    key={"dice" + dice}
                    onPress={() => selectDice(dice)}
                >

                    <MaterialCommunityIcons
                        name={board[dice]}
                        key={"dice" + dice}
                        size={50}
                        color={getDiceColor(dice)}
                    />

                </Pressable>
            </Col>
        )
    }

    const pointsToSelectRow = [];
    for (let diceButton = 0; diceButton < MAX_SPOT; diceButton++) {
        pointsToSelectRow.push(
            <Col key={"buttonRow" + diceButton}>
                <Pressable key={"buttonRow" + diceButton}
                    onPress={() => selectDicePoints(diceButton)}>
                    <MaterialCommunityIcons key={"buttonRow" + diceButton}
                        name={"numeric-" + (diceButton + 1) + "-circle"}
                        size={35}
                        color={getDicePointsColor(diceButton)}>

                    </MaterialCommunityIcons>
                </Pressable>
            </Col>
        );
    }

    const pointsRow = [];
    for (let spot = 0; spot < MAX_SPOT; spot++) {
        pointsRow.push(
            <Col key={"pointsRow" + spot}>
                <Text key={"pointsRow" + spot}>{getSpotTotal(spot)}</Text>
            </Col>
        );
    }

    const selectDice = (i) => {
        let dices = [...selectedDices];
        dices[i] = !selectedDices[i];
        setSelectedDices(dices);
    };

    function getDiceColor(i) {
        return selectedDices[i] ? 'green' : 'lightgreen';
    }

    function getDicePointsColor(i) {
        return selectedDicePoints[i] ? 'green' : 'lightgreen';
    }

    const selectDicePoints = (i) => {
        if (nbrOfRoundsLeft === 0) {
            let selected = [...selectedDices];
            let selectedPoints = [...selectedDicePoints];
            let points = [...dicePointsTotal];
            if (!selectedPoints[i]) {
                selectedPoints[i] = true;
                let nbrOfDices = diceSpots.reduce((total, x) => (x === (i + 1) ? total + 1 : total), 0);
                points[i] = nbrOfDices * (i + 1);
                setDicePointsTotal(points);
                setSelectedDicePoints(selectedPoints);
                setNbrOfRoundsLeft(NBR_OF_ROUNDS);
                if (selectedPoints.every(point => point)) {
                    endRound(points);
                }
                //return points[i];

            } else {
                setStatus('You already selected points for ' + (i + 1));
            }
        } else {
            setStatus('Throw ' + NBR_OF_ROUNDS + ' times before setting points.')
        }
    }

    const throwDices = () => {
        let spots = [...diceSpots];
        for (let i = 0; i < NBR_OF_DICES; i++) {
            if (!selectedDices[i]) {
                let randomNumber = Math.floor(Math.random() * MAX_SPOT + 1);
                spots[i] = randomNumber;
                board[i] = 'dice-' + randomNumber;
            }
        }
        setDiceSpots(spots);
        setNbrOfRoundsLeft(nbrOfRoundsLeft - 1);
    }

    function getSpotTotal(i) {
        return dicePointsTotal[i];
    }

    const endRound = (points) => {
        const totalScore = points.reduce((sum, current) => sum + current, 0);
        let finalScore = totalScore;


        if (totalScore >= BONUS_POINTS_LIMIT) {
            finalScore += BONUS_POINTS;
        }

        setStatus(`Round over! Your total score is ${finalScore}.`);
        Alert.alert("Game Over",
            `Your total score is ${finalScore}. Starting a new round!`,
            [
                { text: "OK", onPress: resetGame }
            ]
        );
    }

    const resetGame = () => {
        setSelectedDices(new Array(NBR_OF_DICES).fill(false));
        setDiceSpots(new Array(NBR_OF_DICES).fill(0));
        setSelectedDicePoints(new Array(MAX_SPOT).fill(false));
        setDicePointsTotal(new Array(MAX_SPOT).fill(0));
        setNbrOfRoundsLeft(NBR_OF_ROUNDS);
        setStatus("Throw dices");
    };

    return (
        <>
            <Header />
            <View style={styles.view}>
                <Container>
                    <Row>
                        {row}
                    </Row>
                </Container>
                <Text style={styles.text}>Throws left: {nbrOfRoundsLeft}</Text>
                <Text style={styles.statusText}>{status}</Text>
                <Pressable
                    onPress={() => throwDices()}>
                    <Button mode="elevated" style={{ margin: 20 }}>THROW DICES</Button>
                </Pressable>
                <Container>
                    <Row>
                        {pointsRow}
                    </Row>
                </Container>
                <Container>
                    <Row>
                        {pointsToSelectRow}
                    </Row>
                </Container>
                <Text style={styles.playerNameText}>Player name: {playerName}</Text>
            </View>
            <Footer />
        </>
    )
}

export default Gameboard;