PantryPal Design System
Chapter 01 — Design Tokens

Project: Evergreen

Version: 1.0 Alpha

Status: 🟡 In Review

1.1 Purpose

Design Tokens are the foundational values that define PantryPal's visual language.

Instead of hardcoding values into components, every UI element references Design Tokens to ensure consistency, scalability, accessibility, and maintainability across all platforms.

These tokens serve as the single source of truth for design decisions.

1.2 Token Naming Convention

Every Design Token follows the structure:

Category.Property.Variant

Examples:

color.brand.primary.500
color.text.primary
color.surface.primary

spacing.md
spacing.xl

radius.card
radius.button

font.heading.lg
font.body.md

shadow.surface

motion.normal

This naming convention should remain consistent across:

Figma Variables
CSS Variables
JavaScript
React
React Native
Flutter
SwiftUI
1.3 Color Tokens
Brand Colors
Token	Value	Usage
color.brand.primary.500	#3A7D44	Primary Brand
color.brand.primary.600	#2F6A37	Hover
color.brand.primary.100	#DCEFD9	Light Background
Accent Colors
Token	Value
color.brand.accent.500	#E7B75F
color.brand.accent.100	#FFF5DE
Surface Colors
Token	Value
color.surface.primary	#FFFFFF
color.surface.secondary	#F8FAF8
color.surface.tertiary	#F1F5F3
Background Colors
Token	Value
color.background.primary	#F8FAF8
color.background.secondary	#EEF4EF
Text Colors
Token	Value
color.text.primary	#1F2937
color.text.secondary	#6B7280
color.text.disabled	#9CA3AF
color.text.inverse	#FFFFFF
Border Colors
Token	Value
color.border.light	#E5E7EB
color.border.medium	#CBD5E1
color.border.dark	#94A3B8
Semantic Colors
Token	Value	Meaning
color.semantic.success	#22C55E	Healthy
color.semantic.warning	#EAB308	Running Low
color.semantic.attention	#F97316	Use Soon
color.semantic.danger	#EF4444	Empty
color.semantic.info	#3B82F6	Information
1.4 Typography Tokens
Font Families
Token	Value
font.family.heading	Poppins
font.family.body	Inter
font.family.monospace	JetBrains Mono
Heading Sizes
Token	Size
font.heading.xxl	48px
font.heading.xl	40px
font.heading.lg	32px
font.heading.md	24px
font.heading.sm	20px
Body Sizes
Token	Size
font.body.lg	18px
font.body.md	16px
font.body.sm	14px
font.body.xs	12px
Font Weights
Token	Weight
font.weight.regular	400
font.weight.medium	500
font.weight.semibold	600
font.weight.bold	700
1.5 Spacing Tokens

PantryPal follows an 8-point spacing system.

Token	Value
spacing.xs	4px
spacing.sm	8px
spacing.md	16px
spacing.lg	24px
spacing.xl	32px
spacing.2xl	48px
spacing.3xl	64px
1.6 Radius Tokens
Token	Value
radius.sm	8px
radius.md	14px
radius.card	20px
radius.sheet	28px
radius.pill	999px
radius.circle	50%
1.7 Shadow Tokens
Token	Usage
shadow.none	Flat Surfaces
shadow.sm	Buttons & Inputs
shadow.md	Cards
shadow.lg	Bottom Sheets
shadow.xl	Dialogs

Shadows should always remain soft and natural.

1.8 Motion Tokens
Duration
Token	Value
motion.duration.fast	150ms
motion.duration.normal	250ms
motion.duration.slow	400ms
Easing
Token
motion.ease.standard
motion.ease.easeOut
motion.ease.spring
1.9 Layout Tokens
Screen
Token	Value
layout.screen.padding	20px
layout.section.spacing	32px
layout.card.spacing	16px
layout.component.spacing	12px
1.10 Component Size Tokens
Token	Value
component.button.height	52px
component.input.height	52px
component.search.height	56px
component.fab.size	56px
component.bottomNav.height	80px
component.iconButton.size	48px
1.11 Icon Tokens
Token	Value
icon.size.sm	16px
icon.size.md	20px
icon.size.lg	24px
icon.size.xl	32px

Style:

Rounded
Outline
2px Stroke
1.12 Elevation Tokens
Token	Usage
elevation.level0	Background
elevation.level1	Cards
elevation.level2	Navigation
elevation.level3	Bottom Sheets
elevation.level4	Dialogs
elevation.level5	Toasts
1.13 Accessibility Tokens
Token	Value
accessibility.touch.minimum	48px
accessibility.touch.preferred	56px
accessibility.contrast.minimum	4.5:1
accessibility.text.scaling	Enabled
1.14 Responsive Breakpoints
Token	Width
breakpoint.mobile.sm	320px
breakpoint.mobile.md	375px
breakpoint.mobile.lg	430px
breakpoint.tablet	768px
breakpoint.desktop	1024px
1.15 Token Hierarchy
Foundation

├── Color
├── Typography
├── Spacing
├── Radius
├── Shadows
├── Motion
├── Layout
├── Components
├── Accessibility
└── Breakpoints

Every component in PantryPal must inherit its visual properties from these tokens.

No component should use hard-coded values.

🌿 Evergreen Principle

Every pixel should come from a token, not from a guess.