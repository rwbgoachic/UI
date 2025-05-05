# PaySurity UI Component Library

A modern React component library with a focus on simplicity and usability.

## Installation

```bash
npm install @paysurity/ui@latest
```

## Components

### Button
A versatile button component with primary and secondary variants.

```tsx
import { Button } from '@paysurity/ui'

function Example() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  )
}
```

### Form Components
Form components for building interactive user interfaces.

```tsx
import { Input } from '@paysurity/ui'

function Example() {
  return (
    <Input 
      label="Username"
      placeholder="Enter username"
      error="This field is required"
    />
  )
}
```

### Icons
Built-in icon components using Heroicons.

```tsx
import { Icon } from '@paysurity/ui'

function Example() {
  return (
    <Icon name="HomeIcon" className="w-6 h-6" />
  )
}
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build library
npm run build:lib
```

## License

MIT © PaySurity