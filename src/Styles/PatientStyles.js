import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        padding: 20,
        borderBottomColor: '#94A3B8',
        borderBottomWidth: 1,
    },
    label:{
        color: '#374151',
        textTransform: 'uppercase',
        fontWeight: '700',
        marginBottom: 10,
    },
    text:{
        color: '#6D28D9',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 10,
    },
    date:{
        color: '#374151',
    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:20,
    },
    btn:{
        paddingVertical: 5,
        paddingHorizontal:20,
        borderRadius:5,
    },
    btnEdit:{
        backgroundColor:'#F59E0B',
    },
    btnText:{
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 12,
        color: '#FFF',
    },
    btnDelete:{
        backgroundColor: '#EF4444',
    }

})