#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

const colors = require('colors');
const express = require('express');
const { program } = require('commander');

program
    .version(require('./package.json').version)
    .command('serve', 'Serve your SPRINT app on port 8080.')
    .command('init <dir>', 'Create a new SPRINT app in the given directory.')

program.parse(process.argv);