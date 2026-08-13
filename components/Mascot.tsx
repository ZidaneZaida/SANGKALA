import React from 'react';
import { Image, StyleSheet } from 'react-native';

const VARIANTS = [
  require('../assets/images/mascot/mascot_00.png'),
  require('../assets/images/mascot/mascot_01.png'),
  require('../assets/images/mascot/mascot_02.png'),
  require('../assets/images/mascot/mascot_03.png'),
  require('../assets/images/mascot/mascot_04.png'),
  require('../assets/images/mascot/mascot_05.png'),
  require('../assets/images/mascot/mascot_06.png'),
  require('../assets/images/mascot/mascot_07.png'),
];

type MascotProps = {
  size?: number;
  variant?: number;
};

export default function Mascot({ size = 100, variant = 0 }: MascotProps) {
  const index = Math.min(Math.max(variant, 0), VARIANTS.length - 1);
  return (
    <Image
      source={VARIANTS[index]}
      style={[styles.image, { width: size, height: size }]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
});
