/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  titleBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNewDate: {
      backgroundColor: '#6D28D9',
      padding: 15,
      marginTop: 30,
    //   marginLeft: 20,
    //   marginRight: 20,
    marginHorizontal: 20, //Esto reemplaza a las dos líneas de arriba, es decir le pone el mismo amrgen tanto a la izquierda como a la derecha
    borderRadius: 10,
  },
  btnTextNewDate: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});
