/*Example of React Native Chart Kit*/
import * as React from 'react';
//import React
import { Text, View, StyleSheet, Dimensions, ScrollView, Alert } from 'react-native';
//import Basic React Native Components
import { server, showError, server_teste} from '../common'
import axios from 'axios'
import commonStyles from '../commonStyles'


const initialState = {
    mediaAprovados: [],
    mediaReprovados: [],

}

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
//import React Native chart Kit for different kind of Chart

export default class App extends React.Component {

    state = {
        ...initialState
    }

      

    componentDidMount = async () => {

        this.getMediaAprovados()
    }

    getMediaAprovados = async () => {
        try { 
            

            const res_mediaAprovados = await axios.get(`${server}/direcao/estatistica/`)
            this.setState({ mediaAprovados: res_mediaAprovados.data.toFixed(2) }) 

            const per_reprovados = 1 - res_mediaAprovados.data
            this.setState({ mediaReprovados: per_reprovados.toFixed(2) }) 


            //Alert.alert(this.state.mediaReprovados.toString())
            //const temp = JSON.stringify(res.data)

        } catch(e) {
            showError(e)
        }
    }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>


            {/*Example of Progress Chart*/}
            <Text style={styles.subtitle}>Percentagem de Aprovação aos Módulos</Text>

            {/*
            <ProgressChart
              data={{
                  
                    labels: ["Méd. 0-20:",], // optional
                    data: [this.state.media]  
 
              }}
              width={Dimensions.get('window').width - 26}
              height={250}
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 1,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 20,
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            /> */}



            
            
            {/*Example of Pie Chart*/}
            {

            <PieChart
              data={[
                {
                  name: 'Aprovados',
                  percentagem: Number(this.state.mediaAprovados),
                  color: 'rgba(131, 167, 234, 1)',
                  legendFontColor: '#7F7F7F',
                  legendFontSize: 15,
                },
                {
                  name: 'Reprovados',
                  percentagem: Number(this.state.mediaReprovados),
                  color: '#ce2020',
                  legendFontColor: '#7F7F7F',
                  legendFontSize: 15,
                },
              ]}
              width={Dimensions.get('window').width - 16}
              height={220}
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              accessor="percentagem"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute //for the absolute number remove if you want percentage
            />
            }

          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 140,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
  },
  subtitle: {
    textAlign:'center',
    fontFamily: commonStyles.fontFamily,
    color: 'black',
    fontSize: 20,
    marginBottom: 15
},
});