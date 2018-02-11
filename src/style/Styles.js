//@flow
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backButton: {
    flex: 1,
    padding: 5,
    width: 40,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titleBarContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 60,
    width: '100%',
    backgroundColor: '#4169e1',
  },
  titleTextContainer: {
    flex: 8,
    paddingRight: 40,
    alignItems: 'center',
  },
  titleText: {},
  description: {
    flex: 2,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  imagesContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'green',
  },
  imageContainer: {
    position: 'absolute',
    zIndex: 2,
    borderWidth: 2,
    borderColor: 'white',
    width: '35%',
    height: '35%',
  },
  nameContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  bar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderColor: '#f2f2f2',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  searchContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#000080',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f2f2f2',
    width: '90%',
    height: 30,
    borderRadius: 4,
  },
  searchIcon: {
    height: 30,
    width: 30,
    margin: 5,
  },
  searchInput: {
    width: '100%',
    height: '100%',
  },
  bottomDescription: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'pink',
    width: '100%',
    justifyContent: 'space-between',
  },
  logoutText: {
    justifyContent: 'flex-end',
  },
});

export default styles;
