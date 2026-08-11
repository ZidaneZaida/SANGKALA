export const Colors = {
  primary: '#5452F6',
  primaryGradient: ['#6B66FF', '#5452F6'],
  background: '#FFFFFF',
  backgroundAlt: '#F8F9FE',
  cardSurface: '#FFFFFF',
  textPrimary: '#1E293B',
  textSecondary: '#64748B',
  textWhite: '#FFFFFF',
  border: '#CBD5E1',
  borderLight: '#E2E8F0',
  accentSoft: '#EAE8FF',

  // Status & Burnout indicators
  statusGreen: '#84CC16',
  statusYellow: '#FACC15',
  statusOrange: '#F59E0B',
  statusRed: '#EF4444',
  alertBg: '#FEF2F2',
  alertText: '#991B1B',
};

export const Typography = {
  h1: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700' as const,
    color: Colors.textPrimary,
  },
  h2: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '600' as const,
    color: Colors.textPrimary,
  },
  h3: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600' as const,
    color: Colors.textPrimary,
  },
  bodyRegular: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400' as const,
    color: Colors.textSecondary,
  },
  bodyMedium: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500' as const,
    color: Colors.textSecondary,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400' as const,
    color: Colors.textSecondary,
  },
};

export const BorderRadius = {
  pill: 9999,
  card: 16,
  input: 12,
  sm: 8,
};

export const Shadows = {
  soft: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 3,
  },
  medium: {
    shadowColor: '#5452F6',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
};


// constants/theme.ts

export const COLORS = {
  // Primary & Brand
  primary: '#5452F6',
  primaryGradientStart: '#6B66FF',
  primaryGradientEnd: '#5452F6',
  accentGradientStart: '#EAE8FF',

  // Backgrounds & Surfaces
  background: '#FFFFFF',
  backgroundAlt: '#F8F9FE', // Untuk layar dengan banyak card
  surface: '#FFFFFF',

  // Typography
  textPrimary: '#1E293B',
  textSecondary: '#64748B',
  textWhite: '#FFFFFF',

  // Semantic / Burnout Indicators
  statusGreen: '#84CC16', // Low Risk / Healthy
  statusYellow: '#FACC15', // Moderate
  statusOrange: '#F59E0B', // High Stress
  statusRed: '#EF4444',    // Severe Burnout

  // Alerts & Borders
  alertBackground: '#FEF2F2',
  alertText: '#991B1B',
  borderLight: '#E2E8F0',
  inputBorder: '#CBD5E1',
};

export const TYPOGRAPHY = {
  h1: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700' as const, // Bold
    color: COLORS.textPrimary,
  },
  h2: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '600' as const, // SemiBold
    color: COLORS.textPrimary,
  },
  h3: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600' as const, // SemiBold
    color: COLORS.textPrimary,
  },
  bodyRegular: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400' as const, // Regular
    color: COLORS.textSecondary,
  },
  bodyMedium: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500' as const, // Medium
    color: COLORS.textSecondary,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400' as const, // Regular
    color: COLORS.textSecondary,
  },
};

export const BORDER_RADIUS = {
  sm: 8,
  input: 12,
  card: 16,
  pill: 9999, // Untuk tombol utama
};

export const SHADOWS = {
  soft: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 3, // Untuk Android
  },
  medium: {
    shadowColor: '#5452F6',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 6,
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};