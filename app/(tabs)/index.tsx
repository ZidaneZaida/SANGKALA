import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { COLORS, TYPOGRAPHY, BORDER_RADIUS, SPACING, SHADOWS } from '../../constants/theme';

export default function DashboardScreen() {

  const router = useRouter();
  // Data Mockup untuk Kalender Mingguan
  const weekDates = [
    { day: 'Mon', date: '9', isActive: false },
    { day: 'Tue', date: '10', isActive: false },
    { day: 'Wed', date: '11', isActive: true }, // Asumsi hari ini
    { day: 'Thu', date: '12', isActive: false },
    { day: 'Fri', date: '13', isActive: false },
    { day: 'Sat', date: '14', isActive: false },
    { day: 'Sun', date: '15', isActive: false },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* 1. HEADER SECTION */}
        <View style={styles.header}>
          <View style={styles.headerTextContainer}>
            <Text style={TYPOGRAPHY.h1}>Hi, Profesional! 👋</Text>
            <Text style={TYPOGRAPHY.bodyRegular}>Let's make today productive!</Text>
          </View>
          <View style={styles.headerActions}>
            <View style={styles.mascotMini}>
              <Text style={{ fontSize: 24 }}>🤖</Text>
            </View>
            <TouchableOpacity style={styles.notificationBtn} onPress={() => router.replace('/notification')}>
              <Feather name="bell" size={20} color={COLORS.textPrimary} />
              <View style={styles.notificationBadge} />
            </TouchableOpacity>
          </View>
        </View>

        {/* 2. WELLNESS SCORE CARD */}
        <View style={styles.wellnessCard}>
          <View style={styles.wellnessTop}>
            <View style={styles.wellnessTextContent}>
              <Text style={styles.wellnessLabel}>Wellness Score</Text>
              <View style={styles.scoreWrapper}>
                <Text style={styles.scoreBig}>82</Text>
                <Text style={styles.scoreSmall}> /100</Text>
              </View>
              <Text style={styles.wellnessMessage}>You're doing great, keep going!</Text>
              <TouchableOpacity style={styles.insightBtn}>
                <Text style={styles.insightBtnText}>See insight</Text>
                <Feather name="arrow-right" size={14} color={COLORS.textWhite} />
              </TouchableOpacity>
            </View>
            <View style={styles.progressRingContainer}>
              <View style={styles.progressRingBase}>
                <View style={styles.progressRingActive} />
              </View>
              <View style={styles.progressRingContent}>
                <Text style={styles.progressRingPercentage}>16%</Text>
                <Text style={styles.progressRingStatus}>Weak</Text>
              </View>
            </View>
          </View>
          <View style={styles.metricsContainer}>
            <View style={styles.metricItem}><Feather name="moon" size={20} color={COLORS.textWhite} /><Text style={styles.metricValue}>85</Text><Text style={styles.metricLabel}>Rest</Text></View>
            <View style={styles.metricItem}><Feather name="activity" size={20} color={COLORS.textWhite} /><Text style={styles.metricValue}>78</Text><Text style={styles.metricLabel}>Focus</Text></View>
            <View style={styles.metricItem}><Feather name="cpu" size={20} color={COLORS.textWhite} /><Text style={styles.metricValue}>91</Text><Text style={styles.metricLabel}>Mind</Text></View>
            <View style={styles.metricItem}><Feather name="coffee" size={20} color={COLORS.textWhite} /><Text style={styles.metricValue}>68</Text><Text style={styles.metricLabel}>Energy</Text></View>
          </View>
        </View>

        {/* --- 3. WEEKLY CALENDAR STRIP (BARU) --- */}
        <View style={styles.calendarContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.calendarScroll}>
            {weekDates.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.calendarDayCard, item.isActive && styles.calendarDayCardActive]}
              >
                <Text style={[styles.calendarDayText, item.isActive && styles.calendarTextActive]}>
                  {item.day}
                </Text>
                <Text style={[styles.calendarDateText, item.isActive && styles.calendarTextActive]}>
                  {item.date}
                </Text>
                {/* Indikator titik jika ada jadwal di hari tersebut */}
                {item.isActive && <View style={styles.calendarEventDot} />}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* 4. TODAY'S PLAN */}
        <View style={styles.sectionHeader}>
          <Text style={TYPOGRAPHY.h2}>Today's Plan</Text>
          <TouchableOpacity onPress={() => router.push('/(tabs)/task')}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.planCard}>
          <View style={[styles.planIconWrapper, { backgroundColor: '#EEECFF' }]}>
            <Feather name="book-open" size={20} color={COLORS.primary} />
          </View>
          <View style={styles.planContent}>
            <Text style={TYPOGRAPHY.h3}>Machine Learning Class</Text>
            <Text style={TYPOGRAPHY.caption}>10:00 - 12:30 • Scheduled</Text>
          </View>
          <View style={styles.progressBarContainer}>
            <Text style={styles.progressPercentText}>60%</Text>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '60%' }]} />
            </View>
          </View>
        </View>

        {/* 5. YOUR STREAKS */}
        <View style={[styles.sectionHeader, { marginTop: SPACING.lg }]}>
          <Text style={TYPOGRAPHY.h2}>Your Streaks</Text>
          <TouchableOpacity onPress={() => router.push('/(tabs)/profile')}>
            <Text style={styles.seeAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.streaksContainer}>
          <View style={styles.streakCard}>
            <View style={[styles.streakIcon, { backgroundColor: '#FFF4ED' }]}><Feather name="zap" size={18} color={COLORS.statusOrange} /></View>
            <Text style={styles.streakNumber}>12</Text><Text style={styles.streakLabel}>Focus{'\n'}days</Text>
          </View>
          <View style={styles.streakCard}>
            <View style={[styles.streakIcon, { backgroundColor: '#EEECFF' }]}><Feather name="moon" size={18} color={COLORS.primary} /></View>
            <Text style={styles.streakNumber}>8</Text><Text style={styles.streakLabel}>Sleep{'\n'}days</Text>
          </View>
          <View style={styles.streakCard}>
            <View style={[styles.streakIcon, { backgroundColor: '#E0F2FE' }]}><Feather name="droplet" size={18} color="#0EA5E9" /></View>
            <Text style={styles.streakNumber}>6</Text><Text style={styles.streakLabel}>Hydration{'\n'}days</Text>
          </View>
        </View>

        {/* 6. AI INSIGHT CARD */}
        <View style={styles.aiInsightCard}>
          <View style={styles.aiInsightIconWrapper}>
            <Text style={{ fontSize: 24 }}>🤖</Text>
          </View>
          <View style={styles.aiInsightTextContainer}>
            <Text style={styles.aiInsightTitle}>AI Insight</Text>
            <Text style={styles.aiInsightBody}>
              Your rest quality improved 12% this week. Great job maintaining your boundaries!
            </Text>
          </View>
          <Feather name="chevron-right" size={20} color={COLORS.textSecondary} />
        </View>

        {/* Spacing untuk menghindari konten tertutup Bottom Navbar absolut */}
        <View style={{ height: 120 }} />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.backgroundAlt,
    paddingTop: Platform.OS === 'android' ? SPACING.lg : 0,
  },
  scrollContent: {
    padding: SPACING.lg,
    paddingBottom: 100,
  },

  // (CATATAN: Styling Header & Wellness Card dibiarkan sama persis seperti sebelumnya)
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.lg },
  headerTextContainer: { flex: 1 },
  headerActions: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm },
  mascotMini: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#EEECFF', justifyContent: 'center', alignItems: 'center' },
  notificationBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: COLORS.surface, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: COLORS.borderLight },
  notificationBadge: { position: 'absolute', top: 10, right: 12, width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.statusRed, borderWidth: 1, borderColor: COLORS.surface },

  wellnessCard: { backgroundColor: COLORS.primary, borderRadius: 24, padding: SPACING.lg, marginBottom: SPACING.md, ...SHADOWS.medium },
  wellnessTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.lg },
  wellnessTextContent: { flex: 1 },
  wellnessLabel: { ...TYPOGRAPHY.caption, color: 'rgba(255,255,255,0.8)', marginBottom: 4 },
  scoreWrapper: { flexDirection: 'row', alignItems: 'baseline', marginBottom: 4 },
  scoreBig: { fontSize: 48, fontWeight: 'bold', color: COLORS.textWhite, lineHeight: 52 },
  scoreSmall: { ...TYPOGRAPHY.bodyMedium, color: 'rgba(255,255,255,0.7)' },
  wellnessMessage: { ...TYPOGRAPHY.caption, color: 'rgba(255,255,255,0.9)', marginBottom: SPACING.md },
  insightBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.15)', alignSelf: 'flex-start', paddingHorizontal: SPACING.md, paddingVertical: 6, borderRadius: BORDER_RADIUS.pill, gap: 4 },
  insightBtnText: { ...TYPOGRAPHY.caption, color: COLORS.textWhite, fontWeight: '600' },
  progressRingContainer: { width: 90, height: 90, justifyContent: 'center', alignItems: 'center' },
  progressRingBase: { position: 'absolute', width: 90, height: 90, borderRadius: 45, borderWidth: 8, borderColor: 'rgba(255,255,255,0.1)' },
  progressRingActive: { position: 'absolute', width: 90, height: 90, borderRadius: 45, borderWidth: 8, borderBottomColor: 'transparent', borderLeftColor: 'transparent', borderTopColor: '#0EA5E9', borderRightColor: '#0EA5E9', transform: [{ rotate: '45deg' }] },
  progressRingContent: { alignItems: 'center' },
  progressRingPercentage: { fontSize: 20, fontWeight: 'bold', color: COLORS.textWhite },
  progressRingStatus: { fontSize: 10, color: '#0EA5E9', fontWeight: '600' },
  metricsContainer: { flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.15)', paddingTop: SPACING.md },
  metricItem: { alignItems: 'center' },
  metricValue: { ...TYPOGRAPHY.bodyMedium, color: COLORS.textWhite, fontWeight: '700', marginTop: 4 },
  metricLabel: { fontSize: 10, color: 'rgba(255,255,255,0.7)' },

  /* --- STYLING KALENDER MINGGUAN --- */
  calendarContainer: {
    marginBottom: SPACING.lg,
  },
  calendarScroll: {
    paddingVertical: SPACING.xs,
    gap: SPACING.sm, // Jarak antar kartu tanggal
  },
  calendarDayCard: {
    width: 52,
    height: 70,
    borderRadius: BORDER_RADIUS.card,
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.borderLight,
  },
  calendarDayCardActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
    ...SHADOWS.medium,
  },
  calendarDayText: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  calendarDateText: {
    ...TYPOGRAPHY.h3,
    color: COLORS.textPrimary,
  },
  calendarTextActive: {
    color: COLORS.textWhite,
  },
  calendarEventDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.textWhite,
    marginTop: 4,
  },

  // (CATATAN: Styling sisa komponen di bawah dibiarkan sama)
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: SPACING.md },
  seeAllText: { ...TYPOGRAPHY.caption, color: COLORS.primary, fontWeight: '600' },
  planCard: { backgroundColor: COLORS.surface, borderRadius: BORDER_RADIUS.card, padding: SPACING.md, flexDirection: 'row', alignItems: 'center', marginBottom: SPACING.sm, borderWidth: 1, borderColor: COLORS.borderLight },
  planIconWrapper: { width: 48, height: 48, borderRadius: 24, justifyContent: 'center', alignItems: 'center', marginRight: SPACING.md },
  planContent: { flex: 1 },
  progressBarContainer: { width: 60, alignItems: 'flex-end' },
  progressPercentText: { ...TYPOGRAPHY.caption, color: COLORS.textPrimary, fontWeight: '600', marginBottom: 4 },
  progressBarBg: { width: '100%', height: 6, backgroundColor: COLORS.borderLight, borderRadius: 3, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: COLORS.primary, borderRadius: 3 },

  streaksContainer: { flexDirection: 'row', justifyContent: 'space-between', gap: SPACING.sm, marginBottom: SPACING.xl },
  streakCard: { flex: 1, backgroundColor: COLORS.surface, borderRadius: BORDER_RADIUS.card, padding: SPACING.md, borderWidth: 1, borderColor: COLORS.borderLight },
  streakIcon: { width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.md },
  streakNumber: { ...TYPOGRAPHY.h2, marginBottom: 2 },
  streakLabel: { fontSize: 11, color: COLORS.textSecondary, lineHeight: 14 },

  aiInsightCard: { backgroundColor: COLORS.surface, borderRadius: BORDER_RADIUS.card, padding: SPACING.md, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: COLORS.borderLight, ...SHADOWS.soft },
  aiInsightIconWrapper: { marginRight: SPACING.md },
  aiInsightTextContainer: { flex: 1, paddingRight: SPACING.md },
  aiInsightTitle: { ...TYPOGRAPHY.bodyMedium, color: COLORS.textPrimary, fontWeight: '700', marginBottom: 2 },
  aiInsightBody: { ...TYPOGRAPHY.caption, lineHeight: 18 },
});