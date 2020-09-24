import React, { Component } from 'react';
import { 
    SafeAreaView, 
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

class AddPage extends Component {
    state = { 
        id: '',
        name: '',
        phone: '',
        address: '',
        hobby: ''
    }

    // Save student
    saveStudent = () => {
        let newStudent = {
            id: (Math.floor(Math.random() * 10)) + 1000,
            name: this.state.name.toUpperCase(),
            phone: this.state.phone,
            address: this.state.address,
            hobby: this.state.hobby
        }

        this.props.route.params.handleAddStudent(newStudent),
        this.props.navigation.goBack();
    }

    // Button add
    buttonAdd = () => {
        return(
            <TouchableOpacity 
                onPress={ this.saveStudent }
                style={ pageStyle.buttonAddContainer }
            >
                <Text style={ pageStyle.buttonText }>
                    SAVE
                </Text>
            </TouchableOpacity>
        );
    }
    
    render() {
        return (
            <SafeAreaView style={ pageStyle.mainContainer }>
                <TextInput 
                    value={ this.state.name }
                    placeholder='Name'
                    onChangeText={ text => this.setState({ name: text }) }
                    style={ pageStyle.textInput }
                />
                <TextInput 
                    value={ this.state.phone }
                    placeholder='Phone'
                    onChangeText={ text => this.setState({ phone: text }) }
                    style={ pageStyle.textInput }
                />
                <TextInput 
                    value={ this.state.address }
                    placeholder='Address'
                    onChangeText={ text => this.setState({ address: text }) }
                    style={ pageStyle.textInput }
                />
                <TextInput 
                    value={ this.state.hobby }
                    placeholder='Hobby'
                    onChangeText={ text => this.setState({ hobby: text }) }
                    style={ pageStyle.textInput }
                />
                { this.buttonAdd() }
            </SafeAreaView>
        );
    }
}

const pageStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 15
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#DDD',
        marginBottom: 5
    },
    buttonAddContainer: {
        marginTop: 25,
        backgroundColor: '#4b7bec',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold'
    }
});

export { AddPage };