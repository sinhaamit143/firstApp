import {
    FlatList, Image, SafeAreaView, StyleSheet, Text,
    TextInput, useColorScheme, View, TouchableOpacity, ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const dummy = [
    { id: 1, name: 'amit', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1731021347639-8aac941f5e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMzV8fHxlbnwwfHx8fHw%3D' },
    { id: 2, name: 'sumit', email: 'hello@gmail.com', image: 'https://plus.unsplash.com/premium_photo-1705091310441-c85a809285f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzR8fHxlbnwwfHx8fHw%3D' },
    { id: 3, name: 'adarsh', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1725126210190-497eb2cfb6cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzJ8fHxlbnwwfHx8fHw%3D' },
    { id: 4, name: 'sanju', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1728782595111-d521eab9bd93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTV8fHxlbnwwfHx8fHw%3D' },
    { id: 5, name: 'nitik', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1735977161893-d969d37f32c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8' },
    { id: 6, name: 'amit', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1731021347639-8aac941f5e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMzV8fHxlbnwwfHx8fHw%3D' },
    { id: 7, name: 'sumit', email: 'hello@gmail.com', image: 'https://plus.unsplash.com/premium_photo-1705091310441-c85a809285f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzR8fHxlbnwwfHx8fHw%3D' },
    { id: 8, name: 'adarsh', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1725126210190-497eb2cfb6cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzJ8fHxlbnwwfHx8fHw%3D' },
    { id: 9, name: 'sanju', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1728782595111-d521eab9bd93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTV8fHxlbnwwfHx8fHw%3D' },
    { id: 10, name: 'nitik', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1735977161893-d969d37f32c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8' },
    { id: 11, name: 'amit', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1731021347639-8aac941f5e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMzV8fHxlbnwwfHx8fHw%3D' },
    { id: 12, name: 'sumit', email: 'hello@gmail.com', image: 'https://plus.unsplash.com/premium_photo-1705091310441-c85a809285f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzR8fHxlbnwwfHx8fHw%3D' },
    { id: 13, name: 'adarsh', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1725126210190-497eb2cfb6cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzJ8fHxlbnwwfHx8fHw%3D' },
    { id: 14, name: 'sanju', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1728782595111-d521eab9bd93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTV8fHxlbnwwfHx8fHw%3D' },
    { id: 15, name: 'nitik', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1735977161893-d969d37f32c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8' },
    { id: 16, name: 'amit', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1731021347639-8aac941f5e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMzV8fHxlbnwwfHx8fHw%3D' },
    { id: 17, name: 'sumit', email: 'hello@gmail.com', image: 'https://plus.unsplash.com/premium_photo-1705091310441-c85a809285f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzR8fHxlbnwwfHx8fHw%3D' },
    { id: 18, name: 'adarsh', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1725126210190-497eb2cfb6cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzJ8fHxlbnwwfHx8fHw%3D' },
    { id: 19, name: 'sanju', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1728782595111-d521eab9bd93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTV8fHxlbnwwfHx8fHw%3D' },
    { id: 20, name: 'nitik', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1735977161893-d969d37f32c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8' },
    { id: 21, name: 'amit', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1731021347639-8aac941f5e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMzV8fHxlbnwwfHx8fHw%3D' },
    { id: 22, name: 'sumit', email: 'hello@gmail.com', image: 'https://plus.unsplash.com/premium_photo-1705091310441-c85a809285f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzR8fHxlbnwwfHx8fHw%3D' },
    { id: 23, name: 'adarsh', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1725126210190-497eb2cfb6cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzJ8fHxlbnwwfHx8fHw%3D' },
    { id: 24, name: 'sanju', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1728782595111-d521eab9bd93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTV8fHxlbnwwfHx8fHw%3D' },
    { id: 25, name: 'nitik', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1735977161893-d969d37f32c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8' },
    { id: 26, name: 'amit', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1731021347639-8aac941f5e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMzV8fHxlbnwwfHx8fHw%3D' },
    { id: 27, name: 'sumit', email: 'hello@gmail.com', image: 'https://plus.unsplash.com/premium_photo-1705091310441-c85a809285f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzR8fHxlbnwwfHx8fHw%3D' },
    { id: 28, name: 'adarsh', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1725126210190-497eb2cfb6cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzJ8fHxlbnwwfHx8fHw%3D' },
    { id: 29, name: 'sanju', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1728782595111-d521eab9bd93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTV8fHxlbnwwfHx8fHw%3D' },
    { id: 30, name: 'nitik', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1735977161893-d969d37f32c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8' },
];

const Home = ({ navigation }) => {
    const theme = useColorScheme();
    console.log(theme, 'theme');
    const isDarkMode = theme === 'dark';
    const backgroundColor = isDarkMode ? 'black' : 'white';
    const textColor = isDarkMode ? 'white' : 'black';
    const [text, setText] = useState('');
    const [submittedText, setsubmittedText] = useState('');
    const handleSubmit = () => {
        setsubmittedText(text);
        setText('');
    };
    return (

        <SafeAreaView style={[styles.container, { backgroundColor: backgroundColor }]}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container1}>
                    <FlatList
                        data={dummy}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <Image
                                    style={styles.image1}
                                    source={{ uri: item.image }} />
                                <Text>{item.name}</Text>
                            </View>
                        )}
                        keyExtractor={item => item.id.toString()}
                        // eslint-disable-next-line react-native/no-inline-styles
                        ItemSeparatorComponent={<View style={{ height: 10 }} />}
                        horizontal />

                </View>
                <View>
                    <View style={styles.postCard}>
                        <Image
                            style={styles.image}
                            source={{ uri: 'https://images.unsplash.com/photo-1735977161893-d969d37f32c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8' }} />
                        <Icon name="heart-outline" size={24} color="black" style={styles.icon} />
                        <Icon name="chatbubble-outline" size={24} color="black" style={styles.icon} />
                        <Icon name="paper-plane-outline" size={24} color="black" style={styles.icon} />
                        <Icon name="bookmark-outline" size={24} color="black" style={styles.icon} />
                        <Text style={[styles.text, { color: textColor }]}>Aapka swagat hai .... </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Enter a comment here ...."
                            style={styles.input}
                            value={text}
                            onChangeText={setText}
                            multiline
                            numberOfLines={1}
                            keyboardType="default"
                        />
                        <TouchableOpacity style={styles.button1} onPress={handleSubmit}>
                            <Icon name="chatbubble-outline" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    {submittedText ? (<Text>Result: {submittedText}</Text>) : null}
                </View>

                <View>
                    <View style={styles.postCard}>
                        <Image
                            style={styles.image}
                            source={{ uri: 'https://images.unsplash.com/photo-1735977161893-d969d37f32c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8' }} />
                        <Icon name="heart-outline" size={24} color="black" style={styles.icon} />
                        <Icon name="chatbubble-outline" size={24} color="black" style={styles.icon} />
                        <Icon name="paper-plane-outline" size={24} color="black" style={styles.icon} />
                        <Icon name="bookmark-outline" size={24} color="black" style={styles.icon} />
                        <Text style={[styles.text, { color: textColor }]}>Aapka swagat hai .... </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Enter a comment here ...."
                            style={styles.input}
                            value={text}
                            onChangeText={setText}
                            multiline
                            numberOfLines={1}
                            keyboardType="default"
                        />
                        <TouchableOpacity style={styles.button1} onPress={handleSubmit}>
                        <Icon name="chatbubble-outline" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    {submittedText ? (<Text>Result: {submittedText}</Text>) : null}
                </View>
            </ScrollView>
        </SafeAreaView>

    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 0,
        gap: 5,
    },

    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
    },

    container1: {
        flex: 1,
        width: '100%',
        height: '100%',
        marginBottom:10,
    },

    postCard: {
        marginTop: 0,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        borderWidth: 3,
        borderColor: 'white',
    },

    text1: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
    },

    btntext: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    image: {
        width: '100%',
        height: 480,
        resizeMode: 'stretch',
        borderWidth: 3,
        borderColor: 'white',
    },

    image1: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    button: {
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 3,
        borderColor: 'white',
    },

    card: {
        width: 100,
        height: 100,
        backgroundColor: '#dadada',
        borderRadius: 50,
        alignItems: 'center',
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    input: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        marginRight: 10, // Space between input and button
    },
    button1: {
        backgroundColor: '#dadada', // Change to your desired color
        borderRadius: 5,
        padding: 5, // Adjust padding for a smaller button
        justifyContent: 'center',
        alignItems: 'center',
    },
});
