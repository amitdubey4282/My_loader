# Loader Component

A versatile loading animation component for React applications.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Examples](#examples)

## Installation

To use the Loader component in your React project, you can install it using npm or yarn:

```bash
npm install 
# or
yarn add 
```

## Props

The Loader component accepts the following props:

isLoading (boolean, required): Flag to control the loading state.

animation (string): Type of animation for the loader ("wave", "none").
variant (string): The visual style or variant of the loader ( "circle", "rectangle").
width (string): Width of the loader element.
height (string): Height of the loader element (if not passed it will take height of the containr (min height 16px)).

## Examples

<Loader isLoading={true} animation="wave">
  {/* Your content goes here */}
</Loader>

