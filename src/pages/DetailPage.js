import React, { Component } from 'react';
import { 
    SafeAreaView, 
    Text,
    StyleSheet,
    View
} from 'react-native';

class DetailPage extends Component {

    render() {
        return (
            <SafeAreaView style={ pageStyle.mainContainer }>
                <View style={ pageStyle.cardContainer }>
                    <View style={ pageStyle.itemContainer }>
                        <Text style={ pageStyle.boldText }>ID Student</Text>
                        <Text>{ this.props.route.params.dataStudent.id }</Text>
                    </View>

                    <View style={ pageStyle.itemContainer }>
                        <Text style={ pageStyle.boldText }>Name</Text>
                        <Text>{ this.props.route.params.dataStudent.name }</Text>
                    </View>

                    <View style={ pageStyle.itemContainer }>
                        <Text style={ pageStyle.boldText }>Phone</Text>
                        <Text>{ this.props.route.params.dataStudent.phone }</Text>
                    </View>

                    <View style={ pageStyle.itemContainer }>
                        <Text style={ pageStyle.boldText }>Address</Text>
                        <Text>{ this.props.route.params.dataStudent.address }</Text>
                    </View>

                    <View style={ pageStyle.itemContainer }>
                        <Text style={ pageStyle.boldText }>Hobby</Text>
                        <Text>{ this.props.route.params.dataStudent.hobby }</Text>
                    </View>
                </View>
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
    itemContainer: {
        marginBottom: 15
    },
    boldText: {
        fontWeight: 'bold'
    }
});

export { DetailPage };