import { queryField, stringArg, arg, idArg, intArg } from "@nexus/schema";
import { optionalFieldToInputSetable } from "../utils/utils-object";

export const CreatePlant = queryField("createPlant", {
  type: "Plant",
  args: {
    name: stringArg({ required: true }),
    description: stringArg({ required: true }),
    sprayFrequency: intArg({
      required: true,
    }),
    shortExposure: arg({
      type: "ShortExposure",
      required: true,
    }),
    soilTypes: arg({ type: "Soil", list: true }),
    cardinalPoint: arg({
      type: "CardinalPoint",
      list: true,
    }),
  },
  resolve: async (_, { cardinalPoint, soilTypes, ...args }, { prisma }) => {
    const plant = await prisma.plant.create({
      data: {
        ...args,
        ...optionalFieldToInputSetable(soilTypes),
        ...optionalFieldToInputSetable(cardinalPoint),
      },
    });
    return plant;
  },
});

export const DeletePlant = queryField("deletePlant", {
  type: "Plant",
  args: {
    id: intArg({ required: true }),
  },
  resolve: async (_, { id }, { prisma }) => {
    const plant = await prisma.plant.delete({
      where: { id },
    });
    return plant;
  },
});

export const UpdatePlant = queryField("updatePlant", {
  type: "Plant",
  args: {
    id: intArg({ required: true }),
    name: stringArg({ nullable: true }),
    description: stringArg({ nullable: true }),
    sprayFrequency: intArg({ nullable: true }),
    shortExposure: arg({ type: "ShortExposure", nullable: true }),
    soilTypes: arg({ type: "Soil", list: true, nullable: true }),
    cardinalPoint: arg({
      type: "CardinalPoint",
      list: true,
      nullable: true,
    }),
  },
  resolve: async (_, { id, soilTypes, cardinalPoint, ...args }, { prisma }) => {
    const plant = await prisma.plant.update({
      where: { id },
      data: {
        id,
        ...optionalFieldToInputSetable(soilTypes),
        ...optionalFieldToInputSetable(cardinalPoint),
        ...args,
      },
    });
    return plant;
  },
});
