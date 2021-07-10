import React, {Component} from 'react';
import AppContainer from 'dips-v1/libs/navigator/AppNavigator';
import Screen from 'dips-v1/screen';
// import {Text} from 'react-native';
// import OneSignal from 'react-native-onesignal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
    // Text.defaultProps = Text.defaultProps || {};
    // Text.defaultProps.allowFontScaling = false;
    // OneSignal.init(V1.ResV1.Strings.AppIdOneSignal, {kOSSettingsKeyAutoPrompt : true});
  }
  


  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        1500
      )
    );
  }

  async UNSAFE_componentWillMount(){
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {

  }

  render() {
    if (this.state.isLoading) {
      return (<Screen.Splash />);
    }
    return (
      <AppContainer/>
    );
  }

}

