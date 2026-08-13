import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, TYPOGRAPHY, BORDER_RADIUS, SPACING } from '../constants/theme';
import Mascot from '../components/Mascot';

// --- DATA PERTANYAAN ONBOARDING ---
// Menggabungkan pertanyaan PRD dengan teks dari wireframe (Step 2)
const ONBOARDING_QUESTIONS = [
    {
        id: 1,
        subtitle: 'Lets Know Yourself Better !',
        title: 'Berapa rata-rata durasi kerja harian Anda?',
        options: [
            { label: '< 6 Jam / Hari', color: COLORS.statusGreen, value: 'low' },
            { label: '6 - 8 Jam / Hari', color: COLORS.statusYellow, value: 'medium' },
            { label: '8 - 10 Jam / Hari', color: COLORS.statusOrange, value: 'high' },
            { label: '> 10 Jam / Hari', color: COLORS.statusRed, value: 'severe' },
        ],
    },
    {
        id: 2,
        subtitle: 'Mari Kenali Diri Anda Lebih Baik !',
        title: 'Bagaimana perasaan Anda tentang beban kerja saat ini?',
        options: [
            { label: 'Teratur dengan Baik', color: COLORS.statusGreen, value: 'low' },
            { label: 'Beban Mulai Menumpuk', color: COLORS.statusYellow, value: 'medium' },
            { label: 'Cukup Kewalahan', color: COLORS.statusOrange, value: 'high' },
            { label: 'Burnout Berat / Kelelahan Berlebihan', color: COLORS.statusRed, value: 'severe' },
        ],
    },
    {
        id: 3,
        subtitle: 'Lets Know Yourself Better !',
        title: 'Bagaimana kebiasaan istirahat Anda saat bekerja?',
        options: [
            { label: 'Setiap 1-2 Jam', color: COLORS.statusGreen, value: 'low' },
            { label: 'Hanya saat makan siang', color: COLORS.statusYellow, value: 'medium' },
            { label: 'Jarang istirahat', color: COLORS.statusOrange, value: 'high' },
            { label: 'Tidak pernah istirahat', color: COLORS.statusRed, value: 'severe' },
        ],
    },
    {
        id: 4,
        subtitle: 'Lets Know Yourself Better !',
        title: 'Seberapa sering Anda bekerja di luar jam normal/akhir pekan?',
        options: [
            { label: 'Tidak Pernah', color: COLORS.statusGreen, value: 'low' },
            { label: 'Jarang', color: COLORS.statusYellow, value: 'medium' },
            { label: 'Kadang-kadang', color: COLORS.statusOrange, value: 'high' },
            { label: 'Selalu', color: COLORS.statusRed, value: 'severe' },
        ],
    },
];

