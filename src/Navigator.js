import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Extra from './screens/Extra'
import Mais_Preocupantes from './screens/Mais_Preocupantes'
import Login from './screens/Login'
import Tabela_Notas from './screens/Tabela_Notas'
import Estatistica_Geral from './screens/Estatistica_Geral'
import TokenVerify from './screens/TokenVerify'
import commonStyles from './commonStyles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//import Orientation from 'react-native-orientation';


/*
const drawerConfig = {
    initialRouteName: 'Media_Disciplinas',
    contentOptions: {
        labelStyle: {
            fontFamily: commonStyles.fontFamily,
            fontWeight: 'normal',
            fontSize: 20
        },
        activeLabelStyle: {
            color: '#080',
            fontWeight: 'bold',
        }
    }
}

*/
/*
const drawerRoutes = {
    Main: {
        name: 'Main',
        screen: Main,
        navigationOptions: {
            title: 'Main'
        }
    },
    Media_Disciplinas: {
        name: 'Media_Disciplinas',
        screen: Media_Disciplinas,
        navigationOptions: {
            title: 'Média Disciplinas'
        }
    },

}

const drawerNavigator = createDrawerNavigator(drawerRoutes, drawerConfig)
createAppContainer(drawerNavigator)
*/

const menuConfig = {
    initialRouteName: 'Estatistica_Geral',
    tabBarOptions: {

        showLabel: true,


    }
}



const menuRoutes = {
    Tabela_Notas: {
        name: 'Tabela de Notas',
        screen: Tabela_Notas,
        navigationOptions: {
            title: 'Tabela de Notas',
            //Destrucute do parametro para obter a cor para associar ao icon, para mudar a cor do icon selecionado
            tabBarIcon: ({ tintColor }) => <Icon name='table-large' size={30} color={tintColor} />
        }
    },
    Mais_Preocupantes: {
        name: 'Mais_Preocupantes',
        screen: Mais_Preocupantes,
        navigationOptions: {
            title: 'Situações Precupantes',
            tabBarIcon: ({ tintColor }) => <Icon name='chart-bar' size={30} color={tintColor} />
        }
    },
    Estatistica_Geral: {
        name: 'Estatistica_Geral',
        screen: Estatistica_Geral,
        
        navigationOptions: {
            title: 'Estatística Geral',
            tabBarIcon: ({ tintColor }) => <Icon name='chart-arc' size={30} color={tintColor} />
        }
    },
    Extra: {
        name: 'Media_Geral',
        screen: Extra,
        navigationOptions: {
            title: 'Definições',
            tabBarIcon: ({ tintColor }) => <Icon name='format-list-bulleted' size={30} color={tintColor} />
        }
    },

}


const menuNavigator = createBottomTabNavigator(menuRoutes, menuConfig)



const mainRoutes = {
    Session:{
        name: 'Session',
        screen: TokenVerify,

    },
    Login: {

        name: 'Login',
        screen: Login

    },
    Home: {
        name: 'Home',
        screen: menuNavigator
    },
    

}

const mainNavigator = createSwitchNavigator(mainRoutes, { initialRouteName: 'Session' })

export default createAppContainer(mainNavigator)