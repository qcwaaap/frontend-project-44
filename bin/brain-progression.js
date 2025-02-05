#!/usr/bin/env node
import playGame from '../src/index.js';
import { getQuestionAndAnswer, rule } from '../src/games/progression.js';

playGame(rule, getQuestionAndAnswer);
