import { objectType } from "@nexus/schema";

export const PlantBox = objectType({
  name: "PlantBox",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.image();
    t.model.plants();
  },
});
