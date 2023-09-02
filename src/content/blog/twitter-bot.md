---
title: "Making a Twitter Bot using Python"
description: "This blog covers how you can make your very own custom Twitter bot that tweets Programming Quotes/Jokes using pyton"
pubDate: "Sep 2 2023"
heroImage: "https://i.ibb.co/PtXKZnp/twitter-image.png"
---

# Making a Twitter Bot using Python

This blog covers how you can make your very own custom Twitter bot that tweets Programming Quotes/Jokes using pyton.

## Prequesties:

### Requirements

- Basic knowledge in Pyton (ie, creating functions..)
- Python version 3
- Have a developer account or [create one](https://developer.twitter.com) for using twitter API

### Recommended

- Having intermediate knowledge in Python. Allows to dive deeper with the API.
- Knowledge in working with http request
- Bash terminal. Used in this blog

## Creating the project

First create a `main.py`

```bash
# Using bash
touch main.py
```

Inside the file, create a main function

```python
def main():
    # Print Hello World
    print("Hello World")


main()
```

## Installing tweepy

We will be using tweepy to not have to handle OAuth and will allow us save time.

### Installling dependencies

```bash
pip install tweepy
```

You can use `dotenv` to get environment variables from `.env` file

```bash
pip install python-dotenv
```

### Setting up the client

In the `.env` file

```shell
BEARER_TOKEN="Your-bearer-token"
API_KEY="Your-api-key"
API_KEY_SECRET="Your-api-secret"
ACCESS_TOKEN="Your-access_token"
ACCESS_TOKEN_SECRET="Your-token-secret"
```

You can also export these variables and use them without `dotenv`

```python
import tweepy
from dotenv import load_env
import os

# Loading variables from .env
load_env()

bearer_token = os.environ["BEARER_TOKEN"]
api_key = os.environ["API_KEY"]
api_secret = os.environ["API_KEY_SECRET"]
access_token = os.environ["ACCESS_TOKEN"]
access_token_secret = os.environ["ACCESS_TOKEN_SECRET"]

client = tweepy.Client(
    bearer_token,
    api_key,
    api_secret,
    access_token,
    access_token_secret,
)

```

## Getting Jokes/Quotes

We will some APIs to get Jokes/Quotes

Define two different funtions for getting a joke and a quote

```python
# import statements
import requests

# Code...

def get_joke():
    # I know I'm not using this the right way, but it works
    jokes_api_url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart"
    response = requests.get(url=jokes_api_url)

    jokes = response.json()

    return joke


def get_quote():
    # Get quotes about programming
    quotes_api_url = "https://api.quotable.io/random?tags=technology"
    response = requests.get(url=quotes_api_url)

    quote = response.json

    return quote

```

I reccommend `testing` these apis using by printing it on console before moving on

## Tweeting Joke/Quote

Now lets get into actually tweeting with `code`.

Lets declare seperate functions for tweeting a joke and tweeting a quote.

```python
# Code..

def tweet_joke(joke):
    # Extracting different section from the api
    tweet = f"{joke['setup']}\n\n\n{joke['delivery']}"

    client.create_tweet(text=tweet)


def tweet_quote(quote):
    # Extracting and formatting
    tweet = f'"{quote["content"]}"\n\t\t\t-{quote["author"]}'

    client.create_tweet(text=tweet)


```

I have made some adjestments to the `output string` that create new lines and add tab spacing as needed. Feel free to make modifications of your own.

## Final Step

Now that we have all the functions in place to send tweets lets actually tweet Joke/Quote by random

In the main function

```python
# Import statements
import random

def main():
    print("Tweeting...\n")

    # Getting a random number
    random_number = random.random()

    if random_number < 0.5:
        print("Tweeting a joke")
        tweet_joke(get_joke())
    else:
        print("Tweeting a quote")
        tweet_quote(get_quote())

# Code..


```

We first get a random number and then we declare an if statement to tweet a joke or tweet a quote with a 50% chance. Feel free to make any sort of modifications in the app. If you want to explore more from the twitter api check out the [tweepy docs](https://docs.tweepy.org/en/stable/getting_started.html). Explore the [twitter docs](https://developer.twitter.com/en/docs/platform-overview) for exploring beyond what we have covered and if you have a api subscription you will get access to more tools from twitter.

## Stuck?

If you are stuck make sure to check out the documentation

- [Twitter](https://developer.twitter.com/en/docs/platform-overview)
- [Tweepy](https://docs.tweepy.org/en/stable/getting_started.html)

Check out the full [Source Code](https://github.com/JothishJJ/RandTweet)
