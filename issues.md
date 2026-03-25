# Issue Tracking

## Issue 1: Incorrect total calculation

- Description: The application concatenates values instead of adding them
- Root Cause: Input values are treated as strings
- Fix: Explicit conversion using Number()

## Issue 2: Duplicate event listeners

- Description: Button triggers multiple times
- Root Cause: Event listener attached more than once
- Fix: Ensure single event binding during initialization

## Issue 3: No input validation

- Description: Allows invalid values
- Root Cause: Calling twice unit()
- Fix: Add validation code
