Document ID: PP-MEAL-JM-v1.0

Purpose

The Journey Matrix maps every interaction between the user, PantryPal Intelligence, and interface components throughout the Meal Planner Experience.
| Journey Stage    | User Goal                 | User Actions           | AI Intelligence                        | UI Touchpoints                  | Emotional State | Success Criteria                |
| ---------------- | ------------------------- | ---------------------- | -------------------------------------- | ------------------------------- | --------------- | ------------------------------- |
| Discover Meals   | Find meal suggestions     | Open Meal Planner      | Analyze inventory, freshness, KRS      | Meal Hero, Recommendation Cards | Curious         | Recommendations generated       |
| Review Meal      | Understand recommendation | View meal details      | Explain recommendation                 | Meal Details Card               | Interested      | User understands recommendation |
| Ingredient Check | Verify ingredients        | Review ingredient list | Match inventory, suggest substitutions | Ingredient Panel                | Confident       | Meal feasibility confirmed      |
| Cook Meal        | Start cooking             | Press Cook Now         | Reserve inventory                      | Cook CTA                        | Motivated       | Cooking begins                  |
| Complete Cooking | Finish meal               | Mark meal complete     | Update inventory, KRS                  | Success Dialog                  | Accomplished    | Inventory updated               |

Intelligence Mapping
| Intelligence Component    | Responsibility             |
| ------------------------- | -------------------------- |
| Kitchen Intelligence Core | Coordinates planning       |
| Recommendation Engine     | Suggests meals             |
| Inventory Intelligence    | Checks ingredients         |
| Kitchen Ready Score       | Prioritizes meals          |
| Context Engine            | Considers time and context |

Component Mapping
| PCR Category | Components                            |
| ------------ | ------------------------------------- |
| Experience   | Meal Planner Workspace                |
| Interface    | Hero Card, Meal Card, Ingredient Card |
| Navigation   | Bottom Navigation                     |
| Feedback     | Toast, Success Banner                 |
| Input        | Search, Filters                       |

Journey KPIs
Meal recommendation acceptance
Ingredient utilization
Food waste reduction
Cook Now usage
Shopping conversion