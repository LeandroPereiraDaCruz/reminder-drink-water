# Reminder drink water
A slack bot to reminder us to drink water.

![image](https://media.giphy.com/media/WGFdv6kbikBq0/giphy.gif)

## SETUP
Add the environment variable with the slack incoming web hook.
Ex:
```
SLACK_URL=**************
```
## INSTALL
```
npm i
```

## OPTIONAL
Create a cron job to run the program automaticaly
Ex runnning every day in each 30 minutes from 7 to 20 hour:
```
*/30 7-20 * * * bash /home/$USER/git/drink_water_reminder/run > /home/$USER/git/drink_water_reminder/log.txt 2>&1


