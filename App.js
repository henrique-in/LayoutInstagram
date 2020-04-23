import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity

} from 'react-native';

import Lista from  './src/Lista';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        feed:[
         { id: '1',
            nome: 'Matheus',
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png ',
            descricao: '#meta ',
            imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
            likeada:false ,
            likers: 10
          },
          
          { id: '2',
            nome: 'Henrique',
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png ',
            descricao: 'Alta performance ',
            imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
            likeada:true ,
            likers: 20
          },

          { id: '3',
            nome: 'Ricardo',
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png ',
            descricao: 'Codando como sempre , bugando como nunca ',
            imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
            likeada:false ,
            likers: 10
          },

          { id: '4',
            nome: 'Breno',
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png ',
            descricao: 'Gambiarra a gente ver por aqui ',
            imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
            likeada:false ,
            likers: 50
          },

          { id: '5',
            nome: 'Ruanderson',
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png ',
            descricao: 'Novo estagiario da Accalio.io ',
            imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
            likeada:false ,
            likers: 32
          },


        ]
    };
  }

    render(){
      return (
        <View style={styles.container}>
          
          <View style={styles.header}>
            
            <TouchableOpacity>
              <Image
              source={require('./src/img/logo.png')}
              style={styles.logo}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
              source={require('./src/img/send.png')}
              style={styles.send}
              />
            </TouchableOpacity>
          </View>

          <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={this.state.feed}
          renderItem={({item}) => <Lista data={item}/>}
          
          />


        </View>
      );    
    }




}

  const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    header:{
      height: 55,
      backgroundColor: '#FFF',
      flexDirection:'row',
      alignItems:'center',
      justifyContent: 'space-between',
      padding: 5,
      borderBottomWidth: 0.2,
      shadowColor: '#000',
      elevation: 1,
  
    },
    logo:{

    },
    send:{
      width: 23,
      height:23
    },
  });

  export default App;
