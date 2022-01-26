import React from "react";
import { 
    StyleSheet,
    Text, 
    View, 
    ImageBackground, 
    Image
    } from "react-native";

const UserScreen = ({ route } : any) => {
const { user } = route.params;

const backgroundImage = { uri: 'https://images.unsplash.com/photo-1595841055318-943e15fbbe80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgzfHxnb2xmfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60' };

    return (
        <>
            <ImageBackground source={backgroundImage} style={styles.image}>
                    <View style={styles.container}>
                        <View>
                            <Image
                                style={styles.profilePic}
                                source={{
                                    uri: `${user.photoUrl}`,
                                }}
                            />
                        </View>
                        <Text style={styles.banner}>Welcome {user.name}</Text>
                    </View>
            </ImageBackground>
        </>
    );
};

export default UserScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'center',
    },
    profilePic: {
        flex: 0,
        width: 90,
        height: 90,
        marginTop: 80,
        borderRadius: 250,
    },
    banner: {
        flex: 1,
        fontSize: 38
    }
});
