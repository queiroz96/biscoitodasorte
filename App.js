import React, { useState } from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";

function App(){

  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
'A vida trará coisas boas se tiver paciência.',
'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
'Não compense na ira o que lhe falta na razão.',
'Defeitos e virtudes são apenas dois lados da mesma moeda.',
'A maior de todas as torres começa no solo.',
'Não há que ser forte. Há que ser flexível.',
'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
'A juventude não é uma época da vida, é um estado de espírito.',
'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
'Siga os bons e aprenda com eles.',
'Não importa o tamanho da montanha, ela não pode tapar o sol.',
'O bom-senso vale mais do que muito conhecimento.',
'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
'São os nossos amigos que nos ensinam as mais valiosas lições.',
'Aquele que se importa com o sentimento dos outros, não é um tolo.',
'A adversidade é um espelho que reflete o verdadeiro eu.',
'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
'Uma bela flor é incompleta sem as suas folhas.'
  ]

  function quebraBiscoito(){
    let numeroAleaorio = Math.floor(Math.random() * frases.length)
    setTextoFrase('"'+frases[numeroAleaorio] +'"')
    setImg(require('./src/biscoitoAberto.png'))
   
  }

  function reiniciar(){
    setImg(require('./src/biscoito.png'))
    setTextoFrase('')
  }


  return (

    <View style={styles.container}>

      <Image

      source={img}
      style={styles.img}
      />

      <Text style={styles.textofrase}> {textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito }>

        <View style={styles.btnArea}>
          <Text style={styles.btnTexto} > Quebrar Biscoito </Text>
        </View>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor: '#121212'}]} onPress={ reiniciar }>

        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, {color:'121212'}]} > Reiniciar Biscoito </Text>
        </View>

        </TouchableOpacity>

    </View>
  );
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  img:{
    width: 230,
    height: 230
  },
  textofrase:{
    fontSize:20,
    color:'#dd7b22',
    margin:30,
    fontStyle:'italic',
    textAlign:'center'

  },
  botao:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius:25
  },

  btnArea:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  btnTexto:{
    fontSize:17,
    fontWeight:'bold',

  color:'#dd7b22'
  }
})

export default App;