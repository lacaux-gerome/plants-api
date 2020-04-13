# Migration `20200413114823-initial`

This migration has been generated by Gérome Lacaux at 4/13/2020, 11:48:23 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Plant" (
    "description" text  NOT NULL ,
    "id" SERIAL,
    "image" text   ,
    "name" text  NOT NULL ,
    "soilTypes" "Soil" NOT NULL ,
    "sprayFrequency" integer  NOT NULL ,
    "sunExposure" "SunExposure" NOT NULL ,
    PRIMARY KEY ("id")
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200413114823-initial
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,30 @@
+datasource db {
+  provider = "postgresql"
+  url      = "postgresql://admin:admin_psw@localhost:5432/plants"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Plant {
+  id             Int         @default(autoincrement()) @id
+  name           String
+  description    String
+  sprayFrequency Int
+  sunExposure    SunExposure
+  image          String?
+  soilTypes      Soil
+}
+
+enum Soil {
+  SANDY
+  CLAY
+  SILT
+}
+
+enum SunExposure {
+  FULL_SUN
+  HALF_SUN
+  NO_SUN
+}
```

