Age Calculator
A responsive age calculator that accurately computes age in years, months, and days from birth date input.

Features
Real-time validation for day, month, and year inputs
Auto-advancing fields (auto-focus between inputs)
Accurate date calculations accounting for month lengths
Visual error feedback with red borders and messages
Responsive design works on mobile and desktop
Clean UI built with Tailwind CSS
Project Structureage-calculator/
├── assets/ │ ├── images/ │ │ ├── favicon-32x32.png # App icon │ │ └── icon-arrow.svg # Calculator button ├── src/ │ └── output.css # Tailwind CSS ├── index.html # Main HTML file └── script.js#

***Core application logicHow to Use:

Enter your birth date: -Day (DD)

-Month (MM)

-Year (YYYY)

-Click the purple arrow button

***View your calculated age in:

-Years

-Months

**DaysValidation Rules

-Input-Validation: Error Message

-Day 1-31, valid for month: "Must be a valid day"

-Month 1-12: "Must be a valid month"

-Year ≤ current year: "Must be in the past"