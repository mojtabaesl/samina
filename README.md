# Samina

## Description

This is the assignment for samina

## Start the app

```
npm install
```

```
npm run serve:client
```

Open your browser and navigate to http://localhost:4200/. Happy coding!

## Tech Stack

`NX`, `Vite`, `TailwindCss`, `RadixUI`

## Todo

`- [ ]` Add filter to table with [react-table filter Api](https://tanstack.com/table/v8/docs/guide/column-filtering)

`- [ ]` Add pagination with [react-table pagination Api](https://tanstack.com/table/v8/docs/guide/pagination)

`- [ ]` Add pinned columns with [react-table column pinning Api](https://tanstack.com/table/v8/docs/guide/column-pinning)

## Problems

Some of technical dept that I made intentionally because of time pressure:

- I refrained from using the Yekan Bakh font due to its licensing restrictions, and since I didn't have access to it. Instead, I opted to use the Iran Sans font as a suitable alternative.
- Large and not feature-specific git commits.
- A lot of DRY violations.
- Naming inconsistency.
- Not being responsive.
- Not internationalized.
- Filters and LoadMore and some other stuff are not working.

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Ready to deploy?

Just run `npx nx run-many -t build` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Good to mention

- Type checking before each commit with `nx affected` command.
- Spell checking before each commit.
