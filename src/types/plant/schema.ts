import { objectType } from "@nexus/schema";

export const Plant = objectType({
  name: "Plant",
  definition(t) {
    t.id("id");
    t.model.name();
    t.model.description();
    t.model.sprayFrequency();
    t.model.cardinalPoint();
    t.model.shortExposure();
    t.model.image();
    t.model.soilTypes();
  },
});
