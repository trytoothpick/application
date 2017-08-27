import React, { PropTypes } from 'react';
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

import PSText from '../../components/PSText';
import { stylesVar } from '../../common.styles';

const styles = StyleSheet.create({
  PSButton: {
    height: 48,
    backgroundColor: 'transparent',
  },
  PSButtonView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 12,
    overflow: 'hidden',
  },
  PSButtonInnerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  PSButtonText: {
    paddingHorizontal: 8,
    color: 'white',
    // fontFamily: 'GibsonBold',
  },
});

const PSButton = (props) => {
  const {
    activeOpacity,
    backgroundColor,
    borderRadius,
    disabled,
    imgCenterSrc,
    imgLeftSrc,
    imgRightSrc,
    onHideUnderlay,
    onPress,
    onShowUnderlay,
    textStyle,
    title,
    style,
    underlayColor,
    ...otherProps
  } = { ...props };

  return (
    <TouchableHighlight
      style={[styles.PSButton, style, { borderRadius }]}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={activeOpacity}
      onHideUnderlay={onHideUnderlay}
      onShowUnderlay={onShowUnderlay}
      underlayColor={underlayColor}
    >
      <View {...otherProps} style={[styles.PSButtonView, { backgroundColor, borderRadius }]}>
        {imgCenterSrc ?
          <Image source={imgCenterSrc} /> :
          <View style={styles.PSButtonInnerView}>
            <Image source={imgLeftSrc} />
            <PSText style={[styles.PSButtonText, textStyle]}>{title}</PSText>
            <Image source={imgRightSrc} />
          </View>
        }
      </View>
    </TouchableHighlight>
  );
};

PSButton.propTypes = {
  onPress: PropTypes.func.isRequired,

  activeOpacity: PropTypes.number,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.number,
  disabled: PropTypes.bool,
  imgCenterSrc: PropTypes.any,
  imgLeftSrc: PropTypes.any,
  imgRightSrc: PropTypes.any,
  onHideUnderlay: PropTypes.func,
  onShowUnderlay: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  textStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  title: PropTypes.string,
  underlayColor: PropTypes.string,
};

PSButton.defaultProps = {
  activeOpacity: 1,
  backgroundColor: stylesVar.color.accent,
  borderRadius: stylesVar.size.borderRadius,
  disabled: false,
  imgCenterSrc: null,
  imgLeftSrc: null,
  imgRightSrc: null,
  onHideUnderlay() {},
  onShowUnderlay() {},
  style: {},
  textStyle: {},
  title: '',
  underlayColor: 'transparent',
};

export default PSButton;
