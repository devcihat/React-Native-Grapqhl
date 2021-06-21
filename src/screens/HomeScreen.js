import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import {AuthContext } from "../utils"

export const HomeScreen = () => {
    const { signOut } = useContext(AuthContext);
  
    return (
      <View>
        <Text>Signed in!</Text>
        <Button title="Sign out" onPress={signOut} />
      </View>
    );
  }

