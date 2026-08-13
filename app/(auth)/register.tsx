import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { COLORS, TYPOGRAPHY, BORDER_RADIUS, SPACING } from '../../constants/theme';
import Mascot from '../../components/Mascot';

export default function RegisterScreen() {
    const router = useRouter();

    // State untuk form
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // State untuk toggle UI
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(true);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* HEADER SECTION */}
                <View style={styles.headerContainer}>
                    <View style={styles.headerTextContainer}>
                        <Text style={TYPOGRAPHY.h1}>Create{'\n'}Account !</Text>
                        <Text style={[TYPOGRAPHY.bodyRegular, styles.subtitle]}>
                            Start your journey toward healthier,{' '}
                            <Text style={styles.highlightText}>burnout</Text> free productivity.
                        </Text>
                    </View>
                    {/* Mascot ilustrasi 3D */}
                    <View style={styles.illustrationPlaceholder}>
                        <Mascot size={80} variant={3} />
                    </View>
                </View>

                {/* FORM SECTION */}
                <View style={styles.formContainer}>

                    {/* First Name & Last Name Row */}
                    <View style={styles.row}>
                        <View style={[styles.inputContainer, { flex: 1 }]}>
                            <Feather name="user" size={20} color={COLORS.textSecondary} style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="First name"
                                placeholderTextColor={COLORS.textSecondary}
                                value={firstName}
                                onChangeText={setFirstName}
                            />
                        </View>
                        <View style={[styles.inputContainer, { flex: 1 }]}>
                            <Feather name="user" size={20} color={COLORS.textSecondary} style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Last name"
                                placeholderTextColor={COLORS.textSecondary}
                                value={lastName}
                                onChangeText={setLastName}
                            />
                        </View>
                    </View>

                    {/* Email Input */}
                    <View style={styles.inputContainer}>
                        <Feather name="mail" size={20} color={COLORS.textSecondary} style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Email address"
                            placeholderTextColor={COLORS.textSecondary}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    {/* Password Input */}
                    <View style={styles.inputContainer}>
                        <Feather name="lock" size={20} color={COLORS.textSecondary} style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor={COLORS.textSecondary}
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Feather
                                name={showPassword ? "eye" : "eye-off"}
                                size={20}
                                color={COLORS.textSecondary}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Confirm Password Input */}
                    <View style={styles.inputContainer}>
                        <Feather name="lock" size={20} color={COLORS.textSecondary} style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Password" // Sesuai wireframe
                            placeholderTextColor={COLORS.textSecondary}
                            secureTextEntry={!showConfirmPassword}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                            <Feather
                                name={showConfirmPassword ? "eye" : "eye-off"}
                                size={20}
                                color={COLORS.textSecondary}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Terms & Conditions */}
                    <View style={styles.termsContainer}>
                        <TouchableOpacity
                            style={[styles.checkbox, agreeTerms && styles.checkboxActive]}
                            onPress={() => setAgreeTerms(!agreeTerms)}
                        >
                            {agreeTerms && <Feather name="check" size={14} color={COLORS.textWhite} />}
                        </TouchableOpacity>
                        <Text style={[TYPOGRAPHY.caption, { flex: 1 }]}>
                            I agree to the <Text style={styles.linkText}>Terms of Service</Text> and{' '}
                            <Text style={styles.linkText}>Privacy Policy</Text>
                        </Text>
                    </View>

                    {/* Register Button */}
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => {
                            // Navigasi ke Dashboard (Main App) setelah register sukses
                            router.replace('/login');
                        }}
                    >
                        <Text style={styles.primaryButtonText}>Register</Text>
                    </TouchableOpacity>
                </View>

                {/* DIVIDER */}
                <View style={styles.dividerContainer}>
                    <View style={styles.dividerLine} />
                    <Text style={[TYPOGRAPHY.caption, styles.dividerText]}>Or sign up with</Text>
                    <View style={styles.dividerLine} />
                </View>

                {/* SOCIAL LOGIN */}
                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialButton}>
                        {/* Menggunakan text placeholder ikon untuk sementara, bisa diganti dengan SVG Google/Facebook asli */}
                        <Text style={styles.socialIconText}>G</Text>
                        <Text style={TYPOGRAPHY.bodyMedium}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Feather name="facebook" size={20} color="#1877F2" style={{ marginRight: SPACING.sm }} />
                        <Text style={TYPOGRAPHY.bodyMedium}>Facebook</Text>
                    </TouchableOpacity>
                </View>

                {/* FOOTER */}
                <View style={styles.footerContainer}>
                    <Text style={TYPOGRAPHY.bodyRegular}>Have account ? </Text>
                    <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
                        <Text style={styles.linkTextFooter}>Login</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        padding: SPACING.lg,
        paddingTop: SPACING.xxl * 1.5, // Padding tambahan untuk area atas
        paddingBottom: SPACING.xxl,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.xl,
    },
    headerTextContainer: {
        flex: 1,
        paddingRight: SPACING.md,
    },
    subtitle: {
        marginTop: SPACING.sm,
    },
    highlightText: {
        color: COLORS.primary,
        fontWeight: '700',
    },
    illustrationPlaceholder: {
        width: 100,
        height: 100,
        backgroundColor: COLORS.accentGradientStart,
        borderRadius: 24,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        gap: SPACING.md, // Memberi jarak seragam antar input
    },
    row: {
        flexDirection: 'row',
        gap: SPACING.sm,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.inputBorder,
        borderRadius: BORDER_RADIUS.input,
        paddingHorizontal: SPACING.md,
        height: 52,
        backgroundColor: COLORS.surface,
    },
    inputIcon: {
        marginRight: SPACING.sm,
    },
    input: {
        flex: 1,
        ...TYPOGRAPHY.bodyRegular,
        color: COLORS.textPrimary,
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SPACING.xs,
        marginBottom: SPACING.sm,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1.5,
        borderColor: COLORS.primary,
        borderRadius: BORDER_RADIUS.sm,
        marginRight: SPACING.sm,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxActive: {
        backgroundColor: COLORS.primary,
    },
    linkText: {
        color: COLORS.primary,
        fontWeight: '500',
    },
    primaryButton: {
        backgroundColor: COLORS.primary,
        borderRadius: BORDER_RADIUS.pill,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SPACING.xs,
        // Soft shadow berdasarkan theme
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 4,
    },
    primaryButtonText: {
        ...TYPOGRAPHY.h3,
        color: COLORS.textWhite,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: SPACING.xl,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.borderLight,
    },
    dividerText: {
        paddingHorizontal: SPACING.md,
    },
    socialContainer: {
        flexDirection: 'row',
        gap: SPACING.md,
    },
    socialButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 52,
        borderWidth: 1,
        borderColor: COLORS.borderLight,
        borderRadius: BORDER_RADIUS.input,
        backgroundColor: COLORS.surface,
    },
    socialIconText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#DB4437', // Warna Google
        marginRight: SPACING.sm,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SPACING.xl,
    },
    linkTextFooter: {
        ...TYPOGRAPHY.bodyMedium,
        color: COLORS.primary,
    }
});