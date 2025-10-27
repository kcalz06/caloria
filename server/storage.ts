import { type User, type InsertUser, type BlogPost, type InsertBlogPost } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.initializeSamplePosts();
  }

  private initializeSamplePosts() {
    const samplePosts: BlogPost[] = [
      {
        id: randomUUID(),
        title: "welcome to my pixel world",
        excerpt: "first post on my new chibi blog! excited to share my thoughts with everyone...",
        content: "Hi everyone! Welcome to my little corner of the internet. I've been wanting to start a blog for a while now, and I finally did it! This is going to be a place where I share my thoughts, projects, and daily adventures. Stay tuned for more updates!",
        imageUrl: "/attached_assets/generated_images/Cozy_pixel_art_header_e2517497.png" as string,
        publishedAt: new Date("2025-10-20"),
      },
      {
        id: randomUUID(),
        title: "cozy coding sessions",
        excerpt: "spent the afternoon coding with coffee and lofi music. best vibes ever...",
        content: "There's something magical about afternoon coding sessions. The sunlight streaming through the window, a warm cup of coffee by my side, and lofi beats playing in the background. Today I worked on some fun pixel art animations and it was incredibly relaxing. Sometimes the best productivity comes from being comfortable and enjoying the process.",
        imageUrl: "/attached_assets/generated_images/Pixel_coffee_illustration_de0600eb.png" as string,
        publishedAt: new Date("2025-10-22"),
      },
      {
        id: randomUUID(),
        title: "night thoughts and pixel dreams",
        excerpt: "late night musings about creativity and finding inspiration in small things...",
        content: "It's 2 AM and I can't sleep, so I thought I'd write. I've been thinking a lot about creativity lately. How sometimes the best ideas come when you're not trying. When you're just existing, watching the stars, letting your mind wander. I find so much inspiration in pixel art because it forces you to work with constraints, and constraints breed creativity. Less is more, you know?",
        imageUrl: "/attached_assets/generated_images/Pixel_night_sky_scene_3db49624.png" as string,
        publishedAt: new Date("2025-10-25"),
      },
    ];

    samplePosts.forEach(post => {
      this.blogPosts.set(post.id, post);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
    );
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = { 
      ...insertPost, 
      id,
      imageUrl: insertPost.imageUrl ?? null 
    };
    this.blogPosts.set(id, post);
    return post;
  }
}

export const storage = new MemStorage();
