import React, {useState} from 'react';
import {Text, View, Button, Pressable, Modal} from 'react-native';
import {styles} from './styles';

const App = () => {
  //Los Hooks se colocan en la parte superior, dentro de condicionales o después de un return

  const [modalVisible, setModalVisible] = useState(false);

  // setTimeout(() => {
  //   setModalVisible(true);
  // }, 3000);

  // console.log(modalVisible);
  //const newDateHandler = () => console.log('diste click...');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Administrador de Citas {''}
        <Text style={styles.titleBold}>Veterinaria</Text>
      </Text>

      <Pressable
        //onPress={newDateHandler}
        onPress={() => setModalVisible(true)}
        style={styles.btnNewDate}>
        <Text style={styles.btnTextNewDate}>Nueva Cita</Text>
      </Pressable>

      <Modal animationType="slide" visible={modalVisible}>
        <Text>Desde Modal</Text>
      </Modal>
    </View>
  );
};

export default App;

// const styles = StyleSheet.create({
//   titulo: {
//     textAlign: 'center',
//     fontSize: 30,
//     color: '#374151',
//     fontWeight: '600',
//   },
// }); //Se puede hacer un archivo aparte para tener los estilos en otros lados.

//  <Button
//   title="Nueva Cita"
//   onPress={() => console.log('Presionaste en el boton')}
// />// Se cambia por el pressable
//SafeAreaView ---> // Este componente funciona solo en iOS, en android es lo mismo que tener un View
