import React, { useState } from 'react';
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
import { COLORS, TYPOGRAPHY, BORDER_RADIUS, SPACING, SHADOWS } from '../../constants/theme';

export default function TaskScreen() {
  // Mock data untuk tanggal (Minggu ini)
  const [selectedDate, setSelectedDate] = useState(11);
  const calendarDates = [
    { day: 'Sun', date: 9 },
    { day: 'Mon', date: 10 },
    { day: 'Tue', date: 11 }, // Hari ini
    { day: 'Wed', date: 12 },
    { day: 'Thu', date: 13 },
    { day: 'Fri', date: 14 },
    { day: 'Sat', date: 15 },
  ];

  // Mock data jadwal harian menggunakan Timeline View
  const dailyTasks = [
    {
      id: 1,
      time: '09:00',
      period: 'AM',
      title: 'Machine Learning: Supervised Models',
      type: 'Study',
      color: COLORS.primary,
      isCompleted: true,
    },
    {
      id: 2,
      time: '11:30',
      period: 'AM',
      title: 'Mindful Break & Black Coffee',
      type: 'Wellness',
      color: COLORS.statusGreen,
      isCompleted: true,
    },
    {
      id: 3,
      time: '01:00',
      period: 'PM',
      title: 'Digital Signal Processing Report',
      type: 'Assignment',
      color: COLORS.statusOrange,
      isCompleted: false,
    },
    {
      id: 4,
      time: '03:30',
      period: 'PM',
      title: 'Motorcycle Maintenance (Honda Revo)',
      type: 'Errand',
      color: COLORS.textSecondary,
      isCompleted: false,
    },
    {
      id: 5,
      time: '04:30',
      period: 'PM',
      title: 'Commute (100km PP)',
      type: 'Travel',
      color: COLORS.statusYellow,
      isCompleted: false,
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>

      {/* 1. HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={TYPOGRAPHY.h1}>My Schedule</Text>
          <Text style={TYPOGRAPHY.bodyRegular}>August 2026</Text>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="search" size={20} color={COLORS.textPrimary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="calendar" size={20} color={COLORS.textPrimary} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* 2. HORIZONTAL CALENDAR STRIP */}
        <View style={styles.calendarContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.calendarScroll}
          >
            {calendarDates.map((item, index) => {
              const isActive = item.date === selectedDate;
              return (
                <TouchableOpacity
                  key={index}
                  style={[styles.dateCard, isActive && styles.dateCardActive]}
                  onPress={() => setSelectedDate(item.date)}
                  activeOpacity={0.7}
                >
                  <Text style={[styles.dayText, isActive && styles.textActive]}>
                    {item.day}
                  </Text>
                  <View style={[styles.dateNumberWrapper, isActive && styles.dateNumberWrapperActive]}>
                    <Text style={[styles.dateText, isActive && styles.textActive]}>
                      {item.date}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* 3. TIMELINE VIEW SECTION */}
        <View style={styles.timelineHeader}>
          <Text style={TYPOGRAPHY.h2}>Today's Agenda</Text>
          <Text style={[TYPOGRAPHY.bodyMedium, { color: COLORS.primary }]}>5 Tasks</Text>
        </View>

        <View style={styles.timelineContainer}>
          {dailyTasks.map((task, index) => {
            const isLast = index === dailyTasks.length - 1;

            return (
              <View key={task.id} style={styles.timelineRow}>

                {/* Left Column: Time */}
                <View style={styles.timeColumn}>
                  <Text style={styles.timeText}>{task.time}</Text>
                  <Text style={styles.periodText}>{task.period}</Text>
                </View>

                {/* Middle Column: Line & Dot */}
                <View style={styles.lineColumn}>
                  <View style={[styles.dot, { borderColor: task.color, backgroundColor: task.isCompleted ? task.color : COLORS.surface }]} />
                  {/* Jangan render garis di item terakhir */}
                  {!isLast && <View style={styles.verticalLine} />}
                </View>

                {/* Right Column: Task Card */}
                <View style={styles.taskCardColumn}>
                  <TouchableOpacity
                    style={[styles.taskCard, task.isCompleted && styles.taskCardCompleted]}
                    activeOpacity={0.8}
                  >
                    <View style={styles.taskCardHeader}>
                      <View style={[styles.tagContainer, { backgroundColor: `${task.color}15` }]}>
                        <Text style={[styles.tagText, { color: task.color }]}>{task.type}</Text>
                      </View>

                      {/* Checkbox Placeholder */}
                      <View style={[
                        styles.checkbox,
                        task.isCompleted ? { backgroundColor: COLORS.statusGreen, borderColor: COLORS.statusGreen } : {}
                      ]}>
                        {task.isCompleted && <Feather name="check" size={12} color={COLORS.textWhite} />}
                      </View>
                    </View>

                    <Text style={[
                      styles.taskTitle,
                      task.isCompleted && styles.taskTitleCompleted
                    ]}>
                      {task.title}
                    </Text>

                    {/* Additional Metadata / Actions */}
                    <View style={styles.taskFooter}>
                      <TouchableOpacity style={styles.actionIcon}>
                        <Feather name="clock" size={14} color={COLORS.textSecondary} />
                        <Text style={styles.actionText}>Remind</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
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

  /* --- 1. HEADER --- */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.md,
  },
  headerActions: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  iconButton: {
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
    paddingTop: SPACING.sm,
  },

  /* --- 2. CALENDAR STRIP --- */
  calendarContainer: {
    marginBottom: SPACING.xl,
  },
  calendarScroll: {
    paddingHorizontal: SPACING.lg,
    gap: SPACING.sm,
  },
  dateCard: {
    width: 60,
    height: 85,
    borderRadius: 24,
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    ...SHADOWS.soft,
  },
  dateCardActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
    ...SHADOWS.medium,
  },
  dayText: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
    marginBottom: 8,
  },
  dateNumberWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.backgroundAlt,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateNumberWrapperActive: {
    backgroundColor: 'rgba(255,255,255,0.2)', // Efek tembus pandang di atas warna primary
  },
  dateText: {
    ...TYPOGRAPHY.h3,
    color: COLORS.textPrimary,
  },
  textActive: {
    color: COLORS.textWhite,
  },

  /* --- 3. TIMELINE VIEW --- */
  timelineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
  },
  timelineContainer: {
    paddingHorizontal: SPACING.lg,
  },
  timelineRow: {
    flexDirection: 'row',
  },

  // Left Column (Time)
  timeColumn: {
    width: 60,
    alignItems: 'flex-end',
    paddingRight: SPACING.md,
    paddingTop: SPACING.md,
  },
  timeText: {
    ...TYPOGRAPHY.bodyMedium,
    color: COLORS.textPrimary,
    fontWeight: '700',
  },
  periodText: {
    fontSize: 10,
    color: COLORS.textSecondary,
    fontWeight: '600',
  },

  // Middle Column (Line & Dot)
  lineColumn: {
    width: 20,
    alignItems: 'center',
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 3,
    marginTop: SPACING.md + 2,
    zIndex: 1, // Agar dot berada di atas garis
  },
  verticalLine: {
    width: 2,
    flex: 1,
    backgroundColor: COLORS.borderLight,
    marginTop: -5,
    marginBottom: -15, // Menghubungkan ke dot berikutnya
  },

  // Right Column (Task Card)
  taskCardColumn: {
    flex: 1,
    paddingLeft: SPACING.md,
    paddingBottom: SPACING.lg,
  },
  taskCard: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.card,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    ...SHADOWS.soft,
  },
  taskCardCompleted: {
    opacity: 0.7,
    backgroundColor: '#F8FAFC',
  },
  taskCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  tagContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.sm,
  },
  tagText: {
    fontSize: 10,
    fontWeight: '700',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: COLORS.inputBorder,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
    lineHeight: 22,
  },
  taskTitleCompleted: {
    textDecorationLine: 'line-through',
    color: COLORS.textSecondary,
  },
  taskFooter: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: COLORS.borderLight,
    paddingTop: SPACING.sm,
  },
  actionIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  actionText: {
    fontSize: 11,
    color: COLORS.textSecondary,
    fontWeight: '500',
  }
});