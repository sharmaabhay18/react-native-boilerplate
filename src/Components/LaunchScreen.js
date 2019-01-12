import React, { Component } from 'react';
import {
  Text, View, Button, Image
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import { API_CALL_REQUEST } from '../Utility/Types';

class LaunchScreen extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const { dog, onRequestDog } = this.props;
    console.log('props', this.props);
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.textStyle}>LaunchScreen</Text>
        <Button onPress={() => onRequestDog()} title="Get Random Dog" color="#841584" />
        { dog ? <Image source={{ uri: dog }} style={{ width: '100%', height: '45%', position: 'absolute', bottom: 0 }} /> : null }
      </View>
    );
  }
}

const styles = {
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroudColor: 'powderBlue'
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '600'
  }
};

const mapStateToProps = ({ app }) => {
  return app;
};

const mapDispatchToProps = dispatch => ({
  onRequestDog: () => dispatch({ type: API_CALL_REQUEST })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchScreen);
