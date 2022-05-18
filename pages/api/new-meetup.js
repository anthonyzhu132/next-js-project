import { MongoClient } from "mongodb";
// api/new-meetup



export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    MongoClient.connect(
      `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.m29e0.mongodb.net/?retryWrites=true&w=majority`
    );
  }
}
