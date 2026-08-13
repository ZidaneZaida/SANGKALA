import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Platform,
  Switch,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { COLORS, TYPOGRAPHY, BORDER_RADIUS, SPACING, SHADOWS } from '../../constants/theme';

export default function ProfileScreen() {
  // State sederhana untuk simulasi toggle pengaturan
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(true);
  const [isDarkMode, setIsDarkMode] = React.useState(false); // Meskipun MVP kita Light Mode, toggle ini bagus untuk UI

  // Komponen Helper untuk merender baris menu pengaturan
  const SettingItem = ({
    icon,
    title,
    subtitle,
    value,
    hasSwitch,
    switchValue,
    onToggle,
    isDestructive
  }: any) => (
    <TouchableOpacity
      style={styles.settingItem}
      activeOpacity={hasSwitch ? 1 : 0.7}
      onPress={hasSwitch ? undefined : () => { }}
    >
      <View style={[styles.settingIconWrapper, isDestructive && { backgroundColor: '#FEE2E2' }]}>
        <Feather name={icon} size={20} color={isDestructive ? COLORS.statusRed : COLORS.primary} />
      </View>
      <View style={styles.settingTextContainer}>
        <Text style={[styles.settingTitle, isDestructive && { color: COLORS.statusRed }]}>
          {title}
        </Text>
        {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
      </View>

      {hasSwitch ? (
        <Switch
          trackColor={{ false: COLORS.borderLight, true: COLORS.primary }}
          thumbColor={COLORS.surface}
          ios_backgroundColor={COLORS.borderLight}
          onValueChange={onToggle}
          value={switchValue}
        />
      ) : value ? (
        <View style={styles.settingValueContainer}>
          <Text style={styles.settingValue}>{value}</Text>
          <Feather name="chevron-right" size={20} color={COLORS.textSecondary} />
        </View>
      ) : (
        <Feather name="chevron-right" size={20} color={COLORS.textSecondary} />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>

      {/* 1. HEADER */}
      <View style={styles.header}>
        <Text style={TYPOGRAPHY.h1}>Profil</Text>
        <TouchableOpacity style={styles.editButton}>
          <Feather name="edit-2" size={18} color={COLORS.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* 2. USER INFO SECTION */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>U</Text>
            </View>
            <TouchableOpacity style={styles.cameraBadge}>
              <Feather name="camera" size={14} color={COLORS.textWhite} />
            </TouchableOpacity>
          </View>

          <Text style={styles.userName}>Umi Profesional</Text>
          <Text style={styles.userBio}>Data Science Student • Padang, Indonesia</Text>

          <View style={styles.badgeContainer}>
            <View style={styles.proBadge}>
              <Text style={styles.proBadgeText}>PRO</Text>
            </View>
          </View>
        </View>

        {/* 3. WELLNESS STATS SUMMARY */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>82</Text>
            <Text style={styles.statLabel}>Rata-rata Skor</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Rentetan Hari</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>145</Text>
            <Text style={styles.statLabel}>Tugas Selesai</Text>
          </View>
        </View>

        {/* 4. SETTINGS SECTION: Account & Integrations */}
        <Text style={styles.sectionTitle}>Akun & Integrasi</Text>
        <View style={styles.settingsGroup}>
          <SettingItem
            icon="user"
            title="Informasi Pribadi"
            subtitle="Nama, Email, Telepon"
          />
          <View style={styles.divider} />
          <SettingItem
            icon="calendar"
            title="Kalender Terhubung"
            value="Google"
          />
          <View style={styles.divider} />
          <SettingItem
            icon="activity"
            title="Baseline Asesmen Burnout"
            subtitle="Ulangi tes onboarding MBI"
          />
        </View>

        {/* 5. SETTINGS SECTION: Preferences */}
        <Text style={styles.sectionTitle}>Preferensi</Text>
        <View style={styles.settingsGroup}>
          <SettingItem
            icon="bell"
            title="Notifikasi Push"
            hasSwitch={true}
            switchValue={isNotificationsEnabled}
            onToggle={() => setIsNotificationsEnabled(!isNotificationsEnabled)}
          />
          <View style={styles.divider} />
          <SettingItem
            icon="moon"
            title="Mode Gelap"
            hasSwitch={true}
            switchValue={isDarkMode}
            onToggle={() => setIsDarkMode(!isDarkMode)}
          />
        </View>

        {/* 6. SETTINGS SECTION: Support & Logout */}
        <Text style={styles.sectionTitle}>Dukungan</Text>
        <View style={styles.settingsGroup}>
          <SettingItem icon="help-circle" title="Pusat Bantuan & FAQ" />
          <View style={styles.divider} />
          <SettingItem icon="shield" title="Kebijakan Privasi" />
        </View>

        {/* LOGOUT BUTTON */}
        <TouchableOpacity style={styles.logoutButton}>
          <Feather name="log-out" size={20} color={COLORS.statusRed} style={{ marginRight: SPACING.sm }} />
          <Text style={styles.logoutText}>Keluar</Text>
        </TouchableOpacity>

        {/* App Version */}
        <Text style={styles.versionText}>SANGKALA Version 1.0.0 (MVP)</Text>

        {/* Spacing untuk menghindari konten tertutup Bottom Navbar */}
        <View style={{ height: 100 }} />

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

  /* --- HEADER --- */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.md,
  },
  editButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.borderLight,
  },

  scrollContent: {
    paddingHorizontal: SPACING.lg,
  },

  /* --- PROFILE INFO --- */
  profileCard: {
    alignItems: 'center',
    marginTop: SPACING.md,
    marginBottom: SPACING.lg,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: SPACING.md,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#EEECFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: COLORS.surface,
    ...SHADOWS.medium,
  },
  avatarText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  cameraBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: COLORS.backgroundAlt,
  },
  userName: {
    ...TYPOGRAPHY.h2,
    marginBottom: 4,
  },
  userBio: {
    ...TYPOGRAPHY.bodyRegular,
    color: COLORS.textSecondary,
    marginBottom: SPACING.sm,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  proBadge: {
    backgroundColor: 'rgba(84, 82, 246, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.pill,
  },
  proBadgeText: {
    fontSize: 12,
    fontWeight: '800',
    color: COLORS.primary,
    letterSpacing: 1,
  },

  /* --- STATS SUMMARY --- */
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.card,
    paddingVertical: SPACING.md,
    marginBottom: SPACING.xl,
    ...SHADOWS.soft,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    ...TYPOGRAPHY.h2,
    color: COLORS.primary,
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  statDivider: {
    width: 1,
    backgroundColor: COLORS.borderLight,
    marginVertical: SPACING.sm,
  },

  /* --- SETTINGS GROUPS --- */
  sectionTitle: {
    ...TYPOGRAPHY.caption,
    fontWeight: '700',
    color: COLORS.textSecondary,
    textTransform: 'uppercase',
    marginBottom: SPACING.sm,
    marginLeft: SPACING.xs,
  },
  settingsGroup: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.card,
    marginBottom: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    overflow: 'hidden',
    ...SHADOWS.soft,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.md,
  },
  settingIconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#EEECFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  settingTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  settingTitle: {
    ...TYPOGRAPHY.bodyMedium,
    color: COLORS.textPrimary,
  },
  settingSubtitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  settingValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValue: {
    ...TYPOGRAPHY.bodyRegular,
    color: COLORS.textSecondary,
    marginRight: SPACING.xs,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.borderLight,
    marginLeft: 68, // Agar sejajar dengan teks, melewati icon
  },

  /* --- LOGOUT & FOOTER --- */
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEF2F2', // Soft Red Background
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.card,
    marginTop: SPACING.sm,
    marginBottom: SPACING.lg,
    borderWidth: 1,
    borderColor: '#FEE2E2',
  },
  logoutText: {
    ...TYPOGRAPHY.h3,
    color: COLORS.statusRed,
  },
  versionText: {
    textAlign: 'center',
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xxl,
  }
});