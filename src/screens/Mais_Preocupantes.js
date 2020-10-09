import React, { Component } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import axios from 'axios';
import { server, showError, server_teste} from '../common'
import commonStyles from '../commonStyles'
import { ScrollView } from 'react-native-gesture-handler';



 
export default class ExampleOne extends Component {
  componentDidMount = async () => {
    this.getTabela()
  }

  getTabela = async () => {
    try { 
      
        const res_preocupantes = await axios.get(`${server}/direcao/preocupantes`)
      
      //const temp = JSON.stringify(res.data)

      this.setState({ preocupantes: res_preocupantes.data })
      

      let array2 = []

      this.state.preocupantes.map((nota) => {
        let array = []
        array.push(nota[0].nome_aluno)
        array.push(nota[0].cursos.nome_curso)
        array.push(nota[0].modulos)
        
        array2.push(array)
      });
      
      this.setState({ tableData: array2 })

    } catch(e) {
        showError(e)
    }
  }

  constructor(props) {
    
    super(props);
    this.state = {
      preocupantes : [],
      tableHead: ['Nome', 'Curso', 'Nº Módulos'],
      tableData: []
    }
  }
 
  render() {
    const state = this.state;
  
    return (

      <View style={styles.container}>
        <ScrollView>
        <Text style={styles.subtitle}>Tabela de Casos Mais Preocupantes</Text>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: 'red' },
  text: { fontFamily: commonStyles.fontFamily, margin: 6, justifyContent:'center' },
  subtitle: {
    fontFamily: commonStyles.fontFamily,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    marginBottom: 15
},
});