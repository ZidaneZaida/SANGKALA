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

export default function LoginScreen() {
    const router = useRouter();

    // State untuk form
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // State untuk toggle UI
    const [showPassword, setShowPassword] = useState(false);

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
                        <Text style={TYPOGRAPHY.h1}>Welcome Back !</Text>
                        <Text style={[TYPOGRAPHY.bodyRegular, styles.subtitle]}>
                            Keep managing your daily tasks{'\n'}
                            with AI without the <Text style={styles.highlightText}>worry</Text> or <Text style={styles.highlightText}>fatigue</Text>
                        </Text>
                    </View>

                    {/* Mascot Robot 'D' */}
                    <View style={styles.illustrationPlaceholder}>
                        <Mascot size={100} variant={2} />
                    </View>
                </View>

                {/* FORM SECTION */}
                <View style={styles.formContainer}>

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

                    {/* Forgot Password Link */}
                    <View style={styles.forgotPasswordContainer}>
                        <TouchableOpacity>
                            <Text style={styles.forgotPasswordText}>Lupa Password ?</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Login Button */}
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => {
                            // Navigasi ke Dashboard (Main App) setelah login sukses
                            router.replace('/(tabs)');
                        }}
                    >
                        <Text style={styles.primaryButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>

                {/* DIVIDER */}
                <View style={styles.dividerContainer}>
                    <View style={styles.dividerLine} />
                    <Text style={[TYPOGRAPHY.caption, styles.dividerText]}>or continue with</Text>
                    <View style={styles.dividerLine} />
                </View>

                {/* SOCIAL LOGIN */}
                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialButton}>
                        {/* Menggunakan text placeholder ikon untuk sementara */}
                        <Text style={styles.socialIconTextGoogle}>G</Text>
                        <Text style={TYPOGRAPHY.bodyMedium}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Feather name="facebook" size={20} color="#1877F2" style={{ marginRight: SPACING.sm }} />
                        <Text style={TYPOGRAPHY.bodyMedium}>Facebook</Text>
                    </TouchableOpacity>
                </View>

                {/* FOOTER */}
                <View style={styles.footerContainer}>
                    <Text style={TYPOGRAPHY.bodyRegular}>Dont have account ? </Text>
                    <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
                        <Text style={styles.linkTextFooter}>Register</Text>
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
        paddingTop: SPACING.xxl * 2, // Padding tambahan untuk memberikan ruang proporsional
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
        width: 120,
        height: 120,
        backgroundColor: COLORS.accentGradientStart,
        borderRadius: 40,
        borderTopRightRadius: 60,
        borderBottomLeftRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mascotText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: COLORS.primary,
        opacity: 0.8,
    },
    formContainer: {
        gap: SPACING.md,
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
    forgotPasswordContainer: {
        alignItems: 'flex-end',
        marginTop: -SPACING.xs,
        marginBottom: SPACING.xs,
    },
    forgotPasswordText: {
        ...TYPOGRAPHY.caption,
        fontWeight: '600',
        color: COLORS.primary,
    },
    primaryButton: {
        backgroundColor: COLORS.primary,
        borderRadius: BORDER_RADIUS.pill,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SPACING.xs,
        // Soft shadow
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
    socialIconTextGoogle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#DB4437',
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