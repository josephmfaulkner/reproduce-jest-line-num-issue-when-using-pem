
## Simple Project to Reproduce issue:
### Jest displays wrong line numbers when pem library (version 1.14.8) is added to project

```
yarn install
yarn test
```


Initially, Jest displays the correct line that causes test to fail for a simple test.
![Jest reports correct line number ](SCREENSHOT-correct-line-reported.png)

When pem is added to the project (uncomment out the first line on testedComponent.js), jest reports the same failed test on the wrong line number. 
![Jest reports wrong line number with pem incorporated into project](SCREENSHOT-wrong-line-reported.png)

My goal is to have Jest report the correct line that causes a test to fail with projects that include pem version 1.14.8 
This issue seems to have been present in the project since version 1.14.7
It doesn't reproduce for version 1.14.6 and below. 

