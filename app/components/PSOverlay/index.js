import React, { PropTypes } from 'react';
import {
  Modal,
  StyleSheet,
  View,
} from 'react-native';

import { stylesVar } from '../../common.styles';

const styles = StyleSheet.create({
  PSOverlay: {},
  PSOverlayContainer: {
    flex: 1,
    backgroundColor: stylesVar.color.overlay,
  },
});

const PSOverlay = (props) => {
  const { children, onRequestClose, style, transparent, ...otherProps } = { ...props };

  return (
    <Modal
      {...otherProps}
      onRequestClose={onRequestClose}
      style={styles.PSText}
      transparent={transparent}
    >
      <View style={[styles.PSOverlayContainer, style]}>
        {children}
      </View>
    </Modal>
  );
};

PSOverlay.propTypes = {
  children: PropTypes.node.isRequired,

  onRequestClose: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object,
  ]),
  transparent: PropTypes.bool,
};

PSOverlay.defaultProps = {
  onRequestClose: () => {},
  style: {},
  transparent: true,
};

export default PSOverlay;
