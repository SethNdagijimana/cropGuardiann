/*
  Warnings:

  - You are about to drop the column `insurance` on the `Insurance` table. All the data in the column will be lost.
  - Added the required column `prime` to the `Insurance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Insurance" DROP COLUMN "insurance",
ADD COLUMN     "prime" TEXT NOT NULL;
