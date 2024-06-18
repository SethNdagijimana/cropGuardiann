/*
  Warnings:

  - You are about to drop the column `userEmail` on the `Feedback` table. All the data in the column will be lost.
  - Added the required column `email` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_userEmail_fkey";

-- DropIndex
DROP INDEX "Feedback_userEmail_key";

-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "userEmail",
ADD COLUMN     "email" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
