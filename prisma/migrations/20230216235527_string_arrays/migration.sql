/*
  Warnings:

  - The `foodDetailsGreek` column on the `Menu` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `foodDetailsEnglish` column on the `Menu` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `foodInfosGreek` column on the `Menu` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `foodInfosEnglish` column on the `Menu` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `restaurantInfosGreek` column on the `Menu` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `restaurantInfosEnglish` column on the `Menu` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `footnote` column on the `Menu` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "foodDetailsGreek",
ADD COLUMN     "foodDetailsGreek" TEXT[],
DROP COLUMN "foodDetailsEnglish",
ADD COLUMN     "foodDetailsEnglish" TEXT[],
DROP COLUMN "foodInfosGreek",
ADD COLUMN     "foodInfosGreek" TEXT[],
DROP COLUMN "foodInfosEnglish",
ADD COLUMN     "foodInfosEnglish" TEXT[],
DROP COLUMN "restaurantInfosGreek",
ADD COLUMN     "restaurantInfosGreek" TEXT[],
DROP COLUMN "restaurantInfosEnglish",
ADD COLUMN     "restaurantInfosEnglish" TEXT[],
DROP COLUMN "footnote",
ADD COLUMN     "footnote" TEXT[];
