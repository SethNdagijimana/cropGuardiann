/*
  Warnings:

  - Added the required column `name` to the `Insurance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Insurance" ADD COLUMN     "name" TEXT NOT NULL;
