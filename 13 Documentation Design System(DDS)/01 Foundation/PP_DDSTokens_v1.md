Project: PantryPal – Project Evergreen

Module: Documentation Design System

Category: Foundation

Document: Documentation Design Tokens (DDS Tokens)

Version: 1.0

Status: 🟢 Foundation Approved

1. Purpose

Documentation Design Tokens (DDS Tokens) define the smallest reusable visual values used throughout the Documentation Design System.

Rather than repeatedly specifying colors, typography, spacing, shadows, and layouts, documentation assets reference standardized tokens.

DDS Tokens ensure every documentation page maintains a consistent visual identity.

2. Philosophy

"Design once. Reuse everywhere."

Documentation should inherit visual consistency through shared tokens rather than repeated styling decisions.

3. Token Categories

The Documentation Design System is built upon eight token families.

DDS Tokens

├── Colors
├── Typography
├── Spacing
├── Grid
├── Radius
├── Shadows
├── Borders
└── Icons
4. Color Tokens
Brand
DDS-Color-Primary

#2E7D32
DDS-Color-Secondary

#43A047
DDS-Color-Accent

#66BB6A
Surface
DDS-Surface-Background

#F8FAF8
DDS-Surface-Card

#FFFFFF
Text
DDS-Text-Primary

#1B1B1B
DDS-Text-Secondary

#616161
DDS-Text-Caption

#8A8A8A
Borders
DDS-Border-Light

#E8ECE8
5. Typography Tokens
DDS-Type-Display

48–56px
DDS-Type-Title

32–40px
DDS-Type-Section

24px
DDS-Type-Body

16px
DDS-Type-Caption

14px
DDS-Type-Status

12px
6. Spacing Tokens

Base Unit

8px

Scale

DDS-Space-1

8
DDS-Space-2

16
DDS-Space-3

24
DDS-Space-4

32
DDS-Space-5

48
DDS-Space-6

64
DDS-Space-7

96
DDS-Space-8

128
7. Radius Tokens
DDS-Radius-Small

8px
DDS-Radius-Medium

16px
DDS-Radius-Large

20px
DDS-Radius-XL

24px
8. Shadow Tokens
DDS-Shadow-Soft

Used for documentation cards.

DDS-Shadow-Medium

Used for hero components.

DDS-Shadow-None

Used for tables.

9. Grid Tokens
DDS-Grid-12

12-column layout.

DDS-Margin

80px
DDS-Gutter

32px
DDS-Baseline

8px
10. Component Tokens
DDS-Card-Standard

Documentation cards.

DDS-Card-Journey

Journey Matrix cards.

DDS-Card-Architecture

Architecture blocks.

DDS-Card-Callout

Information callouts.

DDS-Table-Standard

Documentation tables.

DDS-Flow-Connector

Workflow arrows.

11. Icon Tokens
DDS-Icon-Primary

PantryPal Signature Icons.

DDS-Icon-Secondary

Supporting icons.

DDS-Icon-Status

Approval indicators.

12. Status Tokens
DDS-Status-Approved

Green
DDS-Status-Draft

Amber
DDS-Status-Deprecated

Grey
DDS-Status-Error

Red
13. Prompt Tokens

These are used inside the Visual Prompt System.

DDS-Prompt-Editorial

Minimal Documentation Style
DDS-Prompt-Premium

Luxury Product Documentation
DDS-Prompt-Minimal

Whitespace First
DDS-Prompt-Technical

Architecture Focused

Instead of rewriting these phrases, future prompts can simply reference the token names.

14. Usage Rules

Every documentation asset should:

Use DDS Color Tokens.
Use DDS Typography Tokens.
Use DDS Grid Tokens.
Use DDS Component Tokens.
Use DDS Status Tokens.

Custom values should only be introduced when a new token is added to the system.

15. Versioning
DDS Tokens

v1.0

↓

v1.1

↓

v2.0

Token updates should be backward compatible whenever possible.

16. Evergreen Principle

"Consistency is achieved through reusable decisions, not repeated decisions."

Status

Document: PP_DDSTokens_v1.0

Version: 1.0

Status: 🟢 Foundation Approved