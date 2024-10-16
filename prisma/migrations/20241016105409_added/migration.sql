/*
  Warnings:

  - Made the column `age` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
CREATE SEQUENCE user_age_seq;
ALTER TABLE "User" ALTER COLUMN "age" SET NOT NULL,
ALTER COLUMN "age" SET DEFAULT nextval('user_age_seq');
ALTER SEQUENCE user_age_seq OWNED BY "User"."age";
