import React from 'react';
import {Text, View, TextInput} from 'react-native;';
import Icon from '@expo/vector-icons/AntDesign';


export default class Login extends React.Component{
    render(){
        const {navigate}= this.props.navigation;
        return(
        <View style={{backgroundColor:"#fff",height:"100%"}}>
            //Imagen
            <image source= {require('')}/>
            style={{width:"100%",height:"40%"}}
            <Text style={{fontSize:30}} >Ingrese usuario y clave</Text>

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

                <Icon name="mail" color="#00716F" size="24"/>
                <TextInput 
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

                <Icon name="mail" color="#00716F" size="24"/>
                <TextInput 
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
                }}>Already a member</Text>
            </view>

            <Text 
            
            onPress={()=>navigate('Registrar')}
            
            style={{

                alingSelf:"center",
                color:"#00716F",
                fontFamily:"SemiBold",
                paddingVertical:30
            }}>New user</Text>
 
        </View>


        

        )
            
        
    }
}