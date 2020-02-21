# 1MillionDevs Pepo Community Portal

#### Setup

```
$ yarn
```

#### Development

```
$ yarn start
```

#### Production

```
$ yarn build
$ yarn deploy
```

## Overview

The **Community Portal** is an experiment to test short-form video updates in the Ethereum community.

The Pepo Community Portal is a playground for the 1MD video community. Pepo focuses on 30 second videos. Videos can be easily replied to and be tipped. The tip is transered as a Pepo token. The Pepo token runs on an OST sidechain.

experiment: https://ideas.onemilliondevs.com
<br/>development: https://pepo-community-portal.firebaseapp.com
<br/>reference: https://pepo.com

### Hypothesis

Short form video will enable more active conversations and engagements in the Ethereum community. Micro-tipping will enhance the relationships between creators and audience.

**Steps To Validate**

1. Grow Pepo Community to 500 Active Users
2. Weekly Bounties & Micro-Tasks
3. Highlight New Projects

### Background

**The 1MD & Pepo Leaderboard was an experiment started at EthDenver.** The original assumption was a video leaderboard would help us incentivize specific event actions.

#### Results

The audience we reached is 70+ members and 50+ videos in the first week.

During the original event (EthDenver) our focus was curating "aha moments" and "big ideas" from the attendees. Videos posted contained a mixture of tags: #1MillionDevs #1MD #idea #aha, etc...

### How It Works

##### Backend

- Webhook to Pepo Video Backend
- Listen for Specific Tags: #1MillionDevs, #1MD, #aha, #idea
- Store Video updates/contributions in Database.

##### Frontend

- [x] Leaderboard
- [ ] Profile Page
- [ ] Advanced Leaderboard
- [ ] Social Graph

### Major Tasks

- [ ] Profile Page
- [ ] Advanced Leaderboards
- [ ] Social Graph

### Profile Page

The profile page should highlight a 1MillionDevs Community Member video contributions.

### Current Demo Screenshots

![image](https://user-images.githubusercontent.com/3408362/75002568-bffa7800-5419-11ea-95be-05581c113d59.png)
![image](https://user-images.githubusercontent.com/3408362/75001984-d0a9ee80-5417-11ea-8c2c-430e90e3c8f9.png)
![image](https://user-images.githubusercontent.com/3408362/75002109-35fddf80-5418-11ea-89f2-f8a0d1eb1047.png)
