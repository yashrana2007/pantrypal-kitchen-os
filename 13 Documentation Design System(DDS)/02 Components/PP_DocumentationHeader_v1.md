Project: PantryPal – Project Evergreen

Module: Documentation Design System (DDS)

Phase: 02 – Components

Component: Documentation Header

Version: 1.0

Status: 🟢 Foundation Approved

1. Purpose

The Documentation Header is the primary entry point for every documentation page within Project Evergreen.

It establishes context before the reader engages with the content by presenting the document identity, hierarchy, status, and metadata in a consistent format.

Every documentation asset, regardless of category or complexity, should begin with the Documentation Header.

2. Philosophy

"A great header answers every orientation question before the reader asks it."

Within the first few seconds, a reader should know:

What they are reading.
Which project it belongs to.
Which module it belongs to.
Which version they are viewing.
Whether the document is approved.
3. Objectives

The Documentation Header should:

Establish document identity.
Create a consistent first impression.
Improve navigation.
Reinforce PantryPal branding.
Display document status.
Provide quick metadata.
4. Component Anatomy
┌────────────────────────────────────────────────────────────┐

🍃 PantryPal Logo

Documentation Category

Main Title

Short Description

────────────────────────────────────────────────────────────

Project

Module

Version

Status

Last Updated

────────────────────────────────────────────────────────────

The anatomy remains consistent across all documentation categories.

5. Component Structure
A. Brand Area

Contains:

PantryPal Logo
Project Evergreen

Purpose:

Immediate project recognition.

B. Document Identity

Contains:

Document Category
Main Title
Optional Subtitle

Purpose:

Clearly identify the current document.

C. Metadata

Contains:

Project
Module
Version
Status
Last Updated

Purpose:

Provide contextual information without distracting from the title.

6. Header Hierarchy

Visual priority should follow this order:

Document Title
Document Category
Short Description
Metadata
Brand Identity

The title should always dominate the visual hierarchy.

7. Variants
Standard Header

Used for:

Product Bible
Engineering Bible
Design System
Architecture Header

Additional metadata:

Architecture Layer
System
Dependencies
Experience Header

Additional metadata:

Experience
User Type
Journey
Specification Header

Additional metadata:

Component
Platform
Version
Template Header

Additional metadata:

Template Name
Template Version
8. Layout Rules

Canvas:

16:9

Header Height:

Approximately 18–22% of total page height.

Alignment:

Left-aligned.

Margins:

Follow DDS Grid Tokens.

Content Width:

Maximum 70% of canvas width.

Whitespace:

Minimum DDS-Space-6 below the header before the main content begins.

9. Typography

Title

DDS-Type-Display

Subtitle

DDS-Type-Section

Description

DDS-Type-Body

Metadata

DDS-Type-Caption

Status

DDS-Type-Status

All typography should reference DDS Tokens rather than custom values.

10. Color Usage

Background:

DDS-Surface-Background

Title:

DDS-Text-Primary

Subtitle:

DDS-Text-Secondary

Metadata:

DDS-Text-Caption

Status Badge:

DDS Status Tokens

Dividers:

DDS-Border-Light

11. Status Display

Every Documentation Header must display one status.

Supported statuses:

🟢 Approved

🟡 Draft

🔵 Experimental

🔴 Deprecated

Status should appear as a badge rather than plain text.

12. Usage Guidelines

Use the Documentation Header:

Once per page.
At the top of the document.
Before any diagrams or illustrations.
Before the table of contents (if present).

Do not place content above the Documentation Header.

13. Responsive Behavior

Large Posters

Full metadata displayed.

Medium Posters

Condensed metadata.

Portrait Layouts

Metadata stacks vertically.

Small Assets

Only Title + Version + Status.

14. Accessibility

The Documentation Header should:

Maintain strong text contrast.
Use consistent typography.
Preserve spacing.
Avoid decorative elements that compete with information.

Information should always remain the primary focus.

15. Do's

✔ Keep the hierarchy clean.

✔ Use PantryPal branding consistently.

✔ Maintain generous whitespace.

✔ Display document status.

✔ Keep metadata concise.

16. Don'ts

✘ Don't overcrowd the header.

✘ Don't use decorative backgrounds.

✘ Don't center-align large documentation headers.

✘ Don't introduce custom typography.

✘ Don't hide document status.

17. Related Components
Documentation Cards
Documentation Tables
Status Badges
Footer
Grid System
Typography System
18. Future Evolution

Future versions may include:

Auto-generated breadcrumbs.
QR links to related documentation.
Version comparison indicators.
Multi-language metadata.

These enhancements should remain optional and should not alter the core structure.

19. Evergreen Principle

"The header is the reader's first handshake with the document. It should inspire clarity before curiosity."

Status

Component: Documentation Header

Version: 1.0

Status: 🟢 Foundation Approved