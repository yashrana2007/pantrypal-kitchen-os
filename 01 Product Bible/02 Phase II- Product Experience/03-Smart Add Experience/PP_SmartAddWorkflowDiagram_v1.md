This is the system perspective.

The User Journey answers:

"What does the user do?"

The Workflow answers:

"What does PantryPal do?"

Purpose

The Smart Add Workflow Diagram illustrates the end-to-end processing pipeline from user input to kitchen intelligence update.

It bridges user interactions with the Kitchen Intelligence Core and serves as the reference workflow for all Smart Add implementations.

Core Workflow
                 SMART ADD WORKFLOW

          User Starts Smart Add
                    │
                    ▼
          Select Input Method
                    │
     ┌───────┬────────┬────────┬────────┐
     ▼       ▼        ▼        ▼
  Camera   Receipt   Voice   Manual
     │       │        │        │
     └───────┴────────┴────────┴────────┘
                    │
                    ▼
          AI Recognition Pipeline
                    │
      ┌─────────────┼─────────────┐
      ▼             ▼             ▼
  Detect Item   Estimate Qty   Predict Expiry
                    │
                    ▼
        Kitchen Intelligence Core
                    │
      ┌─────────────┼─────────────┐
      ▼             ▼             ▼
 Inventory      KRS Update    KMI Update
                    │
                    ▼
        User Review & Confirmation
                    │
           Low Confidence?
             │          │
            Yes         No
             │          │
             ▼          ▼
     Manual Correction  Save
             │          │
             └────┬─────┘
                  ▼
          Learn From Feedback
                  │
                  ▼
          Pantry Updated ✅
Workflow Stages
Stage	Responsibility
Capture	Accept user input
Recognition	Detect ingredients and quantities
Understanding	Convert raw input into structured inventory
Intelligence	Update KIC, KRS and KMI
Confirmation	Allow user review
Learning	Improve future recognition
Completion	Save updated pantry
Failure Handling
Recognition Failure
        │
        ▼
Lower AI Confidence
        │
        ▼
Request User Confirmation
        │
        ▼
Learn From Correction
        │
        ▼
Retry Next Time
Related Systems
AI Recognition Pipeline
Kitchen Intelligence Core
User Intelligence Indicators (KRS, KMI)
System Intelligence Layer (AICS)
Success Criteria

The workflow succeeds when:

All input methods converge into one pipeline.
Recognition remains explainable.
Confirmation is only requested when needed.
Every completed interaction improves future recognition.