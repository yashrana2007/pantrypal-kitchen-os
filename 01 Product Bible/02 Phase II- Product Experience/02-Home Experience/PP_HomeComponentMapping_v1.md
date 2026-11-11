PP_HomeComponentMapping_v1.0.md

Project: PantryPal – Project Evergreen

Phase: II – Product Experience

Chapter: 02 – Home Experience

Document: Component Mapping

Version: 1.0

Status: 🟢 Approved

1. Purpose

The Component Mapping document identifies every Design System component required to build the Home Experience.

Its objectives are to:

Ensure consistent use of the PantryPal Design System.
Prevent duplicate component creation.
Help engineering understand reusable UI elements.
Track which components already exist and which require new variants.

This document serves as the bridge between Product Design, Design System, and Engineering.

2. Component Mapping Overview
Home Section	Design System Component	Variant	Status
Header	Navigation System	Home Header	✅ Existing
Greeting	Typography	Contextual Greeting	🔄 New Variant
Kitchen Ready Score	Progress Components	Hero Progress Card	🔄 New Variant
Kitchen Maturity Index	Progress Components	Secondary Progress Card	🔄 New Variant
Expiring Items	Card Family	Status Card	🔄 New Variant
Today's Focus	Card Family	Priority Card	🔄 New Variant
AI Suggestions	Card Family	AI Recommendation Card	🔄 New Variant
Smart Add Shortcuts	Button Family	Quick Action Buttons	✅ Existing
Meal Inspiration	Card Family	Recipe Card	✅ Existing
Kitchen Story	Card Family	Story Card	🔄 New Variant
Bottom Navigation	Navigation System	Bottom Navigation	✅ Existing
Notification Badge	Feedback Components	Notification Badge	✅ Existing
User Avatar	Navigation System	Profile Avatar	✅ Existing
3. New Components Required

The following components must be added to the Design System before Home Experience UI development begins.

3.1 Kitchen Ready Hero Card

Purpose

Primary hero component of the Home screen.

Contains

Kitchen Ready Ring
Percentage
Status
CTA

Priority

⭐⭐⭐⭐⭐

3.2 Kitchen Maturity Card

Purpose

Display long-term kitchen growth.

Contains

KMI Progress
Growth Stage
View Progress

Priority

⭐⭐⭐⭐☆

3.3 Today's Focus Card

Purpose

Highlight the single most important action for the day.

Contains

Priority icon
Description
Complete button
Snooze button

Priority

⭐⭐⭐⭐⭐

3.4 AI Recommendation Card

Purpose

Explain AI-generated recommendations.

Contains

Recommendation
Why suggested
Action button

Priority

⭐⭐⭐⭐⭐

3.5 Kitchen Story Card

Purpose

Celebrate progress and engagement.

Contains

Story icon
Headline
Summary
CTA

Priority

⭐⭐⭐⭐☆

4. Existing Components Reused

The following components already exist in the PantryPal Design System.

Primary Buttons
Secondary Buttons
Floating Action Button
Bottom Navigation
Input Components
Card Family
Icon Library
Feedback Components
Navigation Components

No redesign required.

5. Component Dependencies

The Home Experience depends on the following Design System libraries.

Button Family
Navigation System
Card Family
Progress Components
Feedback Components
Iconography
Illustration Library
6. Engineering Notes

Engineering should reuse existing components wherever possible.

Only the following require new implementation:

Kitchen Ready Hero
Kitchen Maturity Card
Today's Focus Card
AI Recommendation Card
Kitchen Story Card

All other UI elements should be assembled from existing reusable components.

7. Future Enhancements

Potential future components include:

Weather Card
Family Activity Card
Sustainability Card
AI Confidence Card
Smart Device Card

These are not part of Version 1.0.

Status

Document: PP_HomeComponentMapping_v1.0

Version: 1.0

Status: 🟢 Approved