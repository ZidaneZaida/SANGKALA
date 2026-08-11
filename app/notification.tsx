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

export default function NotificationScreen() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'All' | 'AI Insights'>('All');

    return (
        <SafeAreaView style={styles.safeArea}>

            {/* HEADER */}
            <View style={styles.header}>
                <View style={styles.headerTitleContainer}>
                    {/* Tombol Back agar user bisa kembali ke Dashboard */}
                    <TouchableOpacity onPress={() => router.replace('/(tabs)')} style={styles.backButton}>
                        <Feather name="arrow-left" size={24} color={COLORS.textPrimary} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Notifications</Text>
                </View>
                <TouchableOpacity style={styles.filterButton}>
                    <Feather name="filter" size={18} color={COLORS.textPrimary} />
                </TouchableOpacity>
            </View>

            {/* SEGMENTED TABS */}
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'All' && styles.activeTab]}
                    onPress={() => setActiveTab('All')}
                >
                    <Text style={[styles.tabText, activeTab === 'All' && styles.activeTabText]}>
                        All
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'AI Insights' && styles.activeTab]}
                    onPress={() => setActiveTab('AI Insights')}
                >
                    <Text style={[styles.tabText, activeTab === 'AI Insights' && styles.activeTabText]}>
                        AI Insights
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >

                {/* CARD 1: STRESS SPIKE (Hanya tampil di tab 'All') */}
                {activeTab === 'All' && (
                    <TouchableOpacity style={[styles.card, styles.alertCard]} activeOpacity={0.9}>
                        <View style={styles.alertBlob} />
                        <View style={styles.cardHeader}>
                            <View style={[styles.iconWrapper, { backgroundColor: '#FEE2E2' }]}>
                                <Feather name="heart" size={20} color={COLORS.statusRed} />
                            </View>
                            <View style={styles.cardTitleContent}>
                                <Text style={styles.cardTitle}>Stress Spike Detected</Text>
                                <Text style={styles.cardTime}>Just now</Text>
                            </View>
                            <TouchableOpacity>
                                <Feather name="more-horizontal" size={20} color={COLORS.textSecondary} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.cardBody}>
                            Try a 2-min breathing exercise to recenter yourself.
                        </Text>
                        <TouchableOpacity style={styles.actionButton}>
                            <Feather name="wind" size={14} color={COLORS.statusRed} style={{ marginRight: 6 }} />
                            <Text style={styles.actionButtonText}>Start Exercise</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}

                {/* CARD 2: AI INSIGHT (Tampil di tab 'All' DAN 'AI Insights') */}
                {(activeTab === 'All' || activeTab === 'AI Insights') && (
                    <TouchableOpacity style={styles.card} activeOpacity={0.9}>
                        <View style={styles.cardHeader}>
                            <View style={[styles.iconWrapper, { backgroundColor: '#EEECFF' }]}>
                                <Text style={{ fontSize: 18 }}>🤖</Text>
                                <View style={styles.unreadDot} />
                            </View>
                            <View style={styles.cardTitleContent}>
                                <Text style={styles.cardTitle}>Time for a screen break</Text>
                                <Text style={styles.cardTime}>10m ago</Text>
                            </View>
                        </View>
                        <Text style={styles.cardBody}>
                            <Text style={{ fontWeight: '600', color: COLORS.textPrimary }}>AI Insight: </Text>
                            You've been focusing for 90 minutes. A quick stretch will...
                        </Text>
                    </TouchableOpacity>
                )}

                {/* CARD 3 & 4 (Hanya tampil di tab 'All') */}
                {activeTab === 'All' && (
                    <>
                        {/* ROUTINE REMINDER */}
                        <TouchableOpacity style={styles.card} activeOpacity={0.9}>
                            <View style={styles.cardHeader}>
                                <View style={[styles.iconWrapper, { backgroundColor: '#E0F2FE' }]}>
                                    <Feather name="droplet" size={20} color="#0EA5E9" />
                                </View>
                                <View style={styles.cardTitleContent}>
                                    <Text style={styles.cardTitle}>Drink water reminder</Text>
                                    <Text style={styles.cardTime}>2h ago</Text>
                                </View>
                            </View>
                            <Text style={styles.cardBody}>
                                Stay hydrated to keep your energy levels steady throughout your study...
                            </Text>
                        </TouchableOpacity>

                        {/* ANALYTICS REPORT */}
                        <TouchableOpacity style={styles.card} activeOpacity={0.9}>
                            <View style={styles.cardHeader}>
                                <View style={[styles.iconWrapper, { backgroundColor: '#F3E8FF' }]}>
                                    <Feather name="bar-chart-2" size={20} color="#9333EA" />
                                </View>
                                <View style={styles.cardTitleContent}>
                                    <Text style={styles.cardTitle}>Weekly Wellness Report</Text>
                                    <Text style={styles.cardTime}>Yesterday</Text>
                                </View>
                            </View>
                            <Text style={styles.cardBody}>
                                Your sleep score improved by 15% this week. Tap to view your full...
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