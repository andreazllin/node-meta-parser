#!/bin/bash

# Run this ONLY IN THE `script` BRANCH
# To update build on GitHub repository 

RED='\033[1;31m';
CYAN='\033[1;36m';
GREEN='\033[1;32m';
NC='\033[0m';

BRANCH="$(git rev-parse --abbrev-ref HEAD)";

if [[ "$BRANCH" != "build" ]]; then
  echo -e "${RED}This is not branch 'build'${NC}";
  sleep 2
  echo -e "${RED}Aborting script...${NC}";
  exit 1;
fi

echo -e "${CYAN}Hard Reset to Main${NC}";
sleep 2
git reset --hard main

echo -e "${CYAN}Removing '/dist/' from '.gitignore'${NC}";
sleep 2
tail -n +4 .gitignore > .gitignore.temp
mv .gitignore.temp .gitignore

echo -e "${CYAN}npm install...${NC}";
sleep 2
npm install

echo -e "${CYAN}tsc...${NC}";
sleep 2
npm run transpile

echo -e "${CYAN}Committing to branch...${NC}";
sleep 2
git add .
git commit -m "Update ./dist/"

echo -e "${CYAN}Force pushing to remote branch...${NC}";
sleep 2
git push --force

sleep 2
echo -e "${GREEN}Done!${NC}";