# Tag Cloud Generator

This is a small node.js programm to generate tag clouds in excalidraw from a csv file.

## Installation

Install all dependencies via npm:

```bash
npm i
```

## Usage

Call the program with node and specify the csv file you want to use to generate the tags:

```bash
node tcg.js <path to csv file>
```

example:

```bash
node tcg.js tags.csv
```

Optional: You can make the tags more colorful by adding a `rainbow` after the specified csv file:

```bash
node tcg.js tags.csv rainbow
```
