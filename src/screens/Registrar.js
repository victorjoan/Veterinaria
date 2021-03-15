import React from 'react';
import {Text, View, TextInput} from 'react-native;';
import Icon from '@expo/vector-icons/AntDesign';


export default class Registrar extends React.Component{
    render(){        
        return(
        <View style={{backgroundColor:"#fff",height:"100%"}}>
            //Imagen
            <image source= {require('')}/>
            style={{width:"100%",height:"40%"}}
            <Text style={{fontSize:30}} >Ingrese sus datos</Text>

            <View style={{
                flexDirection:"row",
                alingItem:"center", 
                marginHorizontal:55,
                borderWidth:2, 
                marginTop:10,
                paddingHorizontal:10,
                borderColor:"#00716F",
                borderRadius:23,
                paddingVertical:2, 
                justifiContent:"Center"}}>

                
                <TextInput 
                placeholder="Correo"
                placeholderTextColor="#00716F"
                style={{paddingHorizontal:10}}
                />
            </View>

            <View style={{
                flexDirection:"row",
                alingItem:"center", 
                marginHorizontal:55,
                borderWidth:2, 
                marginTop:15,
                paddingHorizontal:20,
                borderColor:"#00716F",
                borderRadius:23,
                paddingVertical:2, 
                justifyContent:"Center"}}>

                
                <TextInput 
                placeholder="Clave"
                secureTextEntry
                placeholderTextColor="#00716F"
                style={{paddingHorizontal:10}}
                />
            </View>

            <View style={{
                flexDirection:"row",
                alingItem:"center", 
                marginHorizontal:55,
                borderWidth:2, 
                marginTop:15,
                paddingHorizontal:20,
                borderColor:"#00716F",
                borderRadius:23,
                paddingVertical:2, 
                justifyContent:"Center"}}>

                
                <TextInput 
                placeholder="Repita la clave"
                secureTextEntry
                placeholderTextColor="#00716F"
                style={{paddingHorizontal:10}}
                />
            </View>


            <view style={{

                marginHorizontal:55,
                alignItems:"center",
                justifyContent:"center",
                marginTop:"30",
                backgroundColor:"#00716F",
                paddingVertical:10,
                borderRadius:23
            }}>
                <Text style={{

                    color:"white",
                    fontFamily:"SemiBold",
                }}>Registrar</Text>
            </view>

            
 
        </View>


        

        )
            
        
    }
}