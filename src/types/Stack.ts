export interface Stack {
  name: string;
  level: 'Basic' | 'Intermediate' | 'Experienced';
  type?: 'tech' | 'tool';
}