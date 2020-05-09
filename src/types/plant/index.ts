import { Plant } from "./schema";
import { CreatePlant, DeletePlant, UpdatePlant } from "./query";

export const PlantModel = [Plant, CreatePlant, DeletePlant, UpdatePlant];
