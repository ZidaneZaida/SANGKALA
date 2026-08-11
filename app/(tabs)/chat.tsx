import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { COLORS, TYPOGRAPHY } from '../../constants/theme';

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={TYPOGRAPHY.h1}>AI Assistant Chatbot</Text>
        <Text style={TYPOGRAPHY.bodyRegular}>Support & Wellness Chat</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
