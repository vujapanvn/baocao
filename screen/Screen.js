import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

const onPressTitle = () => {
  console.log("title pressed");
};

const TextInANest = () => {
  const titleText = useState("Bird's Nest");
  const bodyText = useState("This is not really a bird nest.");

  function Screen {
  return (

    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
}

export default Screen;