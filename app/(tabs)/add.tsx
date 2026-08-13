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
  Switch,
  Modal,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { COLORS, TYPOGRAPHY, BORDER_RADIUS, SPACING, SHADOWS } from '../../constants/theme';

export default function AddTaskScreen() {
  const router = useRouter();

  // State Utama Form
  const [title, setTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Study');
  const [selectedImpact, setSelectedImpact] = useState('Medium');
  const [syncCalendar, setSyncCalendar] = useState(true);

  // State Date & Time
  const [taskMonth, setTaskMonth] = useState('Aug');
  const [taskDay, setTaskDay] = useState('12');

  const [startHour, setStartHour] = useState('10');
  const [startMin, setStartMin] = useState('00');
  const [endHour, setEndHour] = useState('11');
  const [endMin, setEndMin] = useState('30');

  const [isDateModalVisible, setDateModalVisible] = useState(false);
  const [isTimeModalVisible, setTimeModalVisible] = useState(false);

  // Data Pilihan
  const categories = [
    { id: 'Belajar', icon: 'book-open', color: COLORS.primary },
    { id: 'Kesehatan', icon: 'heart', color: COLORS.statusGreen },
    { id: 'Urusan', icon: 'shopping-bag', color: COLORS.statusOrange },
    { id: 'Kerja', icon: 'briefcase', color: COLORS.textSecondary },
  ];

  const impacts = [
    { id: 'Low', label: 'Ringan', color: COLORS.statusGreen },
    { id: 'Medium', label: 'Sedang', color: COLORS.statusYellow },
    { id: 'High', label: 'Berat', color: COLORS.statusRed },
  ];

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = ['00', '15', '30', '45'];

  // --- KOMPONEN CUSTOM DATE PICKER ---
  const DatePickerModal = () => (
    <Modal visible={isDateModalVisible} transparent animationType="slide" onRequestClose={() => setDateModalVisible(false)}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={TYPOGRAPHY.h2}>Pilih Tanggal</Text>
            <TouchableOpacity onPress={() => setDateModalVisible(false)} style={styles.closeButton}>
              <Feather name="check" size={20} color={COLORS.primary} />
            </TouchableOpacity>
          </View>

          <Text style={styles.pickerSubLabel}>Bulan</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.pickerScrollRow}>
            {months.map(m => (
              <TouchableOpacity
                key={m}
                style={[styles.pickerItem, taskMonth === m && styles.pickerItemActive]}
                onPress={() => setTaskMonth(m)}
              >
                <Text style={[styles.pickerItemText, taskMonth === m && styles.pickerItemTextActive]}>{m}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={styles.pickerSubLabel}>Tanggal</Text>
          <ScrollView style={{ maxHeight: 200 }}>
            <View style={styles.gridContainer}>
              {days.map(d => (
                <TouchableOpacity
                  key={d}
                  style={[styles.gridItem, taskDay === d && styles.gridItemActive]}
                  onPress={() => setTaskDay(d)}
                >
                  <Text style={[styles.gridItemText, taskDay === d && styles.gridItemTextActive]}>{d}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );

  // --- KOMPONEN CUSTOM TIME RANGE PICKER ---
  const TimePickerModal = () => (
    <Modal visible={isTimeModalVisible} transparent animationType="slide" onRequestClose={() => setTimeModalVisible(false)}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={TYPOGRAPHY.h2}>Atur Durasi</Text>
            <TouchableOpacity onPress={() => setTimeModalVisible(false)} style={styles.closeButton}>
              <Feather name="check" size={20} color={COLORS.primary} />
            </TouchableOpacity>
          </View>

          {/* START TIME */}
          <Text style={styles.pickerSubLabel}>Waktu Mulai</Text>
          <View style={styles.timeRow}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.timeScroll}>
              {hours.map(h => (
                <TouchableOpacity key={`startH-${h}`} style={[styles.timeItem, startHour === h && styles.timeItemActive]} onPress={() => setStartHour(h)}>
                  <Text style={[styles.timeItemText, startHour === h && styles.timeItemTextActive]}>{h}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <Text style={styles.timeDivider}>:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.timeScroll}>
              {minutes.map(m => (
                <TouchableOpacity key={`startM-${m}`} style={[styles.timeItem, startMin === m && styles.timeItemActive]} onPress={() => setStartMin(m)}>
                  <Text style={[styles.timeItemText, startMin === m && styles.timeItemTextActive]}>{m}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.dividerLine} />

          {/* END TIME */}
          <Text style={styles.pickerSubLabel}>Waktu Selesai</Text>
          <View style={styles.timeRow}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.timeScroll}>
              {hours.map(h => (
                <TouchableOpacity key={`endH-${h}`} style={[styles.timeItem, endHour === h && styles.timeItemActive]} onPress={() => setEndHour(h)}>
                  <Text style={[styles.timeItemText, endHour === h && styles.timeItemTextActive]}>{h}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <Text style={styles.timeDivider}>:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.timeScroll}>
              {minutes.map(m => (
                <TouchableOpacity key={`endM-${m}`} style={[styles.timeItem, endMin === m && styles.timeItemActive]} onPress={() => setEndMin(m)}>
                  <Text style={[styles.timeItemText, endMin === m && styles.timeItemTextActive]}>{m}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
            <Feather name="x" size={24} color={COLORS.textPrimary} />
          </TouchableOpacity>
          <Text style={TYPOGRAPHY.h2}>Tugas Baru</Text>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">

          {/* TASK TITLE */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Apa yang perlu Anda lakukan?</Text>
            <TextInput
              style={styles.titleInput}
              placeholder="cth., Review Data Science"
              placeholderTextColor={COLORS.textSecondary}
              value={title}
              onChangeText={setTitle}
              multiline
            />
          </View>

          {/* DATE & TIME RANGE BUTTONS */}
          <View style={styles.rowGroup}>
            <View style={[styles.inputGroup, { flex: 1 }]}>
              <Text style={styles.inputLabel}>Tanggal</Text>
              <TouchableOpacity style={styles.pickerButton} onPress={() => setDateModalVisible(true)}>
                <Feather name="calendar" size={18} color={COLORS.textSecondary} style={{ marginRight: 8 }} />
                <Text style={styles.pickerText}>{`${taskMonth} ${taskDay}`}</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.inputGroup, { flex: 1.2 }]}>
              <Text style={styles.inputLabel}>Durasi</Text>
              <TouchableOpacity style={styles.pickerButton} onPress={() => setTimeModalVisible(true)}>
                <Feather name="clock" size={18} color={COLORS.textSecondary} style={{ marginRight: 8 }} />
                <Text style={styles.pickerText} numberOfLines={1}>{`${startHour}:${startMin} - ${endHour}:${endMin}`}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* CATEGORY */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Kategori</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: SPACING.sm }}>
              {categories.map((cat) => (
                <TouchableOpacity
                  key={cat.id}
                  style={[styles.categoryChip, selectedCategory === cat.id && { backgroundColor: cat.color, borderColor: cat.color }]}
                  onPress={() => setSelectedCategory(cat.id)}
                  activeOpacity={0.7}
                >
                  <Feather name={cat.icon} size={16} color={selectedCategory === cat.id ? COLORS.textWhite : cat.color} style={{ marginRight: 6 }} />
                  <Text style={[styles.categoryChipText, selectedCategory === cat.id && { color: COLORS.textWhite }]}>{cat.id}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* BURNOUT IMPACT */}
          <View style={styles.inputGroup}>
            <View style={styles.labelRow}>
              <Text style={styles.inputLabel}>Beban Perkiraan (Dampak)</Text>
              <Feather name="info" size={14} color={COLORS.textSecondary} />
            </View>
            <View style={styles.impactContainer}>
              {impacts.map((impact) => (
                <TouchableOpacity
                  key={impact.id}
                  style={[styles.impactCard, selectedImpact === impact.id && { borderColor: impact.color, backgroundColor: `${impact.color}10` }]}
                  onPress={() => setSelectedImpact(impact.id)}
                  activeOpacity={0.7}
                >
                  <View style={[styles.impactDot, { backgroundColor: impact.color }]} />
                  <Text style={[styles.impactText, selectedImpact === impact.id && { fontWeight: '700', color: COLORS.textPrimary }]}>
                    {impact.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* GOOGLE CALENDAR SYNC */}
          <View style={styles.syncCard}>
            <View style={styles.syncContent}>
              <View style={[styles.syncIconWrapper, { backgroundColor: '#E0F2FE' }]}><Feather name="calendar" size={18} color="#0EA5E9" /></View>
              <View>
                <Text style={TYPOGRAPHY.bodyMedium}>Sinkron ke Google Calendar</Text>
                <Text style={styles.syncSubtitle}>Add to "Kuliah & Tugas"</Text>
              </View>
            </View>
            <Switch
              trackColor={{ false: COLORS.borderLight, true: COLORS.primary }}
              thumbColor={COLORS.surface}
              ios_backgroundColor={COLORS.borderLight}
              onValueChange={setSyncCalendar}
              value={syncCalendar}
            />
          </View>

          <View style={{ height: 120 }} />
        </ScrollView>

        {/* FLOATING CREATE BUTTON */}
        <View style={styles.floatingFooter}>
          <TouchableOpacity
            style={[styles.createButton, !title && { opacity: 0.5 }]}
            disabled={!title}
            onPress={() => router.replace('/(tabs)')}
          >
            <Text style={styles.createButtonText}>Buat Tugas</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>

      <DatePickerModal />
      <TimePickerModal />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.background },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: SPACING.lg, paddingVertical: SPACING.md, borderBottomWidth: 1, borderBottomColor: COLORS.borderLight, backgroundColor: COLORS.surface },
  iconButton: { width: 40, height: 40, justifyContent: 'center', alignItems: 'flex-start' },
  scrollContent: { padding: SPACING.lg },

  inputGroup: { marginBottom: SPACING.xl },
  rowGroup: { flexDirection: 'row', gap: SPACING.md },
  inputLabel: { ...TYPOGRAPHY.bodyMedium, color: COLORS.textPrimary, fontWeight: '700', marginBottom: SPACING.sm },
  labelRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: SPACING.sm },
  titleInput: { ...TYPOGRAPHY.h2, color: COLORS.textPrimary, minHeight: 60, borderBottomWidth: 2, borderBottomColor: COLORS.borderLight, paddingVertical: SPACING.sm },

  pickerButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.backgroundAlt, borderWidth: 1, borderColor: COLORS.borderLight, borderRadius: BORDER_RADIUS.input, height: 52, paddingHorizontal: SPACING.md },
  pickerText: { ...TYPOGRAPHY.bodyMedium, color: COLORS.textPrimary, flex: 1 },

  categoryChip: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.surface, borderWidth: 1.5, borderColor: COLORS.borderLight, paddingHorizontal: SPACING.md, paddingVertical: 10, borderRadius: BORDER_RADIUS.pill },
  categoryChipText: { ...TYPOGRAPHY.bodyMedium, color: COLORS.textSecondary, fontWeight: '600' },

  impactContainer: { flexDirection: 'row', gap: SPACING.sm },
  impactCard: { flex: 1, alignItems: 'center', paddingVertical: SPACING.md, backgroundColor: COLORS.surface, borderWidth: 1.5, borderColor: COLORS.borderLight, borderRadius: BORDER_RADIUS.card },
  impactDot: { width: 12, height: 12, borderRadius: 6, marginBottom: SPACING.xs },
  impactText: { ...TYPOGRAPHY.caption, color: COLORS.textSecondary },

  syncCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: COLORS.surface, padding: SPACING.md, borderRadius: BORDER_RADIUS.card, borderWidth: 1, borderColor: COLORS.borderLight, ...SHADOWS.soft },
  syncContent: { flexDirection: 'row', alignItems: 'center' },
  syncIconWrapper: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginRight: SPACING.md },
  syncSubtitle: { fontSize: 12, color: COLORS.textSecondary, marginTop: 2 },

  floatingFooter: { position: 'absolute', bottom: Platform.OS === 'ios' ? 90 : 80, left: 0, right: 0, paddingHorizontal: SPACING.lg, paddingVertical: SPACING.md, backgroundColor: 'rgba(255, 255, 255, 0.9)' },
  createButton: { backgroundColor: COLORS.primary, height: 56, borderRadius: BORDER_RADIUS.pill, justifyContent: 'center', alignItems: 'center', ...SHADOWS.medium },
  createButtonText: { ...TYPOGRAPHY.h3, color: COLORS.textWhite },

  /* MODAL STYLES */
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: COLORS.surface, borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: SPACING.lg, paddingBottom: SPACING.xxl, ...SHADOWS.medium },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.lg },
  closeButton: { padding: 8, backgroundColor: '#EEECFF', borderRadius: 16 },

  pickerSubLabel: { ...TYPOGRAPHY.caption, fontWeight: '700', color: COLORS.textSecondary, marginBottom: SPACING.sm, marginTop: SPACING.sm },
  pickerScrollRow: { gap: SPACING.sm, paddingBottom: SPACING.md },
  pickerItem: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: BORDER_RADIUS.pill, backgroundColor: COLORS.backgroundAlt, borderWidth: 1, borderColor: COLORS.borderLight },
  pickerItemActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  pickerItemText: { ...TYPOGRAPHY.bodyMedium, color: COLORS.textPrimary },
  pickerItemTextActive: { color: COLORS.textWhite, fontWeight: '700' },

  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, justifyContent: 'space-between' },
  gridItem: { width: '12%', aspectRatio: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 8, backgroundColor: COLORS.backgroundAlt },
  gridItemActive: { backgroundColor: COLORS.primary },
  gridItemText: { ...TYPOGRAPHY.bodyMedium, color: COLORS.textPrimary },
  gridItemTextActive: { color: COLORS.textWhite, fontWeight: '700' },

  timeRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: SPACING.md },
  timeScroll: { gap: 8 },
  timeItem: { paddingHorizontal: 16, paddingVertical: 12, borderRadius: 12, backgroundColor: COLORS.backgroundAlt, borderWidth: 1, borderColor: COLORS.borderLight },
  timeItemActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  timeItemText: { ...TYPOGRAPHY.h3, color: COLORS.textPrimary },
  timeItemTextActive: { color: COLORS.textWhite },
  timeDivider: { ...TYPOGRAPHY.h2, marginHorizontal: SPACING.sm, color: COLORS.textSecondary },
  dividerLine: { height: 1, backgroundColor: COLORS.borderLight, marginVertical: SPACING.md },
});