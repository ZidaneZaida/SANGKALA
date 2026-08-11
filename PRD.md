# SANGKALA – Product Requirement Document (PRD)

## Overview

SANGKALA is a mobile application designed for effective time management and burnout tracking, seamlessly integrated with the user's calendar. The app aims to provide users with a comprehensive tool to manage daily activities, assess burnout risk, and receive proactive assistance via an intelligent AI chatbot assistant. Its intuitive onboarding, rich dashboard, and notification system ensure users stay organized while maintaining well-being.

## Problem Statement

Modern professionals experience increased risk of burnout due to poor time management, lack of visibility over daily commitments, and insufficient tools for early detection of stress. There is a need for a solution that not only organizes tasks but also tracks burnout levels and provides actionable insights and reminders to prevent productivity loss and well-being decline.

## User Flow

1. **Landing Page**:
  * Presents app value proposition and prompts for onboarding/start.
2. **Onboarding**:
  * User answers 4 key introductory questions to tailor the experience (e.g., typical working hours, stress triggers, goals).
3. **Registration/Login**:
  * Options for email/phone-based registration and secure login.
  * Integration with OAuth (Google/Apple) for seamless access.
4. **Dashboard**:
  * Central hub after login showing:
    * Integrated calendar with time blocks and activity visualization
    * Burnout parameter highlights and daily assessment
    * Personalized daily summary & key metrics
    * Access to AI Assistant chatbot
    * Notifications area
5. **Time Management**:
  * Adding, editing, and deleting tasks/events, auto-synced with calendar
  * Categorizing and prioritizing tasks
6. **Burnout Tracking**:
  * Burnout meter based on user activities and onboarding responses
  * Regular check-ins and suggested breaks
7. **AI Assistant**:
  * Chatbot interface for time management tips, scheduling help, and burnout prevention advice
8. **Notifications**:
  * Scheduled and intelligent notifications to warn about high burnout risk, missed break times, and upcoming priorities

## Functional Requirements

### Core Features

* **Landing Page**
  * Displays SANGKALA's core benefits
  * Easy entry to onboarding or login
* **Onboarding**
  * Presents 4 dynamic questions derived from Maslach Burnout Inventory (MBI) & ILO Workload Guidelines:
    1. **Durasi Kerja Harian**: Jam kerja rata-rata per hari (<6j, 6-8j, 8-10j, >10j).
    2. **Kebiasaan Istirahat**: Frekuensi jeda kerja (Setiap 1-2j, Hanya makan siang, Jarang/Tidak pernah).
    3. **Tingkat Kelelahan Emosional (MBI Exhaustion Baseline)**: Frekuensi merasa lelah secara mental saat memulai hari (Jarang, Kadang-kadang, Sangat Sering).
    4. **Batas Jam Kerja (Work-Life Boundary)**: Frekuensi bekerja di luar jam normal/akhir pekan (Tidak Pernah, Kadang-kadang, Selalu).
  * Tailors baseline profile and burnout initial score.
* **Authentication**
  * Registration and login (Email/Phone & OAuth)
  * Secure password storage & recovery
* **Dashboard**
  * 2-Way Calendar integration (Google Calendar/Apple Calendar, etc.)
  * Burnout assessment meter and latest value
  * Daily activity summary with pie-charts/graphs
  * Quick access to AI Assistant
  * Notification center with relevant alerts
* **Time Management**
  * Add, edit, and remove tasks/events, auto-synced with calendar
  * Link events with calendar (2-Way Read & Write)
  * Color-coded priority and category tags
  * Rescheduling via drag-drop or simple UI
* **Burnout Tracking (Scientific Multi-Factor Model - MBI & ICD-11)**
  * **Algorithm Scoring Model (0 - 100 Risk Index)**:
    - **Baseline Onboarding Weight (30%)**: Calculated from initial 4 onboarding questions.
    - **Calendar & Activity Workload Weight (50%)**:
      * Total daily work duration (>8h: +10 pts, >10h: +20 pts).
      * Continuous work blocks (>90-120 min without break: +15 pts).
      * Late night / weekend work events (+15 pts).
      * Overdue & high-priority task overload (+10 pts).
    - **Daily Pulse Check-in Weight (20%)**: Daily 1-question mood/energy self-assessment (1-5 scale).
  * **Risk Index Classification**:
    - `0 - 25`: Low Risk / Healthy Balance (Green `#84CC16`)
    - `26 - 50`: Moderate Load / Precaution (Yellow `#FACC15`)
    - `51 - 75`: High Stress / Overwhelmed (Orange `#F59E0B`)
    - `76 - 100`: Severe Burnout Warning (Red `#EF4444`)
  * Proactive break suggestions & work/rest balance recommendations.
* **AI Assistant**
  * Chat interface leveraging GPT-like model / Gemini AI
  * Provides advice/suggestions/reminders
* **Notifications**
  * Push notifications for break reminders, burnout warnings & events
  * Customizable notification settings

## Non-Functional Requirements

* **Performance**
  * App loads in <3 seconds on standard devices
  * Notifications sent without delay for critical events
* **Security**
  * Encryption for user data in transit & at rest
  * GDPR compliant handling of personal and health data
* **Integration**
  * 2-Way Sync (Read & Write) with third-party calendars (Google Calendar API)
  * Open API endpoints for future extensions
* **Reliability**
  * 99.5% uptime SLA
  * Offline mode for basic usage (local calendar and burnout logging)
* **Usability & Accessibility**
  * Intuitive, accessible UI (WCAG 2.1 Level AA)
  * Multilingual support (initially in Bahasa Indonesia & English)

## Tech Stack
* **Frontend**: React Expo (SDK 52), Expo Router v4
* **Backend**: Express.js
* **Database & Auth**: Supabase
* **Integrations**: Google Calendar API (2-Way Sync)
* **AI Model**: Gemini AI Model