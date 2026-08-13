import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, BorderRadius, Shadows } from '@/constants/theme';
import Mascot from '@/components/Mascot';

const { width } = Dimensions.get('window');

export default function LandingPage() {
    const router = useRouter();

    const handleStart = () => {
        // Navigate to onboarding screen
        router.push('/onboarding');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

            {/* Background Decorative Soft Circles */}
            <View style={[styles.decorCircle, styles.decorTopLeft]} />
            <View style={[styles.decorCircle, styles.decorTopRight]} />
            <View style={[styles.decorCircle, styles.decorBottomLeft]} />
            <View style={[styles.decorCircle, styles.decorBottomRight]} />

            <View style={styles.contentContainer}>
                {/* Mascot & Graphic Hero Section */}
                <View style={styles.heroSection}>
                    <View style={styles.mascotWrapper}>
                        {/* Soft backdrop halo */}
                        <View style={styles.mascotHalo} />

                        {/* Mascot Icon Container */}
                        <View style={styles.mascotCard}>
                            <Mascot size={88} variant={1} />
                            <View style={styles.badgeD}>
                                <Text style={styles.badgeDText}>D</Text>
                            </View>
                        </View>

                        {/* Floating Decoration Icons */}
                        <View style={[styles.floatingBadge, styles.badgeLeft]}>
                            <Ionicons name="checkbox" size={24} color="#818CF8" />
                        </View>
                        <View style={[styles.floatingBadge, styles.badgeRight]}>
                            <Ionicons name="megaphone-outline" size={24} color="#A78BFA" />
                        </View>
                        <View style={[styles.floatingBadge, styles.badgeRightBottom]}>
                            <MaterialCommunityIcons name="clipboard-check-outline" size={24} color="#818CF8" />
                        </View>
                    </View>
                </View>

                {/* Text Section */}
                <View style={styles.textSection}>
                    <Text style={styles.headline}>
                        Manage Your Time With Smart and Free From{' '}
                        <Text style={styles.highlightText}>Burnout</Text>
                    </Text>
                </View>

                {/* Action Button Section */}
                <View style={styles.actionSection}>
                    <TouchableOpacity
                        style={styles.startButton}
                        onPress={handleStart}
                        activeOpacity={0.85}
                    >
                        <Text style={styles.startButtonText}>Let's Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        position: 'relative',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 28,
        paddingVertical: 36,
    },

    // Decorative Background Circles
    decorCircle: {
        position: 'absolute',
        borderRadius: 999,
        backgroundColor: '#EAE8FF',
        opacity: 0.65,
    },
    decorTopLeft: {
        width: 220,
        height: 220,
        top: -60,
        left: -70,
    },
    decorTopRight: {
        width: 200,
        height: 200,
        top: -40,
        right: -60,
    },
    decorBottomLeft: {
        width: 240,
        height: 240,
        bottom: -80,
        left: -80,
    },
    decorBottomRight: {
        width: 220,
        height: 220,
        bottom: -70,
        right: -70,
    },

    // Hero Mascot Section
    heroSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    mascotWrapper: {
        width: width * 0.75,
        height: width * 0.75,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    mascotHalo: {
        position: 'absolute',
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: '#F3F0FF',
    },
    mascotCard: {
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: Colors.cardSurface,
        alignItems: 'center',
        justifyContent: 'center',
        ...Shadows.medium,
        position: 'relative',
    },
    badgeD: {
        position: 'absolute',
        bottom: 24,
        backgroundColor: '#6B66FF',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 12,
    },
    badgeDText: {
        color: Colors.textWhite,
        fontWeight: '700',
        fontSize: 14,
    },

    // Floating Decoration Badges
    floatingBadge: {
        position: 'absolute',
        backgroundColor: Colors.cardSurface,
        borderRadius: 16,
        padding: 10,
        ...Shadows.soft,
    },
    badgeLeft: {
        top: 40,
        left: 20,
    },
    badgeRight: {
        top: 50,
        right: 20,
    },
    badgeRightBottom: {
        bottom: 40,
        right: 25,
    },

    // Text Section
    textSection: {
        marginBottom: 24,
        paddingHorizontal: 12,
    },
    headline: {
        fontSize: 22,
        lineHeight: 32,
        fontWeight: '700',
        color: Colors.textPrimary,
        textAlign: 'center',
    },
    highlightText: {
        color: Colors.primary,
        fontWeight: '800',
    },

    // Action Button Section
    actionSection: {
        width: '100%',
        marginBottom: 20,
    },
    startButton: {
        width: '100%',
        height: 54,
        backgroundColor: Colors.primary,
        borderRadius: BorderRadius.pill,
        alignItems: 'center',
        justifyContent: 'center',
        ...Shadows.medium,
    },
    startButtonText: {
        color: Colors.textWhite,
        fontSize: 16,
        fontWeight: '700',
    },
});
