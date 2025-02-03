#!/usr/bin/env node
import playGame from "../src/index.js";
import { getQuestionAndAnswer, rule } from "../src/games/even.js";

playGame(rule, getQuestionAndAnswer)