import type { IComment } from "@/interfaces/comment.interface";

export interface IPost {
  id: number;
  title: string;
  description: string;
  comments: IComment[];
}
