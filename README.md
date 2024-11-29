# dynit

Utility for creating dynamic CSS values that smoothly transition between screen widths.

## Installation

```bash
npm install dynit
```

## Usage

```typescript
import { dynit, mediaUp, mediaDown, mediaBetween } from 'dynit';

// Create dynamic value that changes from 20px at 768px screen width to 40px at 1920px screen width
const dynamicValue = dynit(768, 20, 1920, 40);
// Result: calc(20px + 0.0125 * (100vw - 768px))

// Create media queries
const upQuery = mediaUp(768);
// Result: @media (min-width: 768px)

const downQuery = mediaDown(768);
// Result: @media (max-width: 767.98px)

const betweenQuery = mediaBetween(768, 1200);
// Result: @media (min-width: 768px) and (max-width: 1199.98px)
```

## API

### dynit(minScreenWidth, minValue, maxScreenWidth, maxValue)

Creates a CSS calc expression for smooth value transition between screen widths.

### mediaUp(breakpoint)

Creates a min-width media query.

### mediaDown(breakpoint)

Creates a max-width media query.

### mediaBetween(minBreakpoint, maxBreakpoint)

Creates a media query for a range between two breakpoints.

## License

MIT
