# SANGKALA - Design System & UI Guidelines (For Vibe Coding)

This document serves as the single source of truth for the SANGKALA application's UI/UX design. When generating code, strictly adhere to these visual guidelines to ensure consistency across all screens.

## 1. Design Philosophy & Vibe
* **Vibe:** Calming, friendly, modern, and accessible. The app should not cause cognitive overload, as its primary purpose is to manage stress and burnout.
* **Theme:** Light mode default. Clean white spaces with soft gradient accents (specifically light purple/blue gradients).
* **Mascot/Imagery:** Utilizes a friendly 3D robot mascot (named 'D' or similar) for the AI assistant and empty states to create a welcoming atmosphere.
* **Shapes:** Soft, rounded edges everywhere. Avoid sharp corners.

## 2. Color Palette

### Primary & Brand Colors
* **Primary Indigo/Purple:** `#5452F6` (Used for primary buttons, active states, main FAB, active chat bubbles, and the primary dashboard card background).
* **Primary Gradient:** Linear gradient from `#6B66FF` to `#5452F6` (Used for the main Wellness Score card and Splash screen accents).

### Backgrounds & Surfaces
* **App Background:** `#FFFFFF` (White) or `#F8F9FE` (Very light slate/blue-gray) for screens with multiple cards to provide contrast.
* **Card Surface:** `#FFFFFF` (White) with very soft drop shadows (`box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);`).
* **Accent Background (Header/Chat):** Soft purple gradient fading into white at the bottom (`linear-gradient(to bottom, #EAE8FF, #FFFFFF)`).

### Typography & Text Colors
* **Primary Text (Headings):** `#1E293B` (Slate 800) - Dark, high contrast.
* **Secondary Text (Body/Subtitles):** `#64748B` (Slate 500) - Softer gray for readability without harshness.
* **White Text:** `#FFFFFF` - Used inside primary buttons and the Wellness Score card.

### Semantic Colors (Burnout & Status Indicators)
* **Status Green (Neatly Arranged / Good):** `#84CC16` (Lime/Green)
* **Status Yellow (Burden Begins):** `#FACC15` (Yellow)
* **Status Orange (Overwhelmed):** `#F59E0B` (Amber/Orange)
* **Status Red (Severe Burnout / Warning):** `#EF4444` (Red)
* **Alert Card Background (e.g., Stress Spike Notification):** `#FEF2F2` (Light Red) with `#991B1B` (Dark Red) text/icons.

## 3. Typography
* **Font Family:** `Poppins`, `Inter`, or system default Sans-Serif. (Poppins is highly recommended for headings to match the rounded, friendly vibe).
* **Typography Scale**:
  - **H1 (Large Headings)**: `24px`, Line Height `32px`, Weight `700` (Bold)
  - **H2 (Section Titles)**: `20px`, Line Height `28px`, Weight `600` (SemiBold)
  - **H3 (Card Headings)**: `16px`, Line Height `24px`, Weight `600` (SemiBold)
  - **Body Regular**: `14px`, Line Height `20px`, Weight `400` (Regular)
  - **Body Medium**: `14px`, Line Height `20px`, Weight `500` (Medium)
  - **Caption / Small**: `12px`, Line Height `16px`, Weight `400` (Regular)

## 4. Dark Mode & Accessibility Scope
* **MVP Scope**: **Light Mode Default**. Dark Mode is *Out of Scope* for the initial testable APK build to accelerate development speed. Dark mode support will be introduced in V2.
* **Accessibility**: Contrast ratio compliant with WCAG 2.1 AA. Touch target minimum `44x44px`.

## 5. UI Component Guidelines

### Buttons
* **Primary Button:** Solid background (`#5452F6`), White text, fully rounded/pill-shaped (`border-radius: 9999px` or minimum `16px`). No borders.
* **Secondary/Outline Button:** Transparent background, solid border (`2px solid #E2E8F0`), text colored `#1E293B`.
* **Action Chips (Chat Suggestions):** Pill-shaped, white background, light gray border, small icon + text.
* **Floating Action Button (FAB):** Prominent circular button placed in the center of the bottom navigation bar, solid primary color, dropshadow applied.

### Input Fields (Forms)
* **Styling:** Rounded corners (`border-radius: 12px`), transparent background, light gray border (`1px solid #CBD5E1`).
* **Icons:** Include linear icons inside the input field on the left (e.g., User, Mail, Lock) and right (e.g., Eye for password visibility).
* **Active State:** Border color changes to Primary Indigo (`#5452F6`) when focused.

### Cards & Containers
* **Standard Card:** White background, `16px` border radius, subtle padding (`16px` - `24px`), soft shadow.
* **Dashboard Hero Card (Wellness Score):** Solid primary color background with white text. Includes a circular progress ring (Gauge) on the right side.
* **List Items (Tasks/Notifications):** Horizontally laid out inside cards, featuring an icon on the left (often inside a soft-colored circular container), title, subtitle, and an action or progress bar on the right.

### Navigation
* **Bottom Navigation Bar:** White background, separated by a subtle top border or shadow. 5 items total: Home, Chat, Add (+ FAB), Task, Profile. Active item text and icon are Primary Indigo; inactive items are light gray.
* **Tabs / Segmented Controls:** Pill-shaped container. Active tab has a solid primary background with white text; inactive tab is transparent with gray text.

## 6. Specific Screen Instructions

* **Onboarding:** Large centered 3D illustrations/mascots. A progress bar at the very top indicating the current step. Options (like workload feeling) are presented as large outline buttons with a colored dot/icon on the left.
* **Dashboard:** Greeting at the top left, profile/bot avatar at the top right. Content is modular (Cards for Plan, Streaks, AI Insight). Use dashed dividers or clear spacing between sections within a container.
* **Notifications:** Ensure high contrast for critical alerts. AI Insights notifications should feature a small robot icon. Break reminders should have a distinct visual treatment (e.g., light blue tint).
* **AI Chatbot:** Sticky header with back button. User messages align right (solid purple bubble). AI messages align left (transparent or white background). The input area sticks to the bottom with a microphone icon and a circular primary color send button.

## 7. Implementation Strategy for Rapid MVP & APK Build
* **Styling Framework Decision**: **React Native `StyleSheet` + Centralized Theme Tokens (`constants/theme.ts`)**.
  - *Rationale*: Setting up NativeWind v4 in Expo SDK 52 requires complex Babel/Metro transforms which risk build friction and EAS APK build failures under tight deadlines.
  - *Fastest Path*: Using standard React Native `StyleSheet` with pre-defined token constants (`Colors`, `Typography`, `Spacing`, `BorderRadius`, `Shadows`) in `constants/theme.ts` guarantees 100% build compatibility, zero setup overhead, and maximum execution speed for building testable APKs.
* Ensure touch targets for mobile are at least `44x44px`.
* Use safe area insets to prevent content from overlapping with device notches and bottom swipe bars.