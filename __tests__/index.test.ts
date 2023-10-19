export {};

const { convertRichTextToMarkdown } = require("../src/index");
const { describe, expect } = require("@jest/globals");
const {
  basicRichText,
  richTextWithList,
  richTextWithCodeBlock,
  exampleCustomFromPython,
} = require("../mocks/mocks");

describe("convertRichTextToMarkdown should return markdown when passed a: ", () => {
  it("basic rich-text obj", () => {
    const markdown = convertRichTextToMarkdown(basicRichText);

    expect(markdown).toEqual("A classic game of Tic Tac Toe for the Command Line.");
  });
  it("rich-text obj with unordered list", () => {
    const markdown = convertRichTextToMarkdown(richTextWithList);

    expect(markdown).toMatchSnapshot();
  });
  it("rich-text obj with unordered list", () => {
    const markdown = convertRichTextToMarkdown(richTextWithList);

    expect(markdown).toMatchSnapshot();
  });
  it("rich-text obj with code block", () => {
    const markdown = convertRichTextToMarkdown(richTextWithCodeBlock);

    expect(markdown).toMatchSnapshot();
  });
  it("rich-text obj with code embedded asset", () => {
    const markdown = convertRichTextToMarkdown(exampleCustomFromPython);

    const regex =
      /{"customEmbeddedImage":{"title":"Test Logo","url":"https:\/\/images\.ctfassets\.net\/[^\/]+\/[^\/]+\/[^\/]+\/Test_Logo\.png"}}/;

    expect(regex.test(markdown)).toBe(true);
  });
});
