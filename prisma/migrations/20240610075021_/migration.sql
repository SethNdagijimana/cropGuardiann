/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Insurance` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Insurance" DROP CONSTRAINT "Insurance_userId_fkey";

-- AlterTable
ALTER TABLE "Insurance" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Insurance_email_key" ON "Insurance"("email");

-- AddForeignKey
ALTER TABLE "Insurance" ADD CONSTRAINT "Insurance_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
