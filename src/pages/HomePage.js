import React, { Component } from 'react';
import { 
    SafeAreaView, 
    ScrollView,
    Text, 
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';

class HomePage extends Component {
    state = { 
        dataStudents: []
    }

    // Extract data students
    extractData = () => {
        return this.props.dataStudents.map((item, index) =>(

            <TouchableOpacity 
                onPress={ () => this.props.navigation.navigate('DETAIL_PAGE', { idx: index }) }
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

const mapStateToProps = (state) => {
    return {
        dataStudents: state.student.dataStudents
    }
}

const HomePageRedux = connect(mapStateToProps)(HomePage);

export { HomePageRedux as HomePage };