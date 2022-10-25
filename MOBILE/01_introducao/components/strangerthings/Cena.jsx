import React from 'react'
import { View, Text } from 'react-native'
import Personagem from './Personagem'

/*const Cena = ({titulo})=> 
 <View>
    <Text>Cena {titulo}</Text>
    <Personagem nome='Eleven' cena={titulo}/>
    <Personagem nome='Vecna' cena={titulo}/>
    <Personagem nome='Max' cena={titulo}/>
    <Personagem nome='Dustin' cena={titulo}/>   
 </View>
*/

/*const Cena = (props)=> 
 <View>
    <Text style={{fontSize:20}}>Cena {props.titulo}</Text>
    {props.children}  
 </View>*/

/* const Cena = (props)=> 
 <View>
    <Text style={{fontSize:20}}>Cena {props.cena}</Text>
    {
        React.Children.map(
            props.children,
            (personagem)=>{
               return React.cloneElement(personagem,{cena:props.cena}) 
            }
        )
    }  
 </View>
 */

const Cena = ({children,cena}) =>
    <View>
        <Text style={{ fontSize: 20 }}>Cena {cena}</Text>
        {
            React.Children.map(
                children,
                (personagem) => {
                    return React.cloneElement(personagem, { cena })
                }
            )
        }
    </View>
export default Cena