export default function OnboardingScreen() {
    const router = useRouter();

    // State Management untuk flow 1 Halaman
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    // Menyimpan jawaban (bisa dikirim ke backend/Supabase nanti)
    const [answers, setAnswers] = useState<Record<number, string>>({});

    const currentQuestion = ONBOARDING_QUESTIONS[currentStep];
    const progressPercentage = ((currentStep + 1) / ONBOARDING_QUESTIONS.length) * 100;

    const handleSelectOption = (value: string) => {
        setSelectedOption(value);
    };

    const handleNext = () => {
        // Simpan jawaban
        setAnswers(prev => ({ ...prev, [currentQuestion.id]: selectedOption! }));

        if (currentStep < ONBOARDING_QUESTIONS.length - 1) {
            // Pindah ke pertanyaan berikutnya & reset pilihan
            setCurrentStep(currentStep + 1);
            setSelectedOption(null);
        } else {
            // Selesai pertanyaan terakhir, lanjut ke Register/Login
            router.replace('/(auth)/register');
        }
    };

    const handleSkip = () => {
        // Skip onboarding -> lanjut ke Register
        router.replace('/(auth)/register');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                {/* HEADER: Progress Bar & Skip Button */}
                <View style={styles.header}>
                    <View style={styles.progressContainer}>
                        <Text style={TYPOGRAPHY.bodyMedium}>
                            Step {currentStep + 1} of {ONBOARDING_QUESTIONS.length}
                        </Text>
                        <View style={styles.progressBarBackground}>
                            <View
                                style={[
                                    styles.progressBarFill,
                                    { width: `${progressPercentage}%` }
                                ]}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                        <Text style={styles.skipText}>Lewati</Text>
                    </TouchableOpacity>
                </View>

                {/* QUESTION AREA */}
                <View style={styles.questionContainer}>
                    <Text style={[TYPOGRAPHY.bodyMedium, styles.subtitle]}>
                        {currentQuestion.subtitle}
                    </Text>
                    <Text style={[TYPOGRAPHY.h1, styles.title]}>
                        {currentQuestion.title}
                    </Text>
                </View>

                {/* OPTIONS AREA */}
                <View style={styles.optionsContainer}>
                    {currentQuestion.options.map((option, index) => {
                        const isSelected = selectedOption === option.value;

                        return (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.optionButton,
                                    isSelected && styles.optionButtonSelected
                                ]}
                                onPress={() => handleSelectOption(option.value)}
                                activeOpacity={0.7}
                            >
                                <View style={[styles.colorDot, { backgroundColor: option.color }]} />
                                <Text
                                    style={[
                                        styles.optionText,
                                        isSelected && styles.optionTextSelected
                                    ]}
                                >
                                    {option.label}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                {/* NEXT BUTTON (Muncul setelah memilih opsi) */}
                <View style={styles.footer}>
                    {selectedOption ? (
                        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                            <Text style={styles.nextButtonText}>
                                {currentStep === ONBOARDING_QUESTIONS.length - 1 ? 'Selesai' : 'Selanjutnya'}
                            </Text>
                        </TouchableOpacity>
                    ) : (
                        <View style={styles.nextButtonPlaceholder} />
                    )}
                </View>

                {/* MOCKUP BACKGROUND / MASCOT (Absolute Positioning) */}
                <View style={styles.mascotPlaceholder}>
                    <Mascot size={150} variant={1} />
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.backgroundAlt,
        paddingTop: Platform.OS === 'android' ? SPACING.lg : 0,
    },
    container: {
        flex: 1,
        padding: SPACING.lg,
        position: 'relative',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: SPACING.xl,
        zIndex: 10,
    },
    progressContainer: {
        flex: 1,
        marginRight: SPACING.lg,
    },
    progressBarBackground: {
        height: 6,
        backgroundColor: COLORS.borderLight,
        borderRadius: BORDER_RADIUS.pill,
        marginTop: SPACING.xs,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: COLORS.primary,
        borderRadius: BORDER_RADIUS.pill,
    },
    skipButton: {
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.xs,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: BORDER_RADIUS.pill,
    },
    skipText: {
        ...TYPOGRAPHY.caption,
        color: COLORS.primary,
        fontWeight: '600',
    },
    questionContainer: {
        marginBottom: SPACING.xl,
        zIndex: 10,
    },
    subtitle: {
        color: COLORS.textPrimary,
        marginBottom: SPACING.sm,
    },
    title: {
        fontSize: 32, // Sedikit diperbesar sesuai wireframe
        lineHeight: 40,
    },
    optionsContainer: {
        gap: SPACING.md,
        zIndex: 10,
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SPACING.md,
        borderWidth: 1.5,
        borderColor: '#E0E7FF', // Indigo sangat terang
        borderRadius: BORDER_RADIUS.card,
        backgroundColor: COLORS.surface,
    },
    optionButtonSelected: {
        borderColor: COLORS.primary,
        backgroundColor: '#EEECFF', // Latar belakang ungu sangat transparan saat dipilih
    },
    colorDot: {
        width: 24,
        height: 24,
        borderRadius: 12,
        marginRight: SPACING.md,
    },
    optionText: {
        ...TYPOGRAPHY.bodyMedium,
        color: COLORS.primary,
        flex: 1,
    },
    optionTextSelected: {
        fontWeight: '700',
    },
    footer: {
        marginTop: 'auto',
        marginBottom: SPACING.xl,
        zIndex: 10,
    },
    nextButton: {
        backgroundColor: COLORS.primary,
        borderRadius: BORDER_RADIUS.pill,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 4,
    },
    nextButtonText: {
        ...TYPOGRAPHY.h3,
        color: COLORS.textWhite,
    },
    nextButtonPlaceholder: {
        height: 56, // Menjaga ruang agar UI tidak loncat saat tombol Next muncul
    },
    mascotPlaceholder: {
        position: 'absolute',
        bottom: -20,
        right: -20,
        width: 150,
        height: 150,
        backgroundColor: COLORS.accentGradientStart,
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.6,
        zIndex: 1,
    },
});