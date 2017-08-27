import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import { stylesVar } from '../../common.styles';

const styles = StyleSheet.create({
  PSText: {
    fontFamily: stylesVar.text.baseFamily,
    fontSize: stylesVar.text.baseSize,
    color: stylesVar.color.text,
  },
});

const PSText = (props) => {
  const { style, ...otherProps } = { ...props };

  return (
    <Text {...otherProps} style={[styles.PSText, style]} />
  );
};

PSText.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object,
  ]),
};

PSText.defaultProps = {
  style: {},
};

export default PSText;
