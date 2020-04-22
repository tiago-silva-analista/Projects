[![CircleCI](https://circleci.com/gh/circleci/circleci-docs/tree/teesloane-patch-5.svg?style=svg)](https://circleci.com/gh/circleci/circleci-docs/tree/teesloane-patch-5)
# Welcome to Be the Hero Project! 
The project name is based as a opportunity that the user has to be a hero for someone performing a donation to help some animal that needs to be treated.

This is a project created according to Omnistack Week project, this is a kind of week course that will enable the students to learn the best way to code and features from **React** and **node** languages.

The final result will be an app to connect people with ONGS to perform donations.

#Node.js #ReactJS #React-Native

## Structure

```mermaid
graph LR
A[ User]  --> B((Mobile App))
A --> C(Web Portal)
B -- React Native --> D{Node JS: BackEnd}
C -- React JS --> D
