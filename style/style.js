import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f8'
  },
  header: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: '#83c2aa',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#83c2aa',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#73CED6",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: "#2B2B52",
    fontSize: 20
  },
  rules: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginVertical: 10,
    color: '#555',
    paddingHorizontal: 15,
  },
  goodLuck: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '600',
    marginVertical: 10,
    color: '#333',
  },
  rulestitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
  playbutton: {
    marginTop: 20,
    paddingHorizontal: 20,
    width: '50%',
    alignSelf: 'center'
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  icon: {
    marginRight: 5,
    paddingBottom: 13
  },
  input: {
    width: '80%',
    marginVertical: 15,
    alignSelf: 'center',
    backgroundColor: '#e7e7e7',
  },
  view: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
    marginVertical: 10,
  },
  statusText: {
    fontSize: 16,
    color: '#007bff',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  playerNameText: {
    fontSize: 18,
    color: '#555',
    marginTop: 20,
  },
});