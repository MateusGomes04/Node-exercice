const { Module } = require("module");

function upper(text) {
  return text.toUpperCase();
}

Module.exports = { upper };
