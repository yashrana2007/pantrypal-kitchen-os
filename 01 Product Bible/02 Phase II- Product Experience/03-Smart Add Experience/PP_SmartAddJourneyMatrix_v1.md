Project: PantryPal – Project Evergreen

Phase: II – Product Experience

Chapter: 03 – Smart Add Experience

Document: Journey Matrix

Version: 1.0

Status: 🟢 Foundation Approved

1. Purpose

The Smart Add Journey Matrix provides a comparative overview of every supported Smart Add journey.

Unlike the User Journey document, which explains each path individually, the Journey Matrix allows product designers, engineers, and stakeholders to compare all input methods at a glance.

It serves as the primary decision reference for Smart Add experience design.

2. Journey Overview
Journey	Primary Use Case	User Effort	Avg. Time	AI Assistance	Confidence	Fallback
📷 Camera Scan	Fresh groceries	⭐ Low	~10 sec	Vision + OCR	High	Manual Entry
🧾 Receipt Scan	Shopping receipts	⭐ Very Low	~8 sec	OCR + Product Matching	High	Camera Scan
🎤 Voice Entry	Quick additions	⭐⭐ Medium	~12 sec	Speech Recognition + NLP	Medium–High	Manual Entry
⌨ Manual Entry	Rare or unsupported items	⭐⭐⭐ Higher	~20 sec	Smart Search + Validation	Very High	None
3. Journey Characteristics
Journey	Speed	Accuracy	Flexibility	Learning Value
Camera	⭐⭐⭐⭐	⭐⭐⭐⭐	⭐⭐⭐	⭐⭐⭐⭐
Receipt	⭐⭐⭐⭐⭐	⭐⭐⭐⭐	⭐⭐	⭐⭐⭐
Voice	⭐⭐⭐	⭐⭐⭐	⭐⭐⭐⭐	⭐⭐⭐
Manual	⭐⭐	⭐⭐⭐⭐⭐	⭐⭐⭐⭐⭐	⭐⭐⭐⭐
4. AI Modules Used
Journey	Vision	OCR	NLP	Search	KIC
Camera	✅	Optional	—	—	✅
Receipt	—	✅	—	Product Match	✅
Voice	—	—	✅	Ingredient Match	✅
Manual	—	—	—	✅	✅
5. Kitchen Intelligence Integration
Journey	Updates Inventory	Updates KRS	Updates KMI	Learns From Feedback
Camera	✅	✅	✅	✅
Receipt	✅	✅	✅	✅
Voice	✅	✅	✅	✅
Manual	✅	✅	✅	✅
6. User Decision Guide
If the user wants to...	Recommended Journey
Scan groceries	📷 Camera
Import a supermarket bill	🧾 Receipt
Add one or two ingredients quickly	🎤 Voice
Add a rare or custom item	⌨ Manual
7. Design Principles

Every Smart Add journey should:

Minimize manual effort.
Produce a consistent outcome.
Feed the Kitchen Intelligence Core.
Learn from corrections.
Never leave the user blocked.
8. Success Criteria

The Journey Matrix is successful when:

Each journey has a clearly defined purpose.
Designers understand the differences between input methods.
Engineers know which AI modules are involved.
Product decisions remain consistent across future updates.