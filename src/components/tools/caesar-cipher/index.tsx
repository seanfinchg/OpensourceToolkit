"use client";

import React, { useState, useMemo } from "react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

import ToolsWrapper from "@/components/wrappers/ToolsWrapper";

export default function CaesarCipher() {
  const [inputText, setInputText] = useState("");
  const [shift, setShift] = useState(3);

  // Caesar cipher encoding function
  const caesarShift = (text: string, shiftAmount: number): string => {
    if (!text) return "";

    return text
      .split("")
      .map((char) => {
        // Only shift letters
        if (/[a-zA-Z]/.test(char)) {
          const isUpper = char === char.toUpperCase();
          const base = isUpper ? 65 : 97; // ASCII 'A' or 'a'
          const charCode = char.charCodeAt(0);
          const shifted = ((charCode - base + shiftAmount) % 26) + base;
          return String.fromCharCode(shifted);
        }
        // Keep non-letters unchanged
        return char;
      })
      .join("");
  };

  // Compute encoded text
  const encoded = useMemo(() => {
    return caesarShift(inputText, shift);
  }, [inputText, shift]);

  return (
    <ToolsWrapper>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Caesar Cipher Encoder/Decoder</h1>
        <p className="text-muted-foreground">
          Encode and decode text using the classic Caesar cipher with adjustable
          shift values
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Input Section */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Input</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="input-text">Text to Encode/Decode</Label>
                <Textarea
                  id="input-text"
                  placeholder="Enter your text here..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  rows={8}
                  className="font-mono"
                />
              </div>

              {/* Shift Amount */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="shift">Shift Amount</Label>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {shift}
                  </span>
                </div>
                <Slider
                  id="shift"
                  min={1}
                  max={25}
                  step={1}
                  value={[shift]}
                  onValueChange={(value) => setShift(value[0])}
                  className="w-full"
                />
                <Input
                  type="number"
                  min={1}
                  max={25}
                  value={shift}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (val >= 1 && val <= 25) setShift(val);
                  }}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Encoded Text</CardTitle>
            </CardHeader>
            <CardContent>
              {inputText ? (
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                  <pre className="whitespace-pre-wrap break-words font-mono text-sm">
                    {encoded}
                  </pre>
                </div>
              ) : (
                <div className="flex min-h-[200px] items-center justify-center rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700">
                  <p className="text-muted-foreground">
                    Enter text to see encoded result
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </ToolsWrapper>
  );
}
