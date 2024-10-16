/*
  Warnings:

  - You are about to drop the column `gone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `gone1` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "gone",
DROP COLUMN "gone1";
