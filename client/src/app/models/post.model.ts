import { Theme } from "./theme.model";
import { User } from "./user.model";

export interface Post {
    likes: string[];
    _id: string;
    text: string;
    userId: User;
    themeId: Theme;
    created_at: string;
    updatedAt: string;
    __v: number;
}