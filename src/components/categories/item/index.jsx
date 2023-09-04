import React from 'react';
import { TouchableHighlight, ImageBackground, Text, StyleSheet } from 'react-native';

import { COLORS } from '../../../themes';

const CategoryItem = ({ id, name, backgroundColor, backgroundImage, onSelectCategory }) => {
  return (
    <TouchableHighlight
      onPress={() => onSelectCategory(id)}
      style={[styles.container, { backgroundColor }]}
      underlayColor={COLORS.primary}>
      <ImageBackground
        source={{ uri: backgroundImage }}
        style={styles.imageBackground}
        resizeMode="cover">
        <Text style={styles.categoryName}>{name}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageBackground: {
    width: '100%',
    height: 150,
    justifyContent: 'flex-end',
  },
  categoryName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
    padding: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
  },
});

export default CategoryItem;
