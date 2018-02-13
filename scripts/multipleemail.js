<!--
/* This script and many more are available free online at
The JavaScript Source!! http://javascript.internet.com
Created by: Lee Underwood :: http://javascript.internet.com/ */
var userName = new Array();
  // insert the first part of the address below
  userName[0]="ebartlett";
  userName[1]="tcummings";
  userName[2]="jmcnally";
  userName[3]="jwilliamson";
  userName[4]="bdeluca";
  userName[5]="brusso";
  userName[6]="cla";
var userNameFull = new Array();
  // Insert the name associated with the address
  // Important! Make sure the numbers line-up with the addresses above
  userNameFull[0]="ebartlett@claengineers.com";
  userNameFull[1]="tcummings@claengineers.com";
  userNameFull[2]="jmcnally@claengineers.com";
  userNameFull[3]="jwilliamson@claengineers.com";
  userNameFull[4]="bdeluca@claengineers.com";
  userNameFull[5]="brusso@claengineers.com";
  userNameFull[6]="cla@claengineers.com";
// Insert the domain name portion of the address below
var siteName = "claengineers.com";
i=0;
do userName[i]='<a href=\"mailto:' + userName[i] + '@' + siteName + '\">' + userNameFull[i] + '</a>';
while(userName[++i])
// -->