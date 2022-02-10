/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Text, View, Pressable, FlatList } from "react-native";

import Form from "./src/components/Form.js";
import Patient from "./src/components/Patient.js";

import { styles } from "./styles";

const App = () => {
  //Los Hooks se colocan en la parte superior, dentro de condicionales o después de un return

  const [modalVisible, setModalVisible] = useState(false);
  const [patients, setPatients] = useState([]);

  // setTimeout(() => {
  //   setModalVisible(true);
  // }, 3000);

  // console.log(modalVisible);
  //const newDateHandler = () => console.log("diste click...");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Administrador de Citas {""}
        <Text style={styles.titleBold}>Veterinaria</Text>
      </Text>

      <Pressable
        //onPress={newDateHandler}
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.btnNewDate}
      >
        <Text style={styles.btnTextNewDate}>Nueva Cita</Text>
      </Pressable>

      {patients.length === 0 ? 
        <Text style={styles.noPatientsText}>No hay pacientes aún</Text>: 
        <FlatList 
          data={patients}
          keyExtractor={(item) => item.id}
          renderItem={({item})=>{
            return(
              <Patient item={item}/>
            )
          }}
        />
      }

      <Form
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setPatients={setPatients}
        patients={patients}
      />
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
