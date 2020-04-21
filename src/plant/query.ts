import { queryField, stringArg, arg, idArg } from "@nexus/schema";

export const CreatePlant = queryField("createPlant", {
  type: "Plant",
  args: {
    name: stringArg({ required: true }),
    description: stringArg({ required: true }),
    sprayFrequency: arg({
      type: "CardinalPoint",
      required: true,
    }),
    shortExposure: arg({
      type: "ShortExposure",
      required: true,
    }),
  },
  resolve: async (
    _,
    { name, description, sprayFrequency, shortExposure },
    { prisma }
  ) => {
    const plant = await prisma.plant.create({
      data: {
        name,
        description,
        sprayFrequency,
        shortExposure,
      },
    });
    return plant;
  },
});

export const DeletePlant = queryField("deletePlant", {
  type: "Plant",
  args: {
    id: idArg({ required: true }),
  },
  resolve: async (_, { id }, { prisma }) => {
    const plant = await prisma.plant.delete({
      where: id,
    });
    return plant;
  },
});

export const UpdatePlant = queryField("updatePlant", {
  type: "Plant",
  args: {
    id: idArg({ required: true }),
  },
  resolve: async (_, { id }, { prisma }) => {
    const plant = await prisma.plant.update({
      where: id,
      data: {
        id,
      },
    });
    return plant;
  },
});
