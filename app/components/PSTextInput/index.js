import React, { PropTypes } from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

import { stylesVar } from '../../common.styles';

const styles = StyleSheet.create({
  PSTextInput: {
    height: 44,
    paddingHorizontal: 20,
    borderRadius: stylesVar.size.borderRadius,
    fontFamily: stylesVar.text.baseFamily,
    fontSize: stylesVar.text.baseSize,
    color: stylesVar.color.text,
  },
});

const PSTextInput = (props) => {
  const {
    placeholderTextColor,
    style,
    ...otherProps
  } = { ...props };

  return (
    <TextInput
      {...otherProps}
      style={[styles.PSTextInput, style]}
      placeholderTextColor={placeholderTextColor}
      underlineColorAndroid="transparent"
    />
  );
};

PSTextInput.propTypes = {
  placeholderTextColor: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
};

PSTextInput.defaultProps = {
  placeholderTextColor: stylesVar.color.textSecondary,
  style: {},
};

export default PSTextInput;
