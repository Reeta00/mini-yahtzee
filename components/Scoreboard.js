
import Header from './Header';
import Footer from './Footer';

function Scoreboard({ navigation }) {

    /*useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getScoreboardData();
        });
        return unsubscribe;
    }, [navigation])*/

    return (
        <>
            <Header />
            <Footer />
        </>
    )
}

export default Scoreboard;