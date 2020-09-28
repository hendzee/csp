import React, { Component } from 'react';
import { 
    SafeAreaView, 
    Text,
    StyleSheet,
    View
} from 'react-native';

import { connect } from 'react-redux';

class DetailPage extends Component {

    render() {
        return (
            <SafeAreaView style={ pageStyle.mainContainer }>
                <View style={ pageStyle.cardContainer }>
                    <View style={ pageStyle.itemContainer }>
                        <Text style={ pageStyle.boldText }>ID Student</Text>
                        <Text>
                            { this.props.dataStudents[this.props.route.params.idx].id }
                        </Text>
                    </View>

                    <View style={ pageStyle.itemContainer }>
                        <Text style={ pageStyle.boldText }>Name</Text>
                        <Text>
                            { this.props.dataStudents[this.props.route.params.idx].name }
                        </Text>
                    </View>

                    <View style={ pageStyle.itemContainer }>
                        <Text style={ pageStyle.boldText }>Phone</Text>
                        <Text>
                            { this.props.dataStudents[this.props.route.params.idx].phone }
                        </Text>
                    </View>

                    <View style={ pageStyle.itemContainer }>
                        <Text style={ pageStyle.boldText }>Address</Text>
                        <Text>
                            { this.props.dataStudents[this.props.route.params.idx].address }
                        </Text>
                    </View>

                    <View style={ pageStyle.itemContainer }>
                        <Text style={ pageStyle.boldText }>Hobby</Text>
                        <Text>
                            { this.props.dataStudents[this.props.route.params.idx].hobby }
                        </Text>
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

const mapStateToProps = (state) => {
    return {
        dataStudents: state.student.dataStudents
    }
}

const DetailPageWithRedux = connect(mapStateToProps)(DetailPage);

export { DetailPageWithRedux as DetailPage };