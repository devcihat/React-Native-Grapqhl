import React, { useContext, useState } from "react";
import { TouchableOpacity, View,Text,Image, Alert } from "react-native";
import { AuthContext } from "../utils";
import tailwind from "tailwind-rn";
import { TextInput } from 'react-native-paper';


export const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const { signIn } = useContext(AuthContext);
  
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
    //console.log('dshdsajhadjsha')
   
  };

  return (
    <View style={tailwind("flex-1 ")}>
        <Image
        style={tailwind('w-full h-1/3')}
         source={require('../images/image.jpeg')} />
         <Text style={tailwind('text-black text-2xl self-center mt-3')}>Save The World</Text>
         <Text style={tailwind('self-center mx-8 text-gray-400 mt-4 text-center')}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </Text>
        <View style={tailwind('mt-12')}>
        <TextInput
         left={<TextInput.Icon  name="account" />}
        style={tailwind("w-3/4 self-center rounded-md bg-gray-300 my-2")}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCompleteType={"off"}
        autoCorrect={false}
    
      />
      <TextInput
        left={<TextInput.Icon name="lock" />}
        right={password ? <TextInput.Icon onPress={togglePasswordVisiblity} name="eye" /> :null}
        style={tailwind("w-3/4 self-center rounded-md bg-gray-300 my-2")}
        placeholder="Password"
        value={password}    
        onChangeText={setPassword}
        secureTextEntry={passwordShown ? false : true}
      />
      <TouchableOpacity
        style={tailwind(
          "bg-indigo-500 self-center justify-center items-center p-3 my-4 px-8 rounded-md"
        )}
        onPress={() => signIn({ username, password })}
      >
        <Text style={tailwind("text-white")}>LOGIN</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};
