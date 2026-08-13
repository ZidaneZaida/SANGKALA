import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Jelajahi</ThemedText>
      </ThemedView>
      <ThemedText>Aplikasi ini menyertakan kode contoh untuk membantu Anda memulai.</ThemedText>
      <Collapsible title="Routing berbasis file">
        <ThemedText>
          Aplikasi ini memiliki dua layar:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> dan{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          File layout di <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          mengatur tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Pelajari lebih lanjut</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Dukungan Android, iOS, dan web">
        <ThemedText>
          Anda dapat membuka proyek ini di Android, iOS, dan web. Untuk membuka versi web, tekan{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> di terminal yang menjalankan proyek ini.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Gambar">
        <ThemedText>
          Untuk gambar statis, Anda dapat menggunakan suffix <ThemedText type="defaultSemiBold">@2x</ThemedText> dan{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> untuk memberikan file untuk
          berbagai kepadatan layar
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Pelajari lebih lanjut</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Font kustom">
        <ThemedText>
          Buka <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> untuk melihat cara memuat{' '}
          font kustom seperti ini.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Pelajari lebih lanjut</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Komponen mode terang dan gelap">
        <ThemedText>
          Template ini memiliki dukungan mode terang dan gelap. Hook{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> memungkinkan Anda memeriksa
          skema warna saat ini pengguna, sehingga Anda dapat menyesuaikan warna UI accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Pelajari lebih lanjut</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animasi">
        <ThemedText>
          Template ini menyertakan contoh komponen animasi. Komponen{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> menggunakan
          library <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
          yang powerful untuk membuat animasi melambai.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              Komponen <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              menyediakan efek parallax untuk gambar header.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
