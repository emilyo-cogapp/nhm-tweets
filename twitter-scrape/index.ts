import * as dotenv from 'dotenv';
import { TwitterClient } from 'twitter-api-client';

const twitterClient = new TwitterClient({
  apiKey: 'process.env.TWITTER_API_KEY',
  apiSecret: 'process.env.TWITTER_API_SECRET',
});

const getTweets = async () => {
  // Get most recent 25 retweets of a tweet
  const data = await twitterClient.tweets.statusesUserTimeline({ user_id: '35749264', count: 1, include_rts: false, exclude_replies: true });

  return data;
}

dotenv.config({ path: __dirname+'/.env' });
getTweets();
