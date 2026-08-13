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
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { COLORS, TYPOGRAPHY, BORDER_RADIUS, SPACING, SHADOWS } from '../constants/theme';
import Mascot from '../components/Mascot';

export default function NotificationScreen() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'Semua' | 'Wawasan AI'>('Semua');

    return (
        <SafeAreaView style={styles.safeArea}>

            {/* HEADER */}
            <View style={styles.header}>
                <View style={styles.headerTitleContainer}>
                    {/* Tombol Back agar user bisa kembali ke Dashboard */}
                    <TouchableOpacity onPress={() => router.replace('/(tabs)')} style={styles.backButton}>
                        <Feather name="arrow-left" size={24} color={COLORS.textPrimary} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Notifikasi</Text>
                </View>
                <TouchableOpacity style={styles.filterButton}>
                    <Feather name="filter" size={18} color={COLORS.textPrimary} />
                </TouchableOpacity>
            </View>

            {/* SEGMENTED TABS */}
            <View style={styles.tabContainer}>
                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'Semua' && styles.activeTab]}
                        onPress={() => setActiveTab('Semua')}
                    >
                    <Text style={[styles.tabText, activeTab === 'Semua' && styles.activeTabText]}>
                        Semua
                    </Text>
                </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'Wawasan AI' && styles.activeTab]}
                        onPress={() => setActiveTab('Wawasan AI')}
                    >
                    <Text style={[styles.tabText, activeTab === 'Wawasan AI' && styles.activeTabText]}>
                        Wawasan AI
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >

                {/* CARD 1: STRESS SPIKE (Hanya tampil di tab 'Semua') */}
                {activeTab === 'Semua' && (
                    <TouchableOpacity style={[styles.card, styles.alertCard]} activeOpacity={0.9}>
                        <View style={styles.alertBlob} />
                        <View style={styles.cardHeader}>
                            <View style={[styles.iconWrapper, { backgroundColor: '#FEE2E2' }]}>
                                <Feather name="heart" size={20} color={COLORS.statusRed} />
                            </View>
                            <View style={styles.cardTitleContent}>
                                <Text style={styles.cardTitle}>Gangguan Stres Terdeteksi</Text>
                                <Text style={styles.cardTime}>Baru saja</Text>
                            </View>
                            <TouchableOpacity>
                                <Feather name="more-horizontal" size={20} color={COLORS.textSecondary} />
                            </TouchableOpacity>
                        </View>
                            <Text style={styles.cardBody}>
                                Coba latihan pernapasan 2 menit untuk menenangkan diri.
                            </Text>
                            <TouchableOpacity style={styles.actionButton}>
                                <Feather name="wind" size={14} color={COLORS.statusRed} style={{ marginRight: 6 }} />
                                <Text style={styles.actionButtonText}>Mulai Latihan</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}

                {/* CARD 2: AI INSIGHT (Tampil di tab 'Semua' DAN 'Wawasan AI') */}
                {(activeTab === 'Semua' || activeTab === 'Wawasan AI') && (
                    <TouchableOpacity style={styles.card} activeOpacity={0.9}>
                        <View style={styles.cardHeader}>
                            <View style={[styles.iconWrapper, { backgroundColor: '#EEECFF' }]}>
                                <Mascot size={20} variant={3} />
                                <View style={styles.unreadDot} />
                            </View>
                            <View style={styles.cardTitleContent}>
                                <Text style={styles.cardTitle}>Waktunya istirahat dari layar</Text>
                                <Text style={styles.cardTime}>10m yang lalu</Text>
                            </View>
                        </View>
                            <Text style={styles.cardBody}>
                                <Text style={{ fontWeight: '600', color: COLORS.textPrimary }}>Wawasan AI: </Text>
                                Anda sudah fokus selama 90 menit. Coba streching sebentar...
                            </Text>
                    </TouchableOpacity>
                )}

                {/* CARD 3 & 4 (Hanya tampil di tab 'Semua') */}
                {activeTab === 'Semua' && (
                    <>
                        {/* ROUTINE REMINDER */}
                        <TouchableOpacity style={styles.card} activeOpacity={0.9}>
                            <View style={styles.cardHeader}>
                                <View style={[styles.iconWrapper, { backgroundColor: '#E0F2FE' }]}>
                                    <Feather name="droplet" size={20} color="#0EA5E9" />
                                </View>
                                <View style={styles.cardTitleContent}>
                                    <Text style={styles.cardTitle}>Pengingat minum air</Text>
                                    <Text style={styles.cardTime}>2j yang lalu</Text>
                                </View>
                            </View>
                            <Text style={styles.cardBody}>
                                Tetap terhidrasi untuk menjaga energi tetap stabil selama belajar...
                            </Text>
                        </TouchableOpacity>

                        {/* ANALYTICS REPORT */}
                        <TouchableOpacity style={styles.card} activeOpacity={0.9}>
                            <View style={styles.cardHeader}>
                                <View style={[styles.iconWrapper, { backgroundColor: '#F3E8FF' }]}>
                                    <Feather name="bar-chart-2" size={20} color="#9333EA" />
                                </View>
                                <View style={styles.cardTitleContent}>
                                    <Text style={styles.cardTitle}>Laporan Kesejahteraan Mingguan</Text>
                                    <Text style={styles.cardTime}>Kemarin</Text>
                                </View>
                            </View>
                            <Text style={styles.cardBody}>
                                Skor tidur Anda meningkat 15% minggu ini. Ketuk untuk melihat laporan lengkap...
                            </Text>
                        </TouchableOpacity>
                    </>
                )}

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
    headerTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginRight: SPACING.sm,
    },
    headerTitle: {
        ...TYPOGRAPHY.h1,
        fontSize: 24,
    },
    filterButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.surface,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.borderLight,
    },

    /* --- SEGMENTED TABS --- */
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#F1F5F9', // Light Slate
        marginHorizontal: SPACING.lg,
        borderRadius: BORDER_RADIUS.pill,
        padding: 4,
        marginBottom: SPACING.lg,
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: BORDER_RADIUS.pill,
    },
    activeTab: {
        backgroundColor: COLORS.primary,
        ...SHADOWS.soft,
    },
    tabText: {
        ...TYPOGRAPHY.bodyMedium,
        color: COLORS.textSecondary,
        fontWeight: '600',
    },
    activeTabText: {
        color: COLORS.textWhite,
    },

    /* --- SCROLL CONTENT --- */
    scrollContent: {
        paddingHorizontal: SPACING.lg,
        paddingBottom: SPACING.xxl,
        gap: SPACING.md, // Jarak antar kartu
    },

    /* --- NOTIFICATION CARDS --- */
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: 24, // Radius agak besar sesuai wireframe
        padding: SPACING.lg,
        borderWidth: 1,
        borderColor: COLORS.borderLight,
        ...SHADOWS.soft,
        overflow: 'hidden', // Penting agar blob tidak keluar dari card
    },
    alertCard: {
        borderColor: '#FEE2E2', // Light red border
    },
    alertBlob: {
        position: 'absolute',
        top: -30,
        right: -30,
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#FEF2F2', // Soft red background
        opacity: 0.8,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: SPACING.sm,
    },
    iconWrapper: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.md,
    },
    unreadDot: {
        position: 'absolute',
        top: -2,
        right: -2,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        borderWidth: 2,
        borderColor: COLORS.surface,
    },
    cardTitleContent: {
        flex: 1,
        justifyContent: 'center',
    },
    cardTitle: {
        ...TYPOGRAPHY.h3,
        color: COLORS.textPrimary,
        marginBottom: 2,
    },
    cardTime: {
        ...TYPOGRAPHY.caption,
        fontSize: 11,
        color: COLORS.textSecondary,
    },
    cardBody: {
        ...TYPOGRAPHY.bodyRegular,
        color: COLORS.textSecondary,
        lineHeight: 20,
        marginBottom: SPACING.sm,
    },

    /* --- ACTION BUTTON (Khusus Card 1) --- */
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: '#FEE2E2',
        paddingHorizontal: SPACING.md,
        paddingVertical: 8,
        borderRadius: BORDER_RADIUS.pill,
        marginTop: SPACING.xs,
    },
    actionButtonText: {
        ...TYPOGRAPHY.caption,
        color: COLORS.statusRed,
        fontWeight: '700',
    },
});