export type Todo = {
  id: number;
  content: string;
  is_completed: boolean;
  author: {
    id: number;
    profile_picture: string;
  };
};
