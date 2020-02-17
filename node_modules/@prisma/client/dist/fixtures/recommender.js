"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recommender = `
model Article {
  id      Int      @id
  url     String   @unique
  title   String
  content String
  date    DateTime
  likedBy User[]
  link Link
}

model Link {
  id Int @id
  article Article
  postedAt DateTime
}

model User {
  id            Int       @id
  name          String
  email         String    @unique
  likedArticles Article[]
  persona Persona
}

model Persona {
  id Int @id
  isDeveloper Boolean
}
`;
//# sourceMappingURL=recommender.js.map