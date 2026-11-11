UX Specification v1.0

Project: Evergreen

Version: 1.0

Status: 🟡 In Design

Related Documents:

PP_HomeExperience_v1.0.md
PP_HomeFlow_v1.0.md
PP_HomeWireframe_v1.0.png
1. Overview

The Home Experience is the central command center of PantryPal.

Its purpose is to provide users with a calm, intelligent overview of their kitchen, surfacing only the most relevant information for the current day.

The Home Experience should answer four questions within 10 seconds:

Is my kitchen ready today?
What needs attention?
What can I cook?
Do I need groceries?
2. Screen Structure

The Home Experience consists of the following sections in order:

1. Header
2. Greeting
3. Kitchen Ready Score (Hero)
4. KMI + Expiring Items
5. Today's Focus
6. AI Suggestions
7. Smart Add Shortcuts
8. Meal Inspiration
9. Kitchen Story
10. Bottom Navigation

No additional sections should appear above the Kitchen Ready Score.

3. Header
Components
Kitchen Hub (☰)
Notification Icon
User Avatar

No search icon is displayed on the Home screen.

Behavior
Kitchen Hub

Tap

↓

Open Kitchen Hub

Slide from left.

Duration:

250 ms

Notification

Tap

↓

Notification Center

Unread count displayed as badge.

Maximum badge:

99+

Avatar

Tap

↓

Profile

Kitchen Settings

Account

Family

4. Greeting
Purpose

Create emotional connection.

Not informational overload.

Content

Dynamic greeting.

Examples:

Morning

Good Morning.

Your kitchen is calm today.

Rain

Rainy Afternoon.

Soup ingredients are ready.

Weekend

Happy Sunday.

Perfect day for family cooking.
Rules

Maximum:

2 lines

Greeting updates based on:

Time
Weather
Kitchen status
Season
5. Kitchen Ready Score (Hero)
Priority

Highest.

Largest component.

Shows

Kitchen Ready %

Kitchen Status

Short explanation

View Report CTA

Tap

Opens

Kitchen Readiness Report

Long Press

Shows

Metric explanation.

Updates

Daily

Whenever pantry changes.

6. Kitchen Maturity Index

Purpose

Long-term progress.

Displays

Percentage

Growth Stage

Progress label

Tap

↓

Kitchen Journey

Updates

Weekly.

Never multiple times a day.

7. Expiring Items Card

Displays

Number of expiring items
Most urgent ingredient
Days remaining

Tap

↓

Expiry Management

Priority Rules

Red

Expires today

Amber

1–2 days

Green

No urgent expiry

8. Today's Focus

Only ONE focus exists each day.

Examples

Use tomatoes today.

Buy milk.

Cook paneer.

Restock rice.

Celebrate zero waste.

Buttons

Complete

Later

View

Behavior

Completing today's focus immediately replaces it with the next highest priority.

9. AI Suggestions

Carousel.

Maximum:

3 visible suggestions.

Every suggestion must answer:

Why this?

Example

Cook Paneer Bhurji

Because:

✓ Paneer expires tomorrow

✓ Onion available

✓ Tomato available

Actions

Cook

Save

Replace

Ignore

10. Smart Add Shortcuts

Methods

📷 Camera

🧾 Receipt

🎤 Voice

⌨ Manual

Tap

↓

Open Smart Add Flow

Rules

Always exactly four shortcuts.

Never add more.

11. Meal Inspiration

Horizontal carousel.

Each card displays:

Photo

Meal

Time

Difficulty

Reason

Tap

↓

Recipe Detail

Swipe

Next recipe

12. Kitchen Story

One story only.

Purpose

Celebrate progress.

Examples

₹420 saved this week.

12-day cooking streak.

Zero food waste yesterday.

Healthy kitchen achieved.

Tap

↓

Story Details

Achievements

Insights

13. Bottom Navigation

Items

🏠 Home

🍽 Meals

📷 Smart Add

🛒 Shopping

📊 Insights

Rules

Home highlighted.

Smart Add uses elevated FAB.

Icons remain consistent across all screens.

14. Scrolling Behavior

Sections that scroll horizontally:

AI Suggestions
Meal Inspiration

Entire page scrolls vertically.

Header remains fixed.

Bottom navigation remains fixed.

15. Empty States

Examples

No expiring items

Everything looks fresh today 🌿

No suggestions

Your kitchen is already in great shape.

No meals

Add more ingredients to unlock recipes.
16. Loading States

Kitchen Ready

Skeleton Ring

AI Suggestions

Skeleton Cards

Meals

Skeleton Cards

No loading spinner unless absolutely necessary.

17. Accessibility

Minimum touch target:

48 × 48 px

Screen reader labels required.

High contrast support.

Reduced motion respected.

Dynamic text supported.

18. Motion

Kitchen Ready Ring

250 ms fill animation

Today's Focus

Fade in

AI Cards

Slide in

FAB

Gentle scale on tap

Notifications

Fade + slide

Animations must never delay user interaction.

19. Performance Goals

Home loads in under 2 seconds.

Critical information visible immediately.

Lazy-load non-essential content below the fold.

20. Design Rules
KRS is always the hero.
KMI is always secondary.
One Today's Focus card only.
One Kitchen Story only.
Four Smart Add methods only.
No search icon on Home.
Living Kitchen illustration belongs to the Living Kitchen experience, not the Home screen.
Bottom navigation remains fixed and consistent.
21. Success Criteria

A first-time user should understand the Home screen in under 30 seconds.

A returning user should understand today's kitchen status in under 10 seconds.

The Home Experience is successful when it encourages action without creating cognitive overload.

📌 Status

Experience: Home

Document: UX Specification

Version: 1.0

Status: 🟢 Approved (Pending High-Fidelity UI)