import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { COLORS, TYPOGRAPHY, BORDER_RADIUS, SPACING, SHADOWS } from '../../constants/theme';

export default function ChatbotScreen() {
  const router = useRouter();
  const [inputText, setInputText] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >

        {/* --- 1. HEADER --- */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.headerIcon}>
            <Feather name="arrow-left" size={24} color={COLORS.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>AI Assistant</Text>
          <TouchableOpacity style={styles.headerIcon}>
            <Feather name="more-horizontal" size={24} color={COLORS.textPrimary} />
          </TouchableOpacity>
        </View>

        {/* --- 2. CHAT AREA --- */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Welcome Background Blob (Simulasi Gradient Soft) */}
          <View style={styles.topBackground} />

          {/* Intro Section */}
          <View style={styles.introSection}>
            <View style={styles.avatarLargeContainer}>
              <View style={styles.avatarLarge}>
                <Feather name="cpu" size={28} color={COLORS.primary} />
              </View>
            </View>

            <Text style={styles.introTitle}>
              How can I support{'\n'}your wellness today?
            </Text>

            <View style={styles.introPill}>
              <Text style={styles.introPillText}>
                I'm here to help you become your best self ✨
              </Text>
            </View>
          </View>

          {/* User Message Bubble */}
          <View style={styles.messageRowUser}>
            <View style={styles.bubbleUser}>
              <Text style={styles.bubbleUserText}>
                I'm feeling a bit overwhelmed with exams.
              </Text>
            </View>
          </View>

          {/* AI Typing Indicator Bubble */}
          <View style={styles.messageRowBot}>
            <View style={styles.avatarSmall}>
              <Feather name="cpu" size={14} color={COLORS.textWhite} />
            </View>
            <View style={styles.bubbleBotTyping}>
              <View style={styles.typingDot} />
              <View style={[styles.typingDot, { opacity: 0.6 }]} />
              <View style={[styles.typingDot, { opacity: 0.3 }]} />
            </View>
          </View>

          {/* Suggestions Section */}
          <View style={styles.suggestionsContainer}>
            <Text style={styles.suggestionsTitle}>Suggested for you</Text>

            <View style={styles.chipsWrapper}>
              {/* Chip 1 */}
              <TouchableOpacity style={styles.chip}>
                <Feather name="book-open" size={14} color={COLORS.primary} style={styles.chipIcon} />
                <Text style={styles.chipText}>Study Tips</Text>
              </TouchableOpacity>

              {/* Chip 2 */}
              <TouchableOpacity style={styles.chip}>
                <Feather name="wind" size={14} color={COLORS.primary} style={styles.chipIcon} />
                <Text style={styles.chipText}>Breathing Exercise</Text>
              </TouchableOpacity>

              {/* Chip 3 */}
              <TouchableOpacity style={styles.chip}>
                <Feather name="edit-2" size={14} color={COLORS.textSecondary} style={styles.chipIcon} />
                <Text style={[styles.chipText, { color: COLORS.textSecondary }]}>Journal Prompt</Text>
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>

        {/* --- 3. INPUT AREA --- */}
        <View style={styles.inputAreaWrapper}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Ask me anything..."
              placeholderTextColor={COLORS.textSecondary}
              value={inputText}
              onChangeText={setInputText}
              multiline
            />
            <TouchableOpacity style={styles.micButton}>
              <Feather name="mic" size={20} color={COLORS.textSecondary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.sendButton}>
              <Feather name="send" size={18} color={COLORS.textWhite} style={{ marginLeft: -2 }} />
            </TouchableOpacity>
          </View>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  keyboardAvoid: {
    flex: 1,
  },

  /* --- HEADER --- */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  headerIcon: {
    padding: SPACING.xs,
  },
  headerTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.primary,
    fontWeight: '700',
  },

  /* --- CHAT AREA --- */
  scrollContent: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.xl,
    flexGrow: 1,
  },
  topBackground: {
    position: 'absolute',
    top: -100,
    left: 0,
    right: 0,
    height: 350,
    backgroundColor: '#EEECFF', // Soft purple background sesuai wireframe
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    zIndex: 0,
  },

  /* Intro Section */
  introSection: {
    alignItems: 'center',
    marginTop: SPACING.xl,
    marginBottom: SPACING.xxl,
    zIndex: 1,
  },
  avatarLargeContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.4)', // Lingkaran luar transparan
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  avatarLarge: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.soft,
  },
  introTitle: {
    ...TYPOGRAPHY.h1,
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  introPill: {
    backgroundColor: COLORS.surface,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.pill,
    ...SHADOWS.soft,
  },
  introPillText: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },

  /* Chat Bubbles */
  messageRowUser: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: SPACING.md,
    zIndex: 1,
  },
  bubbleUser: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 4, // Ujung lancip di kanan bawah
    maxWidth: '80%',
    ...SHADOWS.soft,
  },
  bubbleUserText: {
    ...TYPOGRAPHY.bodyMedium,
    color: COLORS.textWhite,
  },

  messageRowBot: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginBottom: SPACING.xl,
    zIndex: 1,
  },
  avatarSmall: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#A5B4FC', // Soft indigo
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.sm,
  },
  bubbleBotTyping: {
    backgroundColor: COLORS.surface,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 4, // Ujung lancip di kiri bawah
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    ...SHADOWS.soft,
  },
  typingDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.primary,
  },

  /* Suggestions */
  suggestionsContainer: {
    marginTop: 'auto', // Mendorong ke bawah jika layar kosong
    zIndex: 1,
  },
  suggestionsTitle: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
    fontWeight: '600',
    marginBottom: SPACING.sm,
  },
  chipsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    paddingHorizontal: SPACING.md,
    paddingVertical: 10,
    borderRadius: BORDER_RADIUS.pill,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
  },
  chipIcon: {
    marginRight: 6,
  },
  chipText: {
    ...TYPOGRAPHY.caption,
    color: COLORS.primary,
    fontWeight: '600',
  },

  /* --- INPUT AREA --- */
  inputAreaWrapper: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.sm,
    // Padding bawah ekstra untuk menghindari tumpang tindih dengan Bottom Tab Bar yang posisinya absolut (height ~85)
    paddingBottom: Platform.OS === 'ios' ? 110 : 90,
    backgroundColor: COLORS.background,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    borderRadius: 30, // Sangat membulat sesuai wireframe
    paddingLeft: SPACING.lg,
    paddingRight: 6,
    paddingVertical: 6,
  },
  textInput: {
    flex: 1,
    ...TYPOGRAPHY.bodyRegular,
    color: COLORS.textPrimary,
    maxHeight: 100, // Jika multiline
  },
  micButton: {
    padding: SPACING.sm,
    marginRight: 4,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});