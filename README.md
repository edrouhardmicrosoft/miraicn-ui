# miraicn/ui

Accessible and customizable components that you can copy and paste into your apps. Free. Open Source. **Use this to build your own component library**.

*miraicn/ui is a fork of [shadcn/ui](https://github.com/shadcn/ui), building upon its excellent foundation to create a new component library.*

![hero](apps/www/public/og.jpg)

## Documentation

Visit the documentation to learn more about using miraicn/ui.

## Testing Locally

You can test the miraicn/ui CLI locally before publishing to npm:

### Quick Start

```bash
# Install dependencies
pnpm install

# Run the documentation site (includes component registry)
pnpm www:dev

# In another terminal, run the CLI in development mode
pnpm miraicn:dev
```

### Testing CLI Commands

```bash
# Test with local registry (make sure pnpm www:dev is running)
REGISTRY_URL=http://localhost:3333/r pnpm miraicn add button

# Or use the development scripts
pnpm miraicn init
pnpm miraicn add button
```

### Other Testing Methods

1. **Using npm/pnpm link** (test as if installed globally):
   ```bash
   cd packages/shadcn
   pnpm link --global
   miraicn-ui add button
   ```

2. **Direct execution**:
   ```bash
   node packages/shadcn/dist/index.js add button
   ```

3. **Using npx with local path**:
   ```bash
   npx ./packages/shadcn add button
   ```

**Note**: Since miraicn.com doesn't exist yet, always use the local registry by running `pnpm www:dev` first.

## Contributing

Please read the [contributing guide](/CONTRIBUTING.md).

## License

Licensed under the [MIT license](/LICENSE.md).

## Attribution

This project is a fork of [shadcn/ui](https://github.com/shadcn/ui) created by [@shadcn](https://twitter.com/shadcn).
