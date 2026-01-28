# Codewars Solutions (JavaScript)

A growing collection of my Codewars kata solutions, organized by kata name.

Each kata lives in its own folder and includes:
- A JavaScript solution file.
- A Mocha + Chai test file.

The project is configured as an ES Modules package (`"type": "module"`), so tests use `import` syntax.

## Run a single kata test

From the repository root:

```bash
npm test -- "kata-folder/kata-file.test.js"
```

Example:

```bash
npm test -- "does-my-number-look-big-in-this/does-my-number-look-big-in-this.test.js"
```

## Run tests by filename (from any subfolder)

```bash
npm run test:file --file=detect-pangram.test.js
```

## Run all tests

```bash
npm run test:all
```

## Folder structure

```text
codewars/
  kata-name/
    kata-name.js
    kata-name.test.js
```

## Notes

- Some kata may use alternative test naming (e.g. `.tst.js`). In that case, run the exact file name.
- Mocha and Chai are listed in `devDependencies`, so `npx` will use the local versions.
