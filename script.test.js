import { describe, it, expect } from "vitest";
import { add } from "./script";

describe("add function", () => {
  it("should exist", () => {
    expect(add).toBeDefined();
    expect(typeof add).toBe("function");
  });

  it("should return 0 if the query parameter is not a string", () => {
    expect(add(123)).toBe(0);
    expect(add({})).toBe(0);
    expect(add([])).toBe(0);
    expect(add(null)).toBe(0);
    expect(add(undefined)).toBe(0);
    expect(add(true)).toBe(0);
  });

  it("should return 0 if the query parameter is an empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return the sum of comma-separated numbers in a string", () => {
    expect(add("1")).toBe(1);
    expect(add("1,5")).toBe(6);
    expect(add("1,2,3,4")).toBe(10);
    expect(add("1,2,3,4,5")).toBe(15);
  });

  it("should return the sum of numbers separated by new lines", () => {
    expect(add("1\n2\n3")).toBe(6);
    expect(add("1\n2\n3\n4")).toBe(10);
    expect(add("1\n2\n3\n4\n5")).toBe(15);
  });

  it("should handle mixed separators (commas and new lines)", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("1,2\n3\n4")).toBe(10);
    expect(add("10\n20,30")).toBe(60);
  });

  it("should handle custom delimiters", () => {
    expect(add("//:\n1:2")).toBe(3); // delimiter :
    expect(add("//-\n1-2-3")).toBe(6); // delimiter -
    expect(add("//%\n1%2%3%4")).toBe(10); // delimiter %
    expect(add("//@\n1@2@3@4@5")).toBe(15); // delimiter @
    expect(add("//--\n1--2--3--4--5")).toBe(15); // delimiter --
  });

  it("should throw an exception for negative numbers", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
    expect(() => add("-1,-2,-3")).toThrow(
      "negative numbers not allowed -1, -2, -3"
    );
    expect(() => add("1,2\n-3,4")).toThrow("negative numbers not allowed -3");
    expect(() => add("//@\n1@-2@3@4@-5")).toThrow(
      "negative numbers not allowed -2, -5"
    );
  });
});
