import {  StyleSheet } from 'react-native';

const IOS_SB_HEIGHT = 20;

export const stylesVar = {
  color: {
    accent: '#5B88F6',
    accentSecondary: '#FC8568', // "orange"
    background: '#FFFFFF',
    border: '#DDDDDD',
    text: '#363639',
    textSecondary: '#545457',
    overlay: 'rgba(0,0,0,0.6)',
  },
  size: {
    borderRadius: 6,
    pagePadding: 16,
  },
  text: {
    baseSize: 16,
    labelSize: 12,
    titleSize: 24,
    subtitleSize: 18,
    // baseFamily: 'Rubik-Regular',
  },
};

export const gStyles = StyleSheet.create({
  // Resets
  navCardReset: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    backgroundColor: 'transparent',
  },
  // Layouts
  body: {
    flex: 1,
    marginTop: 0,
    backgroundColor: stylesVar.color.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: stylesVar.size.pagePadding,
    paddingTop: IOS_SB_HEIGHT,
    paddingBottom: stylesVar.size.pagePadding,
  },
  // App
  title: {
    fontSize: stylesVar.text.titleSize,
    // fontFamily: 'Rubik-Medium',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: stylesVar.text.subtitleSize,
    textAlign: 'center',
  },
});
