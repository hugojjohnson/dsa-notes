import React from "react";

export interface requestResponse<T> {
    success: boolean;
    data: T | string;
    status?: number;
}

export interface Log {
    _id: string;
    question: string;
    correct: boolean;
}

export interface QuestionI {
    question: React.ReactNode;  // <- in markdown.
    options: string[];  // <- in markdown.
    correct: number;
    // images: string; // <- in base 64?
    // explanation: string; // <- in markdown.
}