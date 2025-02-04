#!/usr/bin/env node
import playGame from "../src/index.js";
import { getQuestionAndAnswer, rule } from "../src/games/gcd.js";
import { NOD } from "../src/games/gcd.js";
playGame(rule, getQuestionAndAnswer)
