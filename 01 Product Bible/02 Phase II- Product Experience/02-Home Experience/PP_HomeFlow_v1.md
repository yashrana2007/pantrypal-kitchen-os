tep 1: User Flow

This is where we begin. Before drawing boxes or screens, we define how users interact with the Home Experience.

PP_HomeFlow_v1.0
Entry Flow
Launch App
      │
      ▼
Splash Screen
      │
      ▼
Authentication Check
      │
      ├─────────────► Not Logged In
      │                     │
      │                     ▼
      │                Login / Sign Up
      │                     │
      ▼                     ▼
Home Experience Loads
Home Experience Flow
Home Experience
      │
      ▼
Contextual Greeting
      │
      ▼
Kitchen Ready Score (Hero)
      │
      ├──────────────► Tap
      │                    │
      │                    ▼
      │            Kitchen Readiness Report
      │
      ▼
Secondary Cards
Secondary Cards
Secondary Cards
      │
      ├──────────────► Kitchen Maturity
      │                    │
      │                    ▼
      │             Kitchen Journey
      │
      └──────────────► Expiring Items
                           │
                           ▼
                   Expiry Management
Today's Focus
Today's Focus
      │
      ▼
View Suggested Action
      │
      ├────────► Open Ingredient
      │
      ├────────► Mark Completed
      │
      └────────► Snooze
AI Suggestions
AI Suggestions
      │
      ├────────► View Recommendation
      │
      ├────────► Open Recipe
      │
      ├────────► Add to Meal Plan
      │
      └────────► Ignore
Meal Suggestions
Meal Suggestions
      │
      ├────────► Recipe Details
      │
      ├────────► Start Cooking
      │
      ├────────► Save Recipe
      │
      └────────► Replace Suggestion
Kitchen Stories
Kitchen Stories
      │
      ├────────► Weekly Progress
      │
      ├────────► Food Waste Saved
      │
      ├────────► Cooking Streak
      │
      └────────► Achievement Details
Floating Action Button
Smart Add (+)
      │
      ▼
Choose Input Method
      │
      ├────────► Camera
      │
      ├────────► Receipt Scan
      │
      ├────────► Barcode
      │
      ├────────► Voice
      │
      └────────► Manual Entry
Kitchen Hub
☰ Kitchen Hub
      │
      ├────────► Pantry
      ├────────► Refrigerator
      ├────────► Freezer
      ├────────► Spice Rack
      ├────────► Meal Planner
      ├────────► Kitchen Stories
      ├────────► Insights
      ├────────► Family
      └────────► Settings
Bottom Navigation
🏠 Home
      │
      ▼
Current Screen

🍽 Meals
      │
      ▼
Meal Experience

📷 Smart Add
      │
      ▼
Capture Experience

🛒 Shopping
      │
      ▼
Shopping Experience

📊 Insights
      │
      ▼
Kitchen Analytics
🌿 Design Decisions Captured

This flow already reflects all the strategic choices we've made:

Kitchen Ready Score (KRS) is the primary daily metric.
Kitchen Maturity Index (KMI) is a secondary, long-term indicator.
Today's Focus replaces generic alerts.
Smart Add is the primary floating action.
Kitchen Hub replaces a generic hamburger menu.
Four bottom tabs + centered Smart Add remain consistent across the app.