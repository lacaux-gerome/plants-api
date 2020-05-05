import { queryField, stringArg, arg, idArg, intArg } from "@nexus/schema";

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
    cardinalPoint: arg({
      type: "CardinalPoint",
      required: true,
    }),
    soilTypes: arg({
      type: "Soil",
      required: true,
    }),
  },
  resolve: async (_, args, { prisma }) => {
    const plant = await prisma.plant.create({
      data: {
        ...args,
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
    name: stringArg(),
    description: stringArg(),
    sprayFrequency: intArg(),
    shortExposure: arg({ type: "ShortExposure" }),
    soilTypes: arg({ type: "Soil", list: true }),
  },
  resolve: async (_, { id, ...args }, { prisma }) => {
    const plant = await prisma.plant.update({
      where: { id },
      data: {
        id,
        ...args,
      },
    });
    return plant;
  },
});
