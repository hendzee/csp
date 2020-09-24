import React, { Component } from 'react';
import { 
    SafeAreaView, 
    ScrollView,
    Text, 
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class HomePage extends Component {
    state = { 
        dataStudents: [
            {
                'id': '100001',
                'name': 'VIRGINIA HENDRAS PRAWIRA',
                'phone': '0850000001',
                'address': 'Jl. Raya Malang no.10, Malang.',
                'hobby': 'Belajar dan bermain'
            },
            {
                'id': '100002',
                'name': 'BIMO WIDODO SYAHPUTRO',
                'phone': '0850000002',
                'address': 'Jl. Merdeka no.11, Malang.',
                'hobby': 'Belajar dan bermain'
            },
        ]
    }

    // Extract data students
    extractData = () => {
        return this.state.dataStudents.map((item, index) =>(

            <TouchableOpacity 
                onPress={ () => this.props.navigation.navigate('DETAIL_PAGE', { dataStudent: this.state.dataStudents[index] }) }
                style={ pageStyle.cardContainer }
            >
                <Text style={ pageStyle.name }>
                    { item.name }
                </Text>
                <Text style={ pageStyle.id }>
                    { 'ID: ' + item.id }
                </Text>
            </TouchableOpacity>
        ));
    }

    // Handle add student
    handleAddStudent = (newStudent) => {
        this.setState({ dataStudents: [...this.state.dataStudents, newStudent] });
    }

    // Button add
    buttonAdd = () => {
        return(
            <TouchableOpacity 
                onPress={ () => this.props.navigation.navigate('ADD_PAGE', { handleAddStudent: this.handleAddStudent }) }
                style={ pageStyle.buttonAddContainer }
            >
                <Text style={ pageStyle.buttonText }>
                    +
                </Text>
            </TouchableOpacity>
        );
    }
    
    render() {
        return (
            <SafeAreaView style={ pageStyle.mainContainer }>
                <ScrollView>
                    { this.extractData() }
                    { this.buttonAdd() }
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const pageStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 15    
    },
    cardContainer: {
        borderWidth: 1,
        padding: 25,
        marginBottom: 15,
        borderColor: '#DDD'
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    id: {
        fontSize: 13
    },
    buttonAddContainer: {
        backgroundColor: '#4b7bec',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export { HomePage };