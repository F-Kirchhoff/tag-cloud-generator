# Tag Cloud Generator

This is a small node.js programm to generate tag clouds in excalidraw from a .csv file.

## Installation

Install all dependencies via npm:

```bash
npm i
```

## Prepare Input

You need to save all tags you want to generate in a .csv file. Separate the tag texts by a **comma and/or line break**. You can also use [this template](template.csv).

You can wrap text in **double quotation marks** to prevent splitting by a comma, e.g:

- `"[a, b, c]"` - here the array is not split in 3 separate tags

For structuring the tags you can write headlines starting with a `#`. They are not turned into tags, e.g:

- `# JS basics` - this line is ignored and not turned into a tag

## Usage

Call the program with node and specify the csv file you want to use to generate the tags.

```bash
node tcg.js <path to csv file>
```

example:

```bash
node tcg.js tags.csv
```

Optional:

- `--color` - defines the background color of the tag boxes (default is gray)
  - '#C0DE12' - custom background color as hex code
  - red
  - orange
  - yellow
  - green
  - blue
  - violet
  - rainbow
- `--name`
  - <your file name> - Specify a custom name for the output file

Example:

```bash
node tcg.js tags.csv --color rainbow --name session13
```
