import React, { useState } from "react";
import { StyleSheet, View, Button, ImageBackground, Image } from "react-native";
import * as Google from "expo-google-app-auth";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../mutations/create-user"

const LoginScreen = ({ navigation } : any) => {
  const [createUser, {data}] = useMutation(CREATE_USER)

  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState();
  const signInAsync = async () => {
      try {
      const { type, accessToken, user } : any = await Google.logInAsync({
          iosClientId: `{{ add key }}`,
          androidClientId: `{{ add key }}`,
      });

      if (type === "success") {
          setUser(user);
          setAccessToken(accessToken);
          createUser({variables: {name: user.name, email: user.email,  familyName: user.familyName, givenName: user.givenName,  id: user.id, photoUrl: user.photoUrl}});
          navigation.navigate("Home", { user });
      }
      } catch (error) {
          console.log("LoginScreen.js 19 | error with login", error);
      }
  };

  const goBack = () => {
      navigation.navigate("Home", { user });
  }

  const image = { uri: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' };

  return (
    <>
      <ImageBackground source={image} style={styles.image} blurRadius={0.3}>
        <View style={styles.buttonContainer}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png',
            }}
          />
          {!user && <Button title="Login with Google" onPress={signInAsync} />}
          {user && <Button title="Go Back" onPress={goBack} />
          }
        </View>
      </ImageBackground>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 60,
    backgroundColor: 'rgba(100,200,100,0.2)',
},
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',

  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginBottom: 20,
    marginTop: 50,
  },
  profilePic: {
    flex: 0,
    width: 90,
    height: 90,
    // marginTop: 0,
    borderRadius: 250,
  }
});